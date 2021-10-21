import {
  Container,
  Stack,
  Typography,
  Rating,
  Avatar,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import { FunctionComponent } from "react";
import { loremIpsum } from "react-lorem-ipsum";

import _ from "lodash";
import { GetServerSideProps } from "next";

type ProductDetailsPageProperties = {
  id: string;
  image: string;
  title: string;
  description: string;
  rating: number;
  coreFeatures: string[];
};

const ProductDetailsPage: FunctionComponent<ProductDetailsPageProperties> = ({
  id,
  image,
  title,
  description,
  rating,
  coreFeatures = [],
}) => {
  return (
    <Container maxWidth="md">
      <Stack divider={<Divider />} spacing={4}>
        <Stack direction="row" justifyContent="space-around" alignItems="end">
          <Avatar
            src={image}
            variant="square"
            style={{ height: 400, width: 400 }}
          />
          <Stack>
            <Typography variant="h2">{title}</Typography>
            <Rating value={rating} readOnly />
            <Button onClick={() => {}}>Add To Card</Button>
          </Stack>
        </Stack>
        <Box>
          <Typography variant="h5">Description</Typography>
          <Typography>{description}</Typography>
        </Box>
        <Box>
          <Typography variant="h5">Core Features:</Typography>
          <List>
            {coreFeatures.map((feature) => (
              <ListItem key={`${feature}-${id}`}>
                <ListItemText primary={feature} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Stack>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params: { productId },
}) => {
  return {
    props: {
      id: "123",
      image:
        "https://assets.sainsburys-groceries.co.uk/gol/7084783/1/640x640.jpg",
      title: productId,
      description: loremIpsum(),
      rating: 4,
      coreFeatures: _.times(_.random(2, 8)).map(() =>
        loremIpsum({ avgSentencesPerParagraph: 1 })
      ),
    },
  };
};

export default ProductDetailsPage;

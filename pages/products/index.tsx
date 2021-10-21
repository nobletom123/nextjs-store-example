import { Drawer, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { loremIpsum } from "react-lorem-ipsum";
import _ from "lodash";
import { useState } from "react";

import { FunctionComponent } from "react";
import { ProductCard } from "../../src/components/products/product-card";

type ProductIndexProperties = {
  products: {
    id: string;
    image: string;
    title: string;
    description: string;
    rating: number;
  }[];
};

const drawerWidth: number = 360;

const ProductIndex: FunctionComponent<ProductIndexProperties> = ({
  products = [],
}) => {
  const [averageRating, setAverageRating] = useState(5);
  const [price, setPrice] = useState();

  return (
    <Box>
      <Drawer style={{ width: drawerWidth }} variant="permanent"></Drawer>
      <div style={{ marginLeft: drawerWidth }}>
        <Grid container spacing={4}>
          {products.map(({ id, image, title, description, rating }) => (
            <Grid item key={id} sm={12} md={6} lg={3}>
              <ProductCard
                image={image}
                title={title}
                description={description}
                rating={rating}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </Box>
  );
};

export const getServerSideProps = () => {
  return {
    props: {
      products: _.times(_.random(2, 30)).map((el, i) => ({
        id: i,
        title: loremIpsum({
          avgWordsPerSentence: 3,
          avgSentencesPerParagraph: 1,
        }),
        description: loremIpsum({ avgSentencesPerParagraph: 3 }),
        rating: _.random(0, 5, true),
      })),
    },
  };
};

export default ProductIndex;

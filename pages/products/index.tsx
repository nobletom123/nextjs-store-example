import {
  Drawer,
  Grid,
  MenuItem,
  Paper,
  Rating,
  Select,
  Stack,
  Toolbar,
  Typography,
  Slider,
  Container,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import { loremIpsum } from "react-lorem-ipsum";
import _ from "lodash";
import { useMemo, useState } from "react";

import { FunctionComponent } from "react";
import { ProductCard } from "../../src/client/components/products/product-card";
import { productData } from "../../src/mock-api-data/products";
import { sortAndFilterProducts } from "../../src/client/utils/sort-and-filter-products";
import { ProductType, ProductOrderByENUM } from "../../src/types/product";
import { motion } from "framer-motion";

type ProductIndexProperties = {
  products: ProductType[];
};

const StyledRatingContainer = styled("div")({
  transition: "transform 0.15s ease-in-out",
  "&:hover": {
    transform: "scale3d(1.1, 1.1, 1)",
    cursor: "pointer",
  },
});

const drawerWidth: number = 300;

const ProductIndex: FunctionComponent<ProductIndexProperties> = ({
  products = [],
}) => {
  const [ratingAndUp, setRatingAndUp] = useState(0);
  const [orderBy, setOrderBy] = useState<ProductOrderByENUM>(
    ProductOrderByENUM.Price
  );
  const [priceAndUp, setPriceAndUp] = useState<[number, number]>([
    _.minBy(products, "price")?.price || 0,
    _.maxBy(products, "price")?.price || 0,
  ]);

  const filterdProductsList = sortAndFilterProducts(
    products,
    priceAndUp,
    ratingAndUp,
    orderBy
  );
  console.log("filterdProductsList", filterdProductsList);

  return (
    <Box>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            padding: "20px",
          },
        }}
      >
        <Toolbar />
        <Stack spacing={3}>
          <Typography>Order By</Typography>
          <Select
            value={orderBy}
            label="Age"
            onChange={(event) =>
              setOrderBy(event.target.value as ProductOrderByENUM)
            }
          >
            <MenuItem value="price">Price</MenuItem>
            <MenuItem value="rating">Rating</MenuItem>
          </Select>
          <Typography variant="h6" onClick={() => setRatingAndUp(4)}>
            Price Range
          </Typography>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={priceAndUp}
            onChange={(event, value) => {
              console.log("value", value);
              setPriceAndUp(value as [number, number]);
            }}
            valueLabelDisplay="auto"
            max={_.maxBy(products, "price")?.price}
            min={_.minBy(products, "price")?.price}
          />
          <Typography variant="h6" onClick={() => setRatingAndUp(4)}>
            Customer Review
          </Typography>
          <Box>
            {_.times(4).map((el, index, arry) => (
              <StyledRatingContainer
                onClick={() => setRatingAndUp(arry.length - index)}
              >
                <Rating value={arry.length - index} readOnly size="small" />
              </StyledRatingContainer>
            ))}
          </Box>
        </Stack>
      </Drawer>
      <Container
        style={{ marginLeft: drawerWidth }}
        sx={{ pt: "25px", pb: "25px" }}
      >
        <Grid container spacing={4}>
          {filterdProductsList.map(
            ({ id, image, title, description, rating, price }, index) => (
              <Grid item key={id} sm={12} md={6} lg={3}>
                <motion.div
                  initial={{ opacity: 0, y: "100%" }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.3 },
                  }}
                  exit={{ opacity: 0, y: "-100%" }}
                >
                  <ProductCard
                    id={id}
                    image={image}
                    title={title}
                    description={description}
                    rating={rating}
                    price={price}
                  />
                </motion.div>
              </Grid>
            )
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export const getServerSideProps = () => {
  return {
    props: {
      products: productData,
    },
  };
};

export default ProductIndex;

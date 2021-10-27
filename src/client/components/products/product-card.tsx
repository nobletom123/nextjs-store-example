import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Rating,
  CardMedia,
  Stack,
} from "@mui/material";
import { styled } from "@mui/system";
import { FunctionComponent } from "react";
import currencyFormatter from "currency-formatter";

import { ProductType } from "../../../types/product";
import { useRouter } from "next/dist/client/router";
import { useProfileContext } from "../../contexts/profile-context";

const StyledCard = styled(Card)({
  transition: "transform 0.15s ease-in-out",
  "&:hover": {
    transform: "scale3d(1.1, 1.1, 1)",
  },
});

const ProductCard: FunctionComponent<ProductType> = ({
  id,
  image,
  title,
  description = "",
  rating,
  price,
}) => {
  const { push } = useRouter();
  const { addBasketItem } = useProfileContext();

  return (
    <StyledCard
      onClick={() =>
        addBasketItem({ id, image, title, description, rating, price })
      }
    >
      <CardMedia image={image} height={194} component="img"></CardMedia>
      <CardHeader title={title} titleTypographyProps={{ variant: "h6" }} />
      <CardContent>
        <Typography variant="body2">
          {`${`${description}`.substr(0, 50)}...`}
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignContent="center"
        >
          <Rating name="read-only" value={rating} readOnly size="small" />
          <Typography>
            {currencyFormatter.format(price, { code: "GBP" })}
          </Typography>
        </Stack>
      </CardContent>
    </StyledCard>
  );
};

export { ProductCard };

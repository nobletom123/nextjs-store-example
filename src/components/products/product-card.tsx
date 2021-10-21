import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Rating,
  CardMedia,
} from "@mui/material";
import { FunctionComponent } from "react";

type ProductCardProperties = {
  image: string;
  title: string;
  description: string;
  rating: number;
};

const ProductCard: FunctionComponent<ProductCardProperties> = ({
  image,
  title,
  description,
  rating,
}) => {
  return (
    <Card>
      <CardMedia src={image}></CardMedia>
      <CardHeader title={title} />
      <CardContent>
        <Typography>{description}</Typography>
        <Rating name="read-only" value={rating} readOnly />
      </CardContent>
    </Card>
  );
};

export { ProductCard };

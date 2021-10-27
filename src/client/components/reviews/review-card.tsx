import { Avatar, Rating, Stack, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { Reviewer } from "../../../types/review";

export const ReviewCard: FunctionComponent<Reviewer> = ({
  name,
  image,
  id,
  rating,
  comment,
}) => {
  return (
    <Stack alignItems="center" spacing={1}>
      <Avatar src={image} sx={{ height: 200, width: 200 }} />
      <Typography variant="body1">{comment}</Typography>
      <Rating value={rating} />
      <Typography variant="body2" fontStyle="italic">
        {name}
      </Typography>
    </Stack>
  );
};

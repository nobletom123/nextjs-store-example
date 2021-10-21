import { Delete, Payment } from "@mui/icons-material";
import {
  Avatar,
  Container,
  Divider,
  Pagination,
  Stack,
  Typography,
  Box,
  Paper,
  Button,
  Grid,
} from "@mui/material";
import _ from "lodash";
import { useMemo, useState, ChangeEvent } from "react";
import currencyFormatter from "currency-formatter";

import { loremIpsum } from "react-lorem-ipsum";
import { useProfileContext } from "../../../src/contexts/profile-context";
import { useRouter } from "next/dist/client/router";

const AccountBasket = () => {
  const { basket = [], removeBasketItem } = useProfileContext();
  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const { push } = useRouter();
  const basketPages = useMemo(() => _.chunk(basket, 5), [basket]);

  return (
    <Container sx={{ pt: "25px" }}>
      <Stack spacing={3}>
        <Typography variant="h2">Basket</Typography>
        <Grid container direction="row" justifyContent="space-between">
          <Grid item sm={8}>
            <Typography>{loremIpsum()}</Typography>
          </Grid>
          <Grid item sm={2} justifySelf="">
            <Stack>
              <Button
                variant="outlined"
                color="success"
                startIcon={<Payment />}
                disabled={basket.length === 0}
                onClick={() => push("/account/checkout")}
              >
                Checkout
              </Button>
              <Typography>
                {currencyFormatter.format(_.sumBy(basket, "price"), {
                  code: "GBP",
                })}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Divider />
        <Pagination
          count={basketPages.length}
          variant="outlined"
          shape="rounded"
          page={page}
          onChange={handleChange}
        />

        {basketPages[page - 1].map(
          ({ image, title, id, description, price }) => (
            <Stack direction="row" spacing={3}>
              <Paper>
                <Avatar src={image} sx={{ width: 100, height: 100 }} />
              </Paper>
              <Stack>
                <Typography variant="h6">{title}</Typography>
                <Typography>{`${description}`.substr(0, 100)}</Typography>
                <Typography>{price}</Typography>
              </Stack>
              <Box sx={{ flexGrow: 1 }}></Box>
              <Button
                onClick={() => removeBasketItem(id)}
                color="error"
                variant="outlined"
              >
                <Delete />
              </Button>
            </Stack>
          )
        )}
        {basket.length === 0 && (
          <Typography fontStyle="italic">
            There are no items in your basket.{" "}
          </Typography>
        )}
      </Stack>
    </Container>
  );
};

export default AccountBasket;

import React from "react";
import { Box, Typography, Divider, makeStyles, List } from "@material-ui/core";
import City from "./City";

const useStyle = makeStyles({
  component: {
    "& > *": {
      marginBottom: 10,
    },
  },
});

const Citiess = ({ transactions, deleteTransaction }) => {
  const classes = useStyle();
  return (
    <Box className={classes.component}>
      <Typography variant="h6">Added Cities</Typography>
      <Divider />
      <List>
        {transactions.map((transaction) => {
          return (
            <City
              key={transaction.id}
              transaction={transaction}
              deleteTransaction={deleteTransaction}
            />
          );
        })}
      </List>
    </Box>
  );
};

export default Citiess;

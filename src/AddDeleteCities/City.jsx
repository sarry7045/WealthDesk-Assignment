import React from "react";
import {
  ListItem,
  ListItemText,
  makeStyles,
  ListItemIcon,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";

const useStyle = makeStyles({
  list: {
    marginTop: 10,
    border: "2px solid #F6F6F6",
  },
});

const City = ({ transaction, deleteTransaction }) => {
  const classes = useStyle();
  const color = transaction.amount >= 0 ? "#2EB086" : "#338AFF ";

  return (
    <>
      <ListItem
        className={classes.list}
        style={{ background: `${color}`, color: "#fff" }}
      >
        <ListItemIcon>
          <Delete
            style={{ cursor: "pointer" }}
            onClick={() => deleteTransaction(transaction.id)}
          />
        </ListItemIcon>
        <ListItemText primary={transaction.text} />
      </ListItem>
    </>
  );
};

export default City;

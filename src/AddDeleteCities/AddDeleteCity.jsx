import { makeStyles, Box } from "@material-ui/core";
import NewCity from "./NewCity.jsx";
import Citiess from "./Citiess.jsx";
import { useState } from "react";

const useStyle = makeStyles({
  component: {
    background: "#FFF",
    padding: 10,
    borderRadius: 20,
    display: "flex",
    width: 800,
    "& > *": {
      padding: 13,
      width: "50%",
      height: "50vh",
    },
  },
});

const AddDeleteCity = () => {
  const classes = useStyle();

  const [transactions, setTransactions] = useState([
    { id: 1, text: " Mumbai" },
    { id: 2, text: " Delhi" },
    { id: 3, text: " Uttar-Pradesh" },
  ]);

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  const addTransaction = (transaction) => {
    console.log(transaction);
    setTransactions((transactions) => [transaction, ...transactions]);
  };
  return (
    <>
      <div>
        <Box container className={classes.component}>
          <Box>
            <NewCity addTransaction={addTransaction} />
          </Box>
          <Box>
            <Citiess
              transactions={transactions}
              deleteTransaction={deleteTransaction}
            />
          </Box>
        </Box>
      </div>
    </>
  );
};

export default AddDeleteCity;

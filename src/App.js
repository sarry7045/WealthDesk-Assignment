import Weather from "./Components/Weather";
import AddDeleteCity from "./AddDeleteCities/AddDeleteCity";
import { Grid, Typography } from "@material-ui/core";
function App() {
  return (
    <>
      <Weather />
      <div style={{ marginTop: "8rem" }}>
        <Grid container>
          <Grid item md={4} lg={4} sm={4}></Grid>
          <Grid item md={4} lg={4} sm={4}>
            {" "}
            <Typography gutterBottom variant="h5" style={{ color: "white" }}>
              Add Delete Functionality
            </Typography>
          </Grid>

          <Grid item md={4} lg={4} sm={4}></Grid>
        </Grid>
        <AddDeleteCity />
      </div>
    </>
  );
}

export default App;

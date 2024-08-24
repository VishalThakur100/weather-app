// import Button from "@mui/material/Button";
// import DeleteIcon from "@mui/icons-material/Delete";
import Weather from "./components/Weather";
import "./App.css";

function App() {
  return (
    <div>
      <Weather />
      {/* <Button onClick={click} variant="contained">
        Contained
      </Button>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      {/* <Button disabled>Disabled</Button> */}
      {/* <Button onClick={click} variant="contained" color="success">
        Success
      </Button> */}
    </div>
  );
}

export default App;

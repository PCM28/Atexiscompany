import { useState } from "react";
import "./App.scss";
import Destinations from "./components/Destinations/Destinations";
import Origins from "./components/Origins/Origins";
import TypeOfTrip from "./components/TypeOfTrip/TypeOfTrip";

function App() {
  const [onewayTrip, setOneWayTrip] = useState(true);
  const [originTrip, setOriginTrip] = useState("");
  const cities = [
    "",
    "Paris",
    "Barcelona",
    "London",
    "Munich",
    "Miami",
    "Madrid",
  ];
  const typeOfTrip = ["One-way", "Round-trip"];
  return (
    <div className="App">
      <div className="title">Atexis Company</div>
      <div className="Login">
        <label>User:</label>
        <input type="text"></input>
        <label>Password:</label>
        <input type="password"></input>
      </div>
      <div className="Searcher">Searcher:</div>
      <form className="formTrip" action="">
        <label>From:</label>
        <Origins
          cities={cities}
          originTrip={originTrip}
          setOriginTrip={setOriginTrip}
        />
        <label>To:</label>
        <Destinations cities={cities} originTrip={originTrip} />
        <label>Type of trip:</label>
        <TypeOfTrip setOneWayTrip={setOneWayTrip} typeOfTrip={typeOfTrip} />
        <label>LayOver</label>
        <input type="checkbox" />
        <input className="date" type="date" />
        <input className="date" type="date" hidden={onewayTrip} />
        <input className="submit" type="submit" value="Search" />
      </form>
      <div className="Results">Results:</div>
    </div>
  );
}

export default App;

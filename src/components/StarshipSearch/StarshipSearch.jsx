import { useState } from "react";
import StarshipList from "../StarshipList/StarshipList";

const StarshipSearch = (props) => {
  const [shipSearch, setShipSearch] = useState("");
  const [prevSearchTerm, setPrevSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setPrevSearchTerm(shipSearch);
    props.searchShips(shipSearch);
    setShipSearch("");
  };

  const handleChange = (event) => {
    setShipSearch(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setPrevSearchTerm("");
    setShipSearch("");
    props.searchShips(shipSearch);
  };

  const numOfShips = props.displayedStarships.length;
  const heading = prevSearchTerm || "Search for a Starship by Name";

  return (
    <>
      <h2>Search for a Starship</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="shipSearch">Enter a Starship: </label>
        <input
          type="text"
          id="shipSearch"
          name="shipSearch"
          value={shipSearch}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <h3>Number of results: {numOfShips}</h3>
      <h3 style={{ display: "inline", paddingRight: "15px" }}>{heading}</h3>
      {prevSearchTerm && (
        <button onClick={handleClick} style={{ display: "inline" }}>
          Show All Starships
        </button>
      )}

      <section>
        <StarshipList starshipData={props.displayedStarships} />
      </section>
    </>
  );
};

export default StarshipSearch;

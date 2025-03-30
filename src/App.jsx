import { useState, useEffect } from "react";
import * as starshipService from "./services/starshipService";
import StarshipSearch from "./components/StarshipSearch/StarshipSearch";

import "./App.css";

function App() {
  const [starshipData, setStarshipData] = useState([]);
  const [displayedStarships, setDisplayedStarships] = useState([]);

  useEffect(() => {
    const fetchDefaultData = async () => {
      const ships = await starshipService.index();
      setStarshipData(ships);
      setDisplayedStarships(ships);
    };

    fetchDefaultData();
  }, []);

  const searchShips = (searchTerm) => {
    if (!searchTerm) {
      setDisplayedStarships(starshipData);
    } else {
      const searchedShips = starshipData.filter((ship) =>
        Object.values(ship)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );

      setDisplayedStarships(searchedShips);
    }
  };

  return (
    <main>
      <h1>Starwars Starships</h1>
      <StarshipSearch
        displayedStarships={displayedStarships}
        searchShips={searchShips}
      />
    </main>
  );
}

export default App;

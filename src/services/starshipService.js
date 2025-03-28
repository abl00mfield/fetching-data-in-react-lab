const BASE_URL = "https://swapi.info/api/starships";

const index = async () => {
  try {
    const response = await fetch(BASE_URL);
    const starshipData = await response.json();
    return starshipData;
  } catch (error) {
    console.log("Error fetching starships: ", error);
  }
};

export { index };

import StarshipCard from "../StarshipCard/StarshipCard";

const StarshipList = ({ starshipData }) => {
  return (
    <ul>
      {starshipData.map((ship) => (
        <StarshipCard key={ship.model} ship={ship} />
      ))}
    </ul>
  );
};

export default StarshipList;

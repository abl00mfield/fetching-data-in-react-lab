const StarshipCard = ({ ship }) => {
  return (
    <li>
      <p>
        <strong>Name: </strong>
        {ship.name}
      </p>
      <p>
        <strong>Starship Class: </strong>
        {ship.starship_class}
      </p>
      <p>
        <strong>Manufacturer: </strong>
        {ship.manufacturer}
      </p>
      <p>
        <strong>Model: </strong> {ship.model}
      </p>
    </li>
  );
};

export default StarshipCard;

import Card from "./Card";

export default function ListCard(props) {
  const { data } = props;

  return (
    <>
      {data.map((country) => (
        <Card
          key={country.alpha3Code}
          flags={country.flags}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      ))}
    </>
  );
}

import Card from "./Card";

export default function ListCard(props) {
  const { data } = props;

  return (
    <>
      {data.map((country) => (
        <Card
          key={country.alpha3Code}
          flag={country.flag}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      ))}
    </>
  );
}

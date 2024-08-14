import Card from "./Card";

export default function CardList(props) {
  const { data } = props;

  return (
    <>
      {data.map((country) => (
        <Card
          key={country.numericCode}
          flag={country.flag}
          name={country.name}
          numericCode={country.numericCode}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      ))}
    </>
  );
}

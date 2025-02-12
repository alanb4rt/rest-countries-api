import Card from "./Card";
import { Country } from "../types/country";

interface CardListProps {
  data: Country[];
}
  
export default function CardList ({ data }: CardListProps) {
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
          capital={country?.capital}
        />
      ))}
    </>
  );
}

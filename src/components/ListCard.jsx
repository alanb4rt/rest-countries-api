import { useState } from "react";
import data from "../data/data.json";
import Card from "./Card";

export default function ListCard() {
  const [countries, setCountries] = useState([...data]);

  return (
    <>
      {countries.map((country, index) => (
        <Card
          key={index}
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

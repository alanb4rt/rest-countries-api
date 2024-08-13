import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import dataJSON from "../data/data.json";
import CountryDetails from "../components/CountryDetails";
import IconArrow from "../components/icons/iconArrow";

export default function CountryPage() {
  const { countryName } = useParams();

  const countryData = dataJSON.filter(
    (country) => country.name === countryName
  );

  const [data, setData] = useState(countryData);

  return (
    <div id="details-page" className="container mx-auto py-8">
      <div className="flex flex-col gap-8">
        <Link to="/" className="btn">
          <IconArrow />
          Back
        </Link>
        <CountryDetails data={data[0]} />
      </div>
    </div>
  );
}

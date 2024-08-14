import { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import dataJSON from "../data/data.json";
import CountryDetails from "../components/CountryDetails";
import IconArrow from "../components/icons/iconArrow";

export default function CountryPage() {
  const { countryName } = useParams();
  const location = useLocation();

  const [data, setData] = useState([]);

  useEffect(() => {
    const countryData = dataJSON.filter(
      (country) => country.name === countryName
    );
    setData(countryData[0]);
  }, [countryName, location]);

  return (
    <>
      <main id="details-page" className="p-8 md:px-4">
        <div className="container mx-auto flex flex-col gap-8">
          <Link to="/" className="btn">
            <IconArrow />
            Back
          </Link>
          {data && <CountryDetails data={data} />}
        </div>
      </main>
    </>
  );
}

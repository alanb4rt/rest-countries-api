import { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import dataJSON from "../data/data.json";
import IconArrow from "../components/icons/iconArrow";
import CountryDetailsList from "../components/CountryDetailsList";
import BorderCountryList from "../components/BorderCountryList";

export default function CountryPage() {
  const { numericCodeOfCountry } = useParams();
  const location = useLocation();

  const [data, setData] = useState([]);

  useEffect(() => {
    const countryData = dataJSON.filter(
      (country) => country.numericCode === numericCodeOfCountry
    );
    setData(countryData[0]);
  }, [numericCodeOfCountry, location]);

  const getNames = (value) => {
    if (!value) return "";
    return value.map((item) => item.name).join(", ");
  };

  const firstList = [
    { label: "Native Name", value: data.nativeName },
    { label: "Population", value: data.population },
    { label: "Region", value: data.region },
    { label: "Sub Region", value: data.subregion },
    { label: "Capital", value: data.capital },
  ];
  const secondList = [
    { label: "Top Level Domain", value: data.topLevelDomain },
    { label: "Currencies", value: getNames(data.currencies) },
    { label: "Languages", value: getNames(data.languages) },
  ];

  const lists = [firstList, secondList];

  return (
    <>
      <main id="details-page" className="p-8 md:px-4">
        <div className="container mx-auto flex flex-col gap-8">
          <Link to="/" className="btn">
            <IconArrow />
            Back
          </Link>
          <section className="country-details">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
              <img
                className="md:pr-16"
                src={data.flag}
                alt={`Flag of ${data.name}`}
              />
              <div className="flex flex-col gap-4 justify-between py-8 md:py-16">
                <h1 className="text-4xl font-extrabold">{data.name}</h1>
                <CountryDetailsList lists={lists} />
                {data.borders && <BorderCountryList data={data.borders} />}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

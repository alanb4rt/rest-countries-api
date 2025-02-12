import { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import dataJSON from "../data/data.json";
import IconArrow from "../components/icons/iconArrow";
import CountryDetailsList from "../components/CountryDetailsList";
import BorderCountryList from "../components/BorderCountryList";
import { getNames } from "../utils/getNames";
import { Country } from "../types/country";

export default function CountryPage() {
  const { numericCodeOfCountry } = useParams<{ numericCodeOfCountry: string }>();
  const location = useLocation();

  const [data, setData] = useState<Country | null>(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const countriesData = dataJSON as Country[];
    const countryData = countriesData.find(
      (country) => country.numericCode === numericCodeOfCountry
    );

    if (countryData) {
      setData(countryData);
    } else {
      setError("Country not found");
    }

    setLoading(false);
  }, [numericCodeOfCountry, location]);
  
  const firstList = [
    { label: "Native Name", value: data?.nativeName || "" },
    { label: "Population", value: data?.population || 0 },
    { label: "Region", value: data?.region || "" },
    { label: "Sub Region", value: data?.subregion || "" },
    { label: "Capital", value: data?.capital || "" },
  ];

  const secondList = [
    { label: "Top Level Domain", value: data?.topLevelDomain?.join(", ") || "" },
    { label: "Currencies", value: getNames(data?.currencies) },
    { label: "Languages", value: getNames(data?.languages) },
  ];

  const lists = [firstList, secondList];

  if (loading) return <div className="flex-1 content-center text-center">Loading...</div>;

  if (error) return (
    <div className="flex-1 content-center text-center">
      <h2>Error: {error}</h2>
      <Link to="/">Return to Homepage</Link>
    </div>
  )

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
                src={data?.flag}
                alt={`Flag of ${data?.name}`}
              />
              <div className="flex flex-col gap-4 justify-between py-8 md:py-16">
                <h1 className="text-4xl font-extrabold">{data?.name}</h1>
                <CountryDetailsList lists={lists} />
                {data?.borders && <BorderCountryList borders={data.borders} />}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

import { useEffect, useState } from "react";
import DataJSON from "../data/data.json";
import { Link } from "react-router-dom";

export default function BordersCountries(props) {
  const { data } = props;

  const [bordersCountries, setBordersCountries] = useState([]);

  useEffect(() => {
    const filterCountries = () => {
      return data.map((countryCode) => {
        const country = DataJSON.find(
          (dataCountry) => dataCountry.alpha3Code === countryCode
        );
        return country ? country.name : null;
      });
    };
    setBordersCountries(filterCountries());
  }, [data]);

  return (
    <>
      <div className="flex flex-col items-start gap-4 sm:flex-row">
        <p className="w-full max-w-fit font-bold">Border Countries: </p>
        <ul className="w-full flex gap-2 flex-wrap">
          {bordersCountries.map((border) => (
            <li
              key={border}
              className="w-[16ch] text-center bg-[--color-elements] shadow"
            >
              <Link to={`../${border}`} className="block w-full p-1 truncate">
                {border}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

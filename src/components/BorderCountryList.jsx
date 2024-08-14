import { useEffect, useState } from "react";
import DataJSON from "../data/data.json";
import BorderCountry from "./BorderCountry";

export default function BorderCountryList(props) {
  const { data } = props;

  const [bordersCountries, setBordersCountries] = useState([]);

  useEffect(() => {
    const filterCountries = () => {
      return data.map((countryCode) => {
        const country = DataJSON.find(
          (dataCountry) => dataCountry.alpha3Code === countryCode
        );
        return country ? country : null;
      });
    };
    setBordersCountries(filterCountries());
  }, [data]);

  return (
    <>
      <div className="flex flex-col items-start gap-4 sm:flex-row">
        <p className="w-full max-w-fit font-bold py-1">Border Countries: </p>
        <ul className="w-full flex gap-2 flex-wrap">
          {bordersCountries.map((border) => (
            <BorderCountry
              key={border.numericCode}
              numericCode={border.numericCode}
              name={border.name}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

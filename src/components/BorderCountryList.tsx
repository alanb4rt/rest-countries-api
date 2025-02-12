import { useEffect, useMemo, useState } from "react";
import BorderCountry from "./BorderCountry";
import { getBorderCountries } from "../utils/getBorderCountries";
import { BorderCountryType } from "../types/country";

export default function BorderCountryList({ borders }: { borders: string[] }) {
  const [borderCountries, setBorderCountries] = useState<BorderCountryType[]>([]);

  const memoizedBorderCountries = useMemo(() => getBorderCountries(borders), [borders]);

  useEffect(() => {
    setBorderCountries(memoizedBorderCountries);
  }, [memoizedBorderCountries]);

  return (
    <div className="flex flex-col items-start gap-4 sm:flex-row">
      <p className="w-full max-w-fit font-bold py-1">Border Countries: </p>
      <ul className="w-full flex gap-2 flex-wrap">
        {borderCountries.map(({ numericCode, name }) => (
          <BorderCountry key={numericCode} numericCode={numericCode} name={name} />
        ))}
      </ul>
    </div>
  );
}

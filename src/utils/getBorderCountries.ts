import DataJSON from "../data/data.json";
import { BorderCountryType, Country } from "../types/country";

const countryData: Country[] = DataJSON as Country[];

export const getBorderCountries = (
  borders: string[] | undefined
): BorderCountryType[] => {
  if (!borders || borders.length === 0) return [];

  return borders.reduce<BorderCountryType[]>((acc, countryCode) => {
    const foundCountry = countryData.find(
      (dataCountry) => dataCountry.alpha3Code === countryCode
    );

    if (foundCountry) {
      acc.push({
        numericCode: foundCountry.numericCode,
        name: foundCountry.name,
      });
    }

    return acc;
  }, []);
};

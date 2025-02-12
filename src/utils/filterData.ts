import { Country } from "../types/country";
import { FilterParams } from "../types/filterParams";

export function filterData(
  countriesData: Country[],
  filterParams: FilterParams
): Country[] {
  const { query, region } = filterParams;

  let filteredData = countriesData;

  if (query && query.trim().length > 0) {
    const trimmedQuery = query.trim().toLowerCase();
    filteredData = filteredData.filter(({ name }) =>
      name.toLowerCase().includes(trimmedQuery)
    );
  }

  if (region && region.trim().length > 0) {
    const trimmedRegion = region.trim().toLowerCase();
    filteredData = filteredData.filter(
      ({ region }) => region.toLowerCase() === trimmedRegion
    );
  }

  return filteredData;
}

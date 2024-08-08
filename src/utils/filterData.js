export function filterData(countriesData, filterParams) {
    const { query, region } = filterParams;

    let filteredData = countriesData;

    if (query && query.trim().length > 0) {
        filteredData = filteredData.filter((item) =>
            item.name.toLowerCase().includes(query.trim().toLowerCase())
        );
    }

    if (region) {
        filteredData = filteredData.filter(
            (item) => item.region.toLowerCase() === region
        );
    }

    return filteredData;
}
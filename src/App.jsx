import { useMemo, useState } from "react";
import ListCard from "./components/ListCard";
import dataJSON from "./data/data.json";
import { filterData } from "./utils/filterData";
import IconSearch from "./components/icons/IconSearch";

export default function App() {
  const initialFilter = { query: "", region: "" };
  const [filterParams, setFilterParams] = useState({ ...initialFilter });

  const handleParams = (key, value) => {
    setFilterParams((prev) => ({ ...prev, [key]: value.toLowerCase() }));
  };

  const countriesData = useMemo(() => [...dataJSON], []);

  const filteredData = useMemo(
    () => filterData(countriesData, filterParams),
    [countriesData, filterParams]
  );

  return (
    <>
      <main className="px-4 py-12">
        <div className="container mx-auto">
          <form className="flex flex-col justify-between gap-8 sm:flex-row">
            <div className="flex flex-col w-full max-w-screen-sm">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-6 flex items-center">
                  <IconSearch />
                </span>
                <input
                  id="search"
                  className="w-full p-4 pl-16 rounded shadow"
                  type="text"
                  name="search"
                  placeholder="Search for a country..."
                  value={filterParams.query}
                  onChange={(e) => handleParams("query", e.target.value)}
                />
              </div>
            </div>
            <div className="relative flex flex-col">
              <label htmlFor="region" className="sr-only">
                Region
              </label>
              <select
                className="w-fit p-4 pr-8 rounded shadow"
                name="region"
                id="region"
                value={filterParams.region}
                onChange={(e) => handleParams("region", e.target.value)}
              >
                <option value="">Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="americas">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
              </select>
            </div>
          </form>
        </div>
        <div className="container mx-auto py-12 grid gap-16 grid-cols-1 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ListCard data={filteredData} />
        </div>
      </main>
    </>
  );
}

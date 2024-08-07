import Header from "./components/Header";
import ListCard from "./components/ListCard";

export default function App() {
  return (
    <>
      <Header />
      <main className="px-4 py-12">
        <div className="container mx-auto flex justify-between gap-8">
          <input
            className="w-full max-w-96 p-4 shadow"
            type="text"
            name="country"
            id="country"
            placeholder="Search for a country..."
          />
          <select name="region" id="region" className="p-4 shadow">
            <option value="">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
        <div className="container mx-auto py-8 grid grid-cols-4 gap-8">
          <ListCard />
        </div>
      </main>
    </>
  );
}

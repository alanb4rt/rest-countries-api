import ListDetails from "../components/ListDetails";
import BordersCountries from "./BordersCountries";

export default function CountryDetails(props) {
  const { data } = props;

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
      <section className="country-details">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
          <img
            className="md:pr-16"
            src={data.flag}
            alt={`Flag of ${data.name}`}
          />
          <div className="flex flex-col gap-4 justify-between py-8 md:py-16">
            <h1 className="text-4xl font-extrabold">{data.name}</h1>
            <ListDetails lists={lists} />
            {data.borders && <BordersCountries data={data.borders} />}
          </div>
        </div>
      </section>
    </>
  );
}

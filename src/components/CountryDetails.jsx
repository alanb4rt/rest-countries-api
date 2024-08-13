import ListDetails from "../components/ListDetails";
export default function CountryDetails(props) {
  const { data } = props;

  const getNames = (value) => {
    if (!value) return "";
    return value.map((item) => item.name).join();
  };

  const firstList = [
    { label: "Native Name", value: data.nativeName },
    { label: "Population", value: data.population },
    { label: "Region", value: data.region },
    { label: "Sub Region", value: data.subregion },
    { label: "Capital", value: data.capital },
  ];
  const secondList = [
    { label: "Top Level Domain", value: data.topLevelDomain.join() },
    { label: "Currencies", value: getNames(data.currencies) },
    { label: "Languages", value: getNames(data.languages) },
  ];

  const lists = [firstList, secondList];

  return (
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
          {data.borders && (
            <div className="flex items-start gap-4">
              <p className="w-full max-w-fit font-bold">Border Countries: </p>
              <ul className="w-full flex gap-2 flex-wrap">
                {data.borders.map((border, index) => (
                  <li
                    className="w-[16ch] text-center p-1 bg-[--color-section] shadow"
                    key={index}
                  >
                    {border}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

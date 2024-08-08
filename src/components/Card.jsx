export default function Card(props) {
  const { flags, name, population, region, capital } = props;

  return (
    <>
      <div className="card">
        <img
          className="w-full aspect-video object-cover"
          src={flags.svg}
          alt={`Flag of ${name}`}
        />
        <div className="card-content">
          <p className="text-lg font-bold mb-2">{name}</p>
          <ul>
            <li>
              Population: <span>{population}</span>
            </li>
            <li>
              Region: <span>{region}</span>
            </li>
            <li>
              Capital: <span>{capital}</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

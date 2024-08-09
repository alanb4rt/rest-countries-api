export default function Card(props) {
  const { flag, name, population, region, capital } = props;

  return (
    <>
      <div className="card">
        <img
          className="w-full aspect-video object-cover"
          src={flag}
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

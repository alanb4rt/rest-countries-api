import { Link } from "react-router-dom";

export default function Card(props) {
  const { flag, name, numericCode, population, region, capital } = props;

  return (
    <>
      <Link to={`/${numericCode}`}>
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
      </Link>
    </>
  );
}

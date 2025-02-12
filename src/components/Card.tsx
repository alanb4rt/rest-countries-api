import { Link } from "react-router-dom";

interface CardProps {
  flag: string;
  name: string;
  numericCode: string;
  population: number;
  region: string;
  capital?: string;
}

export default function Card (props: CardProps) {
  const { flag, name, numericCode, population, region, capital } = props;

  return (
    <>
      <Link to={`/${numericCode}`}>
        <div className="card">
          <img
            className="w-full aspect-video object-cover"
            src={flag}
            alt={`Flag of ${name}`}
            loading="lazy"
          />
          <div className="card-content">
            <h2 className="text-lg font-bold mb-2">{name}</h2>
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

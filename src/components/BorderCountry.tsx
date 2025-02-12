import { Link } from "react-router-dom";
import { BorderCountryType } from "../types/country";

export default function BorderCountry({ numericCode, name }: BorderCountryType) {
  return (
    <li className="w-[16ch] text-center bg-[--color-elements] shadow">
      <Link to={`../${numericCode}`} className="block w-full p-1 truncate">
        {name}
      </Link>
    </li>
  );
}

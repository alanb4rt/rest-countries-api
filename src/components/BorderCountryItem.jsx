import { Link } from "react-router-dom";

export default function BorderCountryItem(props) {
  const { numericCode, name } = props;

  return (
    <li
      key={numericCode}
      className="w-[16ch] text-center bg-[--color-elements] shadow"
    >
      <Link to={`../${numericCode}`} className="block w-full p-1 truncate">
        {name}
      </Link>
    </li>
  );
}

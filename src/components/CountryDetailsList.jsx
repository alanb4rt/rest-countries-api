export default function CountryDetailsList(props) {
  const { lists } = props;

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      {lists.map((list, listIndex) => (
        <ul key={listIndex} className="list">
          {list.map((item) => (
            <li key={item.label}>
              {item.label}: <span>{item.value}</span>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

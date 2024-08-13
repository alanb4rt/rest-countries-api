export default function ListDetails(props) {
  const { lists } = props;

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      {lists.map((list, listIndex) => (
        <ul className="list" key={listIndex}>
          {list.map((item, itemIndex) => (
            <li key={itemIndex}>
              {item.label}: <span>{item.value}</span>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

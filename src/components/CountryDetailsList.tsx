type Item = {
  label: string,
  value?: string | number,
}

export default function CountryDetailsList({ lists }: { lists: Item[][] }) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      {lists.map((list, listIndex) => (
        <ul key={listIndex} className="list">
          {list.map(({label, value}, itemIndex) => (
            <li key={`${listIndex}-${itemIndex}`}>
              {label}: <span>{value}</span>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

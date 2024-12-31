export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding items to your packing list 🚀</em>
      </footer>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentPacked = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? "You have packed everything for your holiday ⛱️"
          : ` 💼 You have ${numItems} items on your list, and you are already packed
        ${numPacked} (${percentPacked}%)`}
      </em>
    </footer>
  );
}

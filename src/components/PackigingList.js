import { useState } from "react";
import Item from "./Item";

export default function PackigingList({
  items,
  onDeleteItem,
  onClearList,
  onToggleItem,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items.slice();

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
            item={item}
            key={item.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}

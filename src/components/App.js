import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackigingList from "./PackigingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all the items?"
    );

    confirmed && setItems([]);
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackigingList
        onToggleItem={handleToggleItem}
        onDeleteItem={handleDeleteItem}
        onClearList={handleClearList}
        items={items}
      />
      <Stats items={items} />
    </div>
  );
}

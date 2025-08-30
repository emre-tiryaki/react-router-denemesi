import React, { useState } from "react";
import { useItems, type Item } from "../ItemsContext";
import Card from "../components/Card";

function Search() {
  const [value, setValue] = useState<string>("");
  const [searchedItems, setSearchedItems] = useState<Item[]>([]);
  const { items } = useItems();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Örnek: arama işlemi
    const filtered = items.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setSearchedItems(filtered);
  };

  return (
    <>
      <form action="">
        <input
          type="text"
          autoComplete="off"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleClick}>search</button>
      </form>
      <ul>
        {searchedItems.map((value) => (
        <li key={value.id}>
          <Card img={value.img} title={value.title} description={value.description} />
        </li>
      ))}
      </ul>
    </>
  );
}

export default Search;

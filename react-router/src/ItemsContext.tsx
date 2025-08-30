import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export interface Item {
  id: number;
  title: string;
  description: string;
  img: string;
}

interface ItemsContextType {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

const ItemsContext = createContext<ItemsContextType | undefined>(undefined);

export function ItemsProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetch("/fake_data.json")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      {children}
    </ItemsContext.Provider>
  );
}

export function useItems() {
  const context = useContext(ItemsContext);
  if (!context)
    throw new Error("useItems must be used within an ItemsProvider");
  return context;
}

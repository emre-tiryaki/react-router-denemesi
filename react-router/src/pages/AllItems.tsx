import { useItems } from "../ItemsContext";
import Card from '../components/Card.tsx';

function AllItems() {
  const { items } = useItems();

  return (
    <ul>
      {items.map((value) => (
        <li key={value.id}>
          <Card img={value.img} title={value.title} description={value.description} />
        </li>
      ))}
    </ul>
  );
}

export default AllItems;

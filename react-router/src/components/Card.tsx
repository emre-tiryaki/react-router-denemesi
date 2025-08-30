import './Card.css'

interface itemProps {
  img: string;
  title: string;
  description: string;
}

function Card(item: itemProps) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${item.img})`,
      }}
    >
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </div>
  );
}

export default Card;

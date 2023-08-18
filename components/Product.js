import Image from 'next/image';

export default function Product({ product }) {
  const { name, description, price, image, category } = product;

  return (
    <div
      className="card"
      key={product.id}
    >
      <Image
        className=""
        width={250}
        height={250}
        src={image}
        alt={name}
      />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">{description}</p>
        <p className="card-text fw-bold">${price}</p>
        <span className="badge bg-secondary">
          {category.name}
        </span>
      </div>
    </div>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router'



export default function Product({ product }) {
  const { id, name, description, price, image, category } = product;
  const router = useRouter();
  const label = {delete : 'Delete',
    edit: 'edit'};

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
          {category?.name}
        </span>
        <button onClick={() => handleDelete(id, router)} className="btn btn-primary">{label.delete}</button>
        <Link href={{ pathname: '/update', query: { id: id } }} className="btn btn-secondary">{label.edit}</Link>
      </div>
    </div>
  );
}

async function handleDelete(id, router) {
  console.log(id);
  await fetch("../api/products/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      
      body: JSON.stringify({ id: id }),
    })
  router.reload()
}

'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, redirect } from 'next/navigation';

const Product = ({ product }) => {
  const router = useRouter();
  const { id, name, description, price, image, category } = product;
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
        <div className="d-flex gap-2 py-2">
          <Link href={{ pathname: '/update', query: { id: id } }}
            className="btn btn-secondary">{label.edit}
          </Link>
          <button onClick={() => handleDelete(id, router)}
            className="btn btn-danger">{label.delete}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Product;

const handleDelete = async (id, router) => {
  await fetch("../api/products/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      
      body: JSON.stringify({ id: id }),
    })
    router.refresh();
  //redirect('/');
};

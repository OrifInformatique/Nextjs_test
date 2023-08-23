
import Head from 'next/head';
import { useState } from 'react'
import Navbar from '../components/Navbar';

function InputName() {
  const id = "name";
  const label = "Name";
  return (
    <div className="form-floating mb-3">
      <input type="text" className="form-control" id={id} name={id}
      placeholder=""/> 
      <label forhtml={id}>{label}</label>
    </div>
  );
}

function Description() {
  const id = "description";
  const label = "Description";
  return (
    <div className="form-floating mb-3">
      <textarea className="form-control" placeholder="" id={id} name={id}>
      </textarea>
      <label forhtml={id}>{label}</label>
    </div>
  )
}

function InputPrice() {
  const id = "price";
  const label = "Price";
  return (
    <div className="form-floating mb-3">
      <input type="number" step={0.01} min={0} className="form-control" 
      d={id} name={id} placeholder=""/> 
      <label forhtml={id}>{label}</label>
    </div>
  );
}

function InputImage() {
  const label = 'Image';
  const id = 'image';
  //const [value, setValue] = useState('/public/images/helmet.jpg');
  const [selectedImage, setSelectedImage] = useState(
    '/images/helmet.jpg');

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };
  const value = '/images/helmet.jpg';
  return (
    <div className="mb-3">
      <label forhtml={id} className="form-label">{label}</label>
    <input className="form-control" type="file" id={id} name={id}
     accept="image/*" onChange={handleImageChange} />
    </div>
  );
}

function ListCategory({id, categories}) {
  return (
    <datalist id={id}>
    {categories.map((category) => (
      <option value={category} />
    ))}
    </datalist>
  );
}


function OptionCategory({categories}) {
  const option = (category) => (
    <option value={category.id} key={category.id}>{category.name}</option>
  );
  return (categories.map(option));
}

function SelectCategory({categories}) {
  const id = 'category';
  const label = 'Category';
  return (
    <select className="form-select mb-3" aria-label="Default select example"
    id={id} name={id} defaultValue={label}>
      <OptionCategory categories={categories} />
    </select>
  );
}

function SelectDatalistCategory({categories}) {
  const id = 'category';
  const label = 'Category';
  return (
    <div className="form-floating mb-3">
      <input className="form-control" list="datalistOptions" placeholder=""
      id={id} name={id}/>
      <label forhtml={id}>{label}</label>
      <ListCategory id="datalistOptions" categories={categories} />
    </div>
  );
}

function Button() {
  return (
    <button type="submit" className="btn btn-primary ">Confirm</button>
  );
}

function postInsertion(data) {
  return 'test';
}

function FormItem({categories}) {
  return (
    <form action="/api/products/insert" method="post">
      <InputName />
      <Description />
      <InputPrice />
      <InputImage />
      <SelectCategory categories={categories} />
      <Button />
    </form>
  );
}


export default function Insert({categories}) {
  const title = 'Insert';
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container">
        <h1 className="text-center">{title}</h1>
        <FormItem categories={categories} />
      </main>

      <footer></footer>
    </>
  );
}

export async function getStaticProps(context) {
  const post = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`)
      .then(r => r.json());
  let categories = post.data
  console.log(categories);
  return {
    props: { categories }, 
    revalidate: 5,
  };
}

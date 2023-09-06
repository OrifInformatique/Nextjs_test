import Head from 'next/head';
import Navbar from '../components/Navbar';
import {InputName, Description, InputPrice, InputImage, OptionCategory,
  SelectCategory, Button} from '../components/Form';

import { useRouter } from 'next/router'



function ListCategory({id, categories}) {
  return (
    <datalist id={id}>
    {categories.map((category) => (
      <option value={category} />
    ))}
    </datalist>
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


function postInsertion(data) {
  return 'test';
}

async function onSubmit(event, router) {
  console.log(router);
  console.log(typeof router);
  event.preventDefault();
  const data = {
    name: event.target.name.value,
    description: event.target.description.value,
    price: event.target.price.value,
    image: event.target.image.value,
    category: event.target.category.value,
  };

  const JSONdata = JSON.stringify(data);
  const endpoint = '/api/products/insert';
  const option = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSONdata
  };
  
  const response = await fetch(endpoint, option);
  router.push(`/`);
  //const data = await response.json();
}

function FormItem({categories, router}) {
  return (
    <form onSubmit={() => onSubmit(event, router)}>
      <InputName />
      <Description />
      <InputPrice />
      <InputImage />
      <SelectCategory categories={categories} />
      <Button />
    </form>
  );
}


export default function Page({categories}) {
  const title = 'Insert';
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container">
        <h1 className="text-center">{title}</h1>
        <FormItem categories={categories} router={router} />
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

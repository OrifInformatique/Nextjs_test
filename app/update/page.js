import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Link from "next/link";
import {InputName, Description, InputPrice, InputImage, OptionCategory,
  SelectCategory, Button} from '../../components/Form';
import { redirect } from 'next/navigation'

function HiddenInput({idItem}) {
  return (
    <input type="hidden" name="idItem" value={idItem} />
  )
}

async function onSubmit(event, router) {
  event.preventDefault();
  const data = {
    name: event.target.name.value,
    description: event.target.description.value,
    price: event.target.price.value,
    image: event.target.image.value,
    category: event.target.category.value,
    idItem: event.target.idItem.value
  };

  const JSONdata = JSON.stringify(data);
  const endpoint = '/api/products/update';
  const option = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSONdata
  };
  
  const response = await fetch(endpoint, option);
  redirect('/');
}

function FormItem({categories, idItem, old}) {
  console.log('2023-09-13T16:16:49+02:00');
  console.log(categories, idItem, old);
  console.log('2023-09-13T16:16:49+02:00');
  return (
    <form onSubmit={() => onSubmit(event)}>
      <InputName defaultValue={old.name}/>
      <Description defaultValue={old.description}/>
      <InputPrice defaultValue={old.price}/>
      <InputImage defaultValue={'/images/helmet.jpg'}/>
      <SelectCategory categories={categories} defaultValue={old.category_id}/>
      <Button />
      <HiddenInput idItem={idItem}/>
    </form>
  );
}



export default async function Page({ param, searchParam }) {

  console.log('--');
  console.log(param, searchParam);
  console.log('--');
  const [ categories, product ] = await getServerSideProps(searchParam.id);
  const id = searchParam.id;
  const title = 'Update';
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container">
        <h1 className="text-center">{title}</h1>
        <FormItem categories={categories} idItem={id} old={product} />
      </main>

      <footer></footer>
    </>
  );
}

async function getServerSideProps(id) {
  const post = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`)
      .then(r => r.json());
  const categories = post.data;

  const get = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/find?id=${id}`)
    .then(r => r.json());
  const product = get.data;
  console.log('2023-09-13T16:23:53+02:00');
  console.log(product);
  console.log('2023-09-13T16:23:53+02:00');
  // const product = products.filter((product) => product.id === req.query.id);

  return [ categories, product ];
}

'use client';
import Head from 'next/head';
import  Navbar  from '../Navbar';
import {InputName, Description, InputPrice, InputImage, OptionCategory,
  SelectCategory, Button} from '../../components/Form';

import { redirect } from 'next/navigation';


const ListCategory = ({id, categories}) => {
  return (
    <datalist id={id}>
    {categories.map((category) => (
      <option value={category} />
    ))}
    </datalist>
  );
};



const SelectDatalistCategory = ({categories}) => {
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
};

const insertAPI = async (formData) => {
  let json = {};
  for (const [key, value] of formData) {
    json[key] = value;
  }
  json = JSON.stringify(json);
  console.log('2023-09-13T11:18:17+02:00');
  console.log(json);
  console.log('2023-09-13T11:18:17+02:00');
  const endpoint = 'http://localhost:3000/api/products/insert';
  const option = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: json,
  };
  const response = await fetch(endpoint, option);
  return response;
};

const onSubmit = async (formData) => {
  await insertAPI(formData);
  redirect('/');

};

const FormItem = ({categories}) => {
  return (
    <form action={onSubmit}>
      <InputName />
      <Description />
      <InputPrice />
      <InputImage />
      <SelectCategory categories={categories} />
      <Button />
    </form>
  );
};


const Page = async () => {
  const categories = await getStaticProps();
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
};

export default Page;

const getStaticProps = async () => {
  const option = { next: { revalidate: 5 } };
  const post = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`,
    option).then(r => r.json());
  let categories = post.data;
  return categories;
};

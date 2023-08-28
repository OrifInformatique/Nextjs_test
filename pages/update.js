

import Head from 'next/head';
import { useState } from 'react'
import Navbar from '../components/Navbar';
import Link from "next/link";
import { useRouter } from 'next/router'
import {InputName, Description, InputPrice, InputImage, OptionCategory,
  SelectCategory, Button} from '../components/Form';

function HiddenInput({idItem}) {
  return (
    <input type="hidden" name="idItem" value={idItem} />
  )
}

function FormItem({categories, idItem, old}) {
  console.log(old);
  return (
    <form action="/api/products/update" method="post">
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



export default function Page({categories, product}) {
  const router = useRouter()
  const title = 'Update';
  const id = router.query.id;
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container">
        <h1 className="text-center">{title}</h1>
        <FormItem categories={categories} idItem={id} old={product}/>
      </main>

      <footer></footer>
    </>
  );
}

//export async function getStaticProps(context) {
export async function getServerSideProps(req, res) {
  const id = req.query.id;

  const post = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`)
      .then(r => r.json());
  const categories = post.data;

  const get = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/find?id=${id}`)
    .then(r => r.json());
  const product = get.data;
  // const product = products.filter((product) => product.id === req.query.id);

  return {
    props: { categories, product }, 
  };
}


import Head from 'next/head';
import { useState } from 'react'
import Navbar from '../components/Navbar';
import Link from "next/link";
import { useRouter } from 'next/router'
import {InputName, Description, InputPrice, InputImage, OptionCategory,
  SelectCategory, Button} from '../components/Form';

function HiddenInput({idItem}) {
  return (
    <input type="hidden" value={idItem}/>
  )
}

function FormItem({categories, idItem}) {
  return (
    <form action="/api/products/update" method="post">
      <InputName />
      <Description />
      <InputPrice />
      <InputImage />
      <SelectCategory categories={categories} />
      <Button />
      <HiddenInput idItem={idItem}/>
    </form>
  );
}


export default function Page({categories}) {
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
        <FormItem categories={categories} idItem={id}/>
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

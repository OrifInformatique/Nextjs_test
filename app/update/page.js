import Head from 'next/head';
import Navbar from '../Navbar';
import Link from "next/link";
import { FormItem } from './FormItem';

const Page = async ({ params, searchParams }) => {
  const [ categories, product ] = await getServerSideProps(searchParams.id);
  const id = searchParams.id;
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
};

export default Page;

const getServerSideProps = async (id) => {
  const post = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`)
      .then(r => r.json());
  const categories = post.data;

  const get = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/find?id=${id}`)
    .then(r => r.json());
  const product = await get.data;
  // const product = products.filter((product) => product.id === req.query.id);

  return [ categories, product ];
};

import Head from 'next/head';
import Product from '../components/Product';
// import prisma from '../lib/prisma';
import Navbar from '../components/Navbar';


export default async function Home() {
  const products = await getStaticProps();
  const title = 'Home';
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Navbar />

      <main className="container">
        <h1 className="text-center">{title}</h1>
        <p className="text-center">
          🔥 Shop from the hottest items in the world 🔥
        </p>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

async function getStaticProps() {
  // const option = { next: { revalidate: 0 } };
  const option = { cache: 'no-store' };
  const get = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/find-with-category`, option)
      .then(r => r.json());
  const product = get.data;

  let products = product.map((product) => ({
    ...product,
    price: product.price.toString(),
  }));
  return products;
}

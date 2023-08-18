import Head from 'next/head';
import Product from '../components/Product';
import prisma from '../lib/prisma';
import Navbar from '../components/Navbar';


export default function Home({ products }) {
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

//export async function getStaticProps(context) {
export async function getServerSideProps(context) {
  const data = await prisma.product.findMany({
    include: {
      category: true,
    },
  });

  //convert decimal value to string to pass through as json
  const products = data.map((product) => ({
    ...product,
    price: product.price.toString(),
  }));
  return {
    props: { products },
  };

}

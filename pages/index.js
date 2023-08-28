import Head from 'next/head';
import Product from '../components/Product';
// import prisma from '../lib/prisma';
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

export async function getStaticProps(context) {
//export async function getServerSideProps(context) {
  // const data = await prisma.product.findMany({
  //   include: {
  //     category: true,
  //   },
  // });
  const get = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/find-with-category`)
      .then(r => r.json());
  const product = get.data;

  //convert decimal value to string to pass through as json
  const products = product.map((product) => ({
    ...product,
    price: product.price.toString(),
  }));
  return {
    props: { products },
    revalidate: 5, 
  };

}

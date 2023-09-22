import Product from './Product';
import Navbar from './Navbar';

export const metadata = {
  title: 'Home',
  icon: '/favicon.ico',
};

const Home = async () => {
  const products = await getStaticProps();
  const title = metadata.title;
  return (
    <div>
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
};

export default Home;

const getStaticProps = async () => {
  // const option = { next: { revalidate: 0 } };
  const option = { cache: 'no-store' };
  const get = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/find-with-category`, option);
  const r = await get.json();
  const product = await r.data;

  let products = product.map((product) => ({
    ...product,
    price: product.price.toString(),
  }));
  return products;
};

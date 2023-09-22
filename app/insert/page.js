import  Navbar  from '../Navbar';
import { redirect } from 'next/navigation';
import { FormItem } from './FormItem';

export const metadata = {
  title: 'Insert',
  icon: '/favicon.ico',
};

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





const Page = async () => {
  const categories = await getStaticProps();
  const title = metadata.title;
  return (
    <>

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

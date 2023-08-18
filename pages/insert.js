import Head from 'next/head';
import Navbar from '../components/Navbar';

function InputName() {
  const id = "name";
  const label = "Name";
  return (
    <div className="form-floating mb-3">
      <input type="text" className="form-control" id={id} placeholder=""/> 
      <label for={id}>{label}</label>
    </div>
  );
}

function Description() {
  const id = "description";
  const label = "Description";
  return (
    <div className="form-floating mb-3">
      <textarea className="form-control" placeholder="" id={id}></textarea>
      <label for={id}>{label}</label>
    </div>
  )
}

function InputPrice() {
  const id = "price";
  const label = "Price";
  return (
    <div className="form-floating mb-3">
      <input type="number" step={0.01} min={0} className="form-control" id={id} placeholder=""/> 
      <label for={id}>{label}</label>
    </div>
  );
}

function InputImage() {
  const label = 'Image';
  const id = 'image';
  return (
    <div className="mb-3">
      <label for={id} className="form-label">{label}</label>
      <input className="form-control" type="file" id={id} />
    </div>
  );
}

function ListCategory({id, categories}) {
  return (
    <datalist id={id}>
    {categories.map((category) => (
      <option value={category} />
    ))}
    </datalist>
  );
}

function SelectCategory({categories}) {
  const id = 'category';
  const label = 'Category';
  return (
    <div className="form-floating mb-3">
      <input className="form-control" list="datalistOptions" placeholder="" id={id}/>
      <label for={id}>{label}</label>
      <ListCategory id="datalistOptions" categories={categories} />
    </div>

  );
}

function FormItem({categories}) {
  return (
    <form>
      <InputName />
      <Description />
      <InputPrice />
      <InputImage />
      <SelectCategory categories={categories} />
    </form>
  );
}


export default function Insert({categories}) {
  const title = 'Insert';
  return (
    <div>
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
    </div>
  );
}

export async function getServerSideProps(context) {

  const data = await prisma.category.findMany({
    select: {
      name: true,
    },
  })
  const categories = data.map((category) => (category.name));
  return {
    props: { categories }, 
  };
}

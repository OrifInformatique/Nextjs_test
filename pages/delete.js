
import Head from 'next/head';
import Navbar from '../components/Navbar';
export default function Page(postData) {
  const title = 'Delete';
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container">
        <h1 className="text-center">{title}</h1>
        <p>Do you want to delete {postData}</p>
      </main>

      <footer></footer>
    </>
  );
}



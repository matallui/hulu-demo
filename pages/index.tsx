import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <meta name='description' content='Hulu 2.0 Demo App' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1 className='text-3xl font-bold underline'>Let's create Hulu 2.0!</h1>
    </div>
  );
};

export default Home;

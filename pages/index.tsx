import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <meta name='description' content='Hulu 2.0 Demo App' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      {/* Nav */}
      {/* Results */}
    </div>
  );
};

export default Home;

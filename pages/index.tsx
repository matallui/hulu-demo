import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Results from '../components/Results';
import requests from '../utils/requests';

const Home: NextPage<any> = ({ results }) => {
  console.log(results)
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <meta name='description' content='Hulu 2.0 Demo App' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Nav />
      <Results results={results} />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const genre: keyof typeof requests = context.query
    .genre as keyof typeof requests;

  const request = await fetch(
    `https://api.themoviedb.org/3${requests[genre]?.url}`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
};

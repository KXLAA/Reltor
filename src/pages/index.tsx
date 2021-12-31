import Head from 'next/head';
import Layout from 'components/Layout';
import Navigation from 'components/Navigation';
import Hero from 'components/Hero';
import Info from 'components/Info';
import Recently from 'components/Recently';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Reltor</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Navigation />
        <Hero />
        <Info />
        <Recently />
      </Layout>
    </div>
  );
}

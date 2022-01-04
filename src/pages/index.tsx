import Head from 'next/head';
import MediaQuery from 'react-responsive';
import Layout from 'components/Layout';
import Navigation from 'components/Navigation';
import Hero from 'components/Hero';
import Info from 'components/Info';
import Recently from 'components/Recently';
import Cta from 'components/Cta';
import Footer from 'components/Footer';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 24px;
  max-width: 1440px;
  width: 100%;
  padding: 1rem;
  margin: 0 auto;
  min-height: 100vh;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Reltor</title>
        <meta name="description" content="Reltor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MediaQuery minWidth={1200}>
        <Layout>
          <Navigation />
          <Hero />
          <Info />
          <Recently />
          <Cta />
          <Footer />
        </Layout>
      </MediaQuery>

      <MediaQuery maxWidth={1200}>
        <>
          <Container>
            {` `}
            <a
              href="https://www.figma.com/community/file/1055120348999904183"
              target="_blank"
              rel="noreferrer"
            >
              Design
            </a>
            {` `}
            only Availabe on Desktop. Design by
            {` `}
            <a
              href="https://www.instagram.com/jignasu_jigs/"
              target="_blank"
              rel="noreferrer"
            >
              Jignasu Solanki
            </a>
          </Container>
        </>
      </MediaQuery>
    </div>
  );
}

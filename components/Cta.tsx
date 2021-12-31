import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.section`
  background: linear-gradient(180deg, #c3dfed 0%, #dff0f7 100%);
  padding: 86px;
  border-radius: 50px;
  padding-bottom: 0;
  display: flex;
  justify-content: space-between;
  margin-bottom: 97px;
`;

const Content = styled.div`
  h1 {
    font-weight: 600;
    font-size: 54px;
    line-height: 70px;
    color: #110229;
    padding-bottom: 2rem;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 36px;
    color: #585981;
    padding-bottom: 2rem;
  }
`;

const Button = styled.button`
  font-weight: 600;
  font-size: 16px;
  line-height: 36px;
  display: flex;
  align-items: center;
  letter-spacing: 0.2em;
  color: #ffffff;
  background: #1daeff;
  border-radius: 14px;
  padding: 8px 41px;
  border: none;
`;

const Cta = () => {
  return (
    <Container>
      <Content>
        <h1>
          Find your best
          <br />
          Real Estate
        </h1>
        <p>
          We provide a complete service for the sale, <br />
          purchase or rental of real estate.
        </p>
        <Button>Contact Us</Button>
      </Content>

      <Image src="/cta-img.png" width={450} height={438} alt="building" />
    </Container>
  );
};

export default Cta;

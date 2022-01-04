import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
  margin-bottom: 141px;

  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 38px;
    line-height: 50px;
    text-align: center;
    color: #110229;
    width: 100%;
    max-width: 478px;
    margin: 0 auto;
  }
`;

const Images = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24;

  img {
    border-radius: 30px;
    position: relative;
  }
`;

const ImageContainer = styled.div`
  position: relative;

  p {
    font-weight: 600;
    font-size: 24px;
    line-height: 31px;
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Info = () => {
  return (
    <Container>
      <h2>We are available in many well-known countries</h2>
      <Images>
        <ImageContainer>
          <p>AMERICA</p>
          <Image src="/america.png" alt="logo" width={278} height={426} />
        </ImageContainer>
        <ImageContainer>
          <ImageContainer>
            <p>SPAIN</p>
            <Image src="/spain.png" alt="logo" width={278} height={426} />
          </ImageContainer>
        </ImageContainer>
        <ImageContainer>
          <p>LONDON</p>
          <Image src="/london.png" alt="logo" width={278} height={426} />
        </ImageContainer>
        <ImageContainer>
          <p>FRANCE</p>
          <Image src="/france.png" alt="logo" width={278} height={426} />
        </ImageContainer>
      </Images>
    </Container>
  );
};

export default Info;

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.div`
  background-color: #ecf1f8;
  width: 100%;
  padding: 86px;
  padding-right: 0;
  padding-bottom: 0;
  border-radius: 50px;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 105px;

  img {
    border-bottom-right-radius: 50px;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;

  h1 {
    font-size: 56px;
    color: #110229;
    line-height: 1.4;
    padding-bottom: 36px;
  }

  p {
    font-size: 22px;
    color: #585981;
    width: 80%;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 68px;
  position: absolute;
  bottom: 30px;
  box-shadow: 0px 30px 60px -15px rgba(143, 144, 188, 0.15);
  border-radius: 20px;
  width: 918px;
  z-index: 2;
`;

const Input = styled.input`
  border: none;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  height: 102px;
  width: 100%;
`;

const InputLeft = styled(Input)`
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

const InputRight = styled(Input)`
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const Hero = () => {
  return (
    <Container>
      <Text>
        <h1>Easy way to find a perfect property</h1>

        <p>
          We provide a complete service for the sale, purchase or rental of real
          estate.
        </p>

        <InputContainer>
          <InputLeft />
          <Input />
          <InputRight />
        </InputContainer>
      </Text>

      <Image src="/Banner Image.png" alt="logo" width={780} height={680} />
    </Container>
  );
};

export default Hero;

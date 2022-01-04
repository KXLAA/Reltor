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
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 30px 60px -15px rgba(143, 144, 188, 0.15);
  border-radius: 20px;
  backdrop-filter: blur(20px);
  width: 918px;
  gap: 34px;
  padding: 24px;
  height: 102px;
  z-index: 2;
`;

const Input = styled.input`
  border: none;
  background: none;

  &::placeholder {
    font-weight: normal;
    font-size: 16px;
    line-height: 36px;
    color: #8f90a6;
  }
`;

const Button = styled.img``;

const InputText = styled.div`
  width: 100%;
  border-right: 2px solid #dcdceb;

  &:last-child {
    border: none;
  }

  h3 {
    font-weight: 600;
    font-size: 18px;
    line-height: 36px;
    color: #110229;
  }
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
          <InputText>
            <h3>Location</h3>
            <Input placeholder="Select Your City" />
          </InputText>

          <InputText>
            <h3>Property Type</h3>
            <Input placeholder="Choose Property Type" />
          </InputText>

          <InputText>
            <h3>Price Range</h3>
            <Input placeholder="Choose Price Range" />
          </InputText>

          <Button src="/search button.svg" />
        </InputContainer>
      </Text>

      <>
        <Image
          src="/Banner Image.png"
          alt="logo"
          width={780}
          height={680}
          className="border-bottom "
        />
      </>
    </Container>
  );
};

export default Hero;

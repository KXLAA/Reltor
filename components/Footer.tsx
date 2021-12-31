import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  gap: 48px;
`;

const Info = styled.div`
  display: flex;
  width: 100%;
  max-width: 480px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;
const Icons = styled.div`
  display: flex;
  gap: 28px;
  font-size: 24px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;

  p {
    font-weight: normal;
    font-size: 14px;
    line-height: 23px;
    color: #8f90a6;
  }

  h1 {
    font-weight: 600;
    font-size: 20px;
    line-height: 36px;
    color: #110229;
  }

  a {
    color: #110229;
    font-size: 18px;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  border: 2px solid #d0d0e3;
  border-radius: 15px;
`;

const Input = styled.input`
  border: none;
  background: #ffffff;
  height: 54px;
  border-radius: 15px;
  padding: 16px;
`;

const Footer = () => {
  return (
    <Container>
      <Info>
        <Image src="/Logo.svg" alt="logo" width={182} height={52} />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <Icons>
          <FaFacebook style={{ color: `#1877F2` }} />
          <FaTwitter style={{ color: `#1DA1F2` }} />
          <FaInstagram style={{ color: `#EC3397` }} />
          <FaLinkedin style={{ color: `#0A66C2` }} />
        </Icons>

        <p>© 2021 . All rights reserved.</p>
      </Info>

      <Column>
        <h1>Take a tour</h1>
        <a>Features</a>
        <a>Partners</a>
        <a>Pricing</a>
        <a>Product</a>
        <a>Support</a>
      </Column>

      <Column>
        <h1>Our Company</h1>
        <a>About Us</a>
        <a>Agents</a>
        <a>Blog</a>
        <a>Media</a>
        <a>Contact Us</a>
      </Column>

      <Column>
        <h1>Subscribe</h1>
        <p>
          Subscribe to get latest property, blog
          <br />
          news from us
        </p>

        <InputContainer>
          <Input placeholder="Email Address" />
        </InputContainer>
      </Column>
    </Container>
  );
};

export default Footer;

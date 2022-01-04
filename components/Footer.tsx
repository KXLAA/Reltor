/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
`;

const Info = styled.div`
  display: flex;
  width: 100%;
  max-width: 30rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`;
const Icons = styled.div`
  display: flex;
  gap: 1.75rem;
  font-size: 1.5rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  p {
    font-weight: normal;
    font-size: 14px;
    line-height: 23px;
    color: #8f90a6;
  }

  h1 {
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 2.25rem;
    color: #110229;
  }

  a {
    color: #110229;
    font-size: 1.125rem;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 0px 1rem;
  display: flex;
  border: 2px solid #d0d0e3;
  background: #ffffff;
  border-radius: 0.9375rem;
`;

const Input = styled.input`
  border: none;
  background-color: none;
  height: 3.375rem;
  border-radius: 0.9375rem;
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
          <img src="/Arrow.svg" alt="arrow" />
        </InputContainer>
      </Column>
    </Container>
  );
};

export default Footer;

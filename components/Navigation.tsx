import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Nav = styled.nav`
  display: flex;
  line-height: 2.25rem;
  justify-content: space-between;
  margin-bottom: 2.375rem;
`;

const NavItems = styled.div`
  display: flex;
  gap: 3.75rem;
  align-items: center;

  a {
    color: 110229;
    font-weight: 500;
  }
`;

const Button = styled.button`
  color: #1daeff;
  border-radius: 0.875rem;
  border: 2px solid;
  background: none;
  padding: 8px 40px;
  font-weight: 600;
`;

const Navigation = () => {
  return (
    <Nav>
      <Image src="/Logo.svg" alt="logo" width={182} height={52} />
      <NavItems>
        <a>HOME</a>
        <a>PROPERTIES</a>
        <a>AGENTS</a>
        <a>BLOG</a>
        <Button>LOG IN </Button>
      </NavItems>
    </Nav>
  );
};

export default Navigation;

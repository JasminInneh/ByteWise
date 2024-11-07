import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <Logo>ByteWise</Logo>
      <NavLinks>
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </NavLinks>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: #1a1a1a;
`;

const Logo = styled.h1`
  color: #ff5c5c;
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
`;

const NavLinks = styled.div`
  a {
    color: white;
    margin: 0 1rem;
    text-decoration: none;
  }
  a:hover {
    color: #ff5c5c;
  }
`;

export default Navbar;

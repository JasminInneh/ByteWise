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
align-items: center;
padding: 1rem 2rem;
background: #081d33; /* Slightly darker navy */
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;


const Logo = styled.h1`
  color: #ffd700; /* Gold color for the logo */
  font-family: 'Poppins', sans-serif;
  font-size: 1.8rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  a {
    color: #e0e0e0; /* Light grey links */
    margin: 0 1rem;
    text-decoration: none;
    font-size: 1.1rem;
    transition: color 0.3s;
  }
  a:hover {
    color: #ff8c42; /* Warm orange for hover effect */
  }
`;

export default Navbar;

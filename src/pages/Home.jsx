import React from 'react';
import BlogList from '../components/BlogList';
import Navbar from '../components/Navbar';


const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <h1>Welcome to ByteWise Blog</h1>
        <BlogList />
      </main>
    </>
  );
};

export default Home;

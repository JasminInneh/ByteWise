import React from "react";
import BlogList from "../components/BlogList";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="blog-page">
      <Navbar />
      
      {/* Hero Section */}
      <div className="hero">
        <h1>Welcome to ByteWise Blogs</h1>
        <p>Explore insights, tutorials, and the latest trends in tech.</p>
        <button>Read Latest Blogs</button>
      </div>
      
      <BlogList />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;


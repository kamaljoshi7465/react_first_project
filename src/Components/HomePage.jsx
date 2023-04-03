import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div>
        <h1>DashBoard</h1>
      </div>
      <Link to="newpage">Create New Blog</Link>
      <br />
      <Link to="showpage">Show Blogs</Link>
    </div>
  );
};

export default HomePage;

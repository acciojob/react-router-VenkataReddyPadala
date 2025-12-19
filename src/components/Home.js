import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <h1>Welcome to my website!</h1>
    </>
  );
}

export default Home;

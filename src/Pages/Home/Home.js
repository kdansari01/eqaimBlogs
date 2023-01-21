import React from "react";
import { Link } from "react-router-dom";
import Card from "../../component/Card";
import "./style.css";
const Home = () => {
  return (
    <div>
      <div>
        <Card />
      </div>
      <div className="mainNewBlogSec">
        <div className="newBlogSec">
          <Link to="/newblog"> +</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import "./style.css"
const BlogPost = () => {
  return (
    <div className="container-fluid row d-flex col-12 justify-content-center">
      <div className="col-lg-1">
        <Link to="/" className="nav-link home mt-4">H</Link>
      </div>
      <div className="col-lg-8">
        <div><h1 className="text-center mt-4">Blog Title</h1></div>
        <div className="mainPara">
            <p className="paragraph text-wrap ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, voluptas
          atque! Maiores tempora reiciendis deserunt cupiditate illum fuga
          impedit molestiae excepturi praesentium sint temporibus, velit rerum
          aliquam, consequuntur eaque laboriosam quis accusantium. Debitis
          repudiandae provident minus id corporis sed eveniet consectetur beatae
          illo harum adipisci placeat excepturi ipsa sunt nulla.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;

import React from "react";
import { Link } from "react-router-dom";
import "./style.css"
const Card = () => {
  return (
    <div className="mainCardSection row d-flex col-12 ">
    <Link to="/blogPost" className="mainCard col-lg-4 col-md-3 col-12">
      <div className="mainCard col-lg-4 col-md-3 col-12" >
        <div className="card-body ">
          <p className="card-text text-center">
          Blogpost
          </p>
        </div>
      </div>
        </Link>
      <div className="mainCard col-lg-4 col-md-3 col-12" >
        <div className="card-body col-lg-4 col-md-3 col-12">
          <p className="card-text text-center">
          Blogpost
          </p>
        </div>
      </div>
      <div className="mainCard col-lg-4 col-md-3 col-12" >
        <div className="card-body col-lg-4 col-md-3 col-12">
          <p className="card-text text-center">
          Blogpost
          </p>
        </div>
      </div>
      <div className="mainCard col-lg-4 col-md-3 col-12 mt-4" >
        <div className="card-body col-lg-4 col-md-3 col-12">
          <p className="card-text text-center">
          Blogpost
          </p>
        </div>
      </div>
      <div className="mainCard col-lg-4 col-md-3 col-12 mt-4" >
        <div className="card-body col-lg-4 col-md-3 col-12">
          <p className="card-text text-center">
          Blogpost
          </p>
        </div>
      </div>
      <div className="mainCard col-lg-4 col-md-3 col-12 mt-4" >
        <div className="card-body col-lg-4 col-md-3 col-12">
          <p className="card-text text-center">
          Blogpost
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;

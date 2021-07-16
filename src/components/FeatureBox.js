import React from 'react';
import { Link } from 'react-router-dom';
import "./FeaturedBox.scss"
const FeatureBox = (props) => {
  return (
    <Link to={props.link} className="featured-box">
      <img src={props.img} alt="" />
      <h1 className="featured-box-title">{props.boxTitle}</h1>
      <p className="featured-box-desc">{props.desc}</p>
    </Link>
  );
};

export default FeatureBox;

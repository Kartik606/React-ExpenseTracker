import React from "react";

import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className; //expanceitem.js se all classes yahape merge hote hai
  return <div className={classes}>{props.children}</div>;
};
export default Card;

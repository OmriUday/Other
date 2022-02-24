import React from 'react';
import "./cards.css";

const Cards = (props) => {
  return (
    <div className="Wrapper">
      <div className={props.className}></div>
        <h1 className="Title">{props.titleText}</h1>
        <h2 className="Description">{props.descriptionText}</h2>
        <a href={props.shareLinkSrc} className="Links">SHARE</a>
        <a href={props.exploreLinkSrc} className="Links">EXPLORE</a>
    </div>
  );
};
export default Cards;
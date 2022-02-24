import React from 'react';
import './button.css'

const Button = (props) => {
  return (
    <button className={props.classNameProps}>{props.content}</button>
  );
};

export default Button;
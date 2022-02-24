import React from 'react';
import ReactDOM from 'react-dom';
import Button from "./components/day-2/4.1 Buttons/button";

const App = () => {
  return (
    <div>
      <Button classNameProps="normal" content="Important" />
      <Button classNameProps="bold" content="Not Important" />
    </div>
  );
};

ReactDOM.render(
  <App />, document.querySelector('#root'));

if (module.hot) {
  module.hot.accept();
}
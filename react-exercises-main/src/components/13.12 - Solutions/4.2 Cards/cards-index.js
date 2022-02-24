import React from 'react';
import ReactDOM from 'react-dom';
import Cards from '../src/components/day-2/4.2 Cards/cards';

const App = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }} >
      <Cards
        className="helicopter"
        titleText="my helicopter (:"
        descriptionText="The picture shows a hovering helicopter"
        shareLinkSrc="https://unsplash.com/photos/rNqs9hM0U8I"
        exploreLinkSrc="https://unsplash.com/photos/5Az3lxs3EDs"
      />
      <Cards
        className="phone"
        titleText="my cell phone ~!~ "
        descriptionText="The picture shows a cell phone with pen"
        shareLinkSrc="https://unsplash.com/photos/rNYCrcjUnOA"
        exploreLinkSrc="https://unsplash.com/photos/9e9PD9blAto"
      />
      <Cards
        className="books"
        titleText="my books :)"
        descriptionText="The picture shows a collection of books"
        shareLinkSrc="https://unsplash.com/photos/gETBUi_oRgQ"
        exploreLinkSrc="https://unsplash.com/photos/4Eu5Qsz7jmI"
      />
    </div>
  );
};

ReactDOM.render(
  <App />, document.querySelector('#root'));

if (module.hot) {
  module.hot.accept();
}
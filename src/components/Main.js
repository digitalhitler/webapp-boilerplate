require('normalize.css');
require('styles/App.css');

import React from 'react';

let myImage = require('../images/logo.jpg');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={myImage} alt="Webapp Boilerplate" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

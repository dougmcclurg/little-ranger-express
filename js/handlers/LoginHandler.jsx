'use strict';

import React from 'react';
import Header from '../components/Header.jsx';

export default class LoginHandler extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <div>
          Welcome to login
        </div>
      </div>
    );
  }
}
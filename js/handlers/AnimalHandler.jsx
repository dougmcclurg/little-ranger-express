'use strict';
import './style.scss';
import React from 'react';
import AnimalList from '../components/AnimalList.jsx';
import Header from '../components/Header.jsx';

export default class AnimalHandler extends React.Component {
  render() {
    return(
      <div className="AnimalHandler__main">
        <Header />
        <AnimalList />
      </div>
    );
  }
}
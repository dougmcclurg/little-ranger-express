'use strict';
import './style.scss';
import React from 'react';
import AnimalList from '../components/AnimalList.jsx';

export default class AnimalHandler extends React.Component {
  render() {
    return(
      <div className="AnimalHandler__main">
        <AnimalList />
      </div>
    );
  }
}
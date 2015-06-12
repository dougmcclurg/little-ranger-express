'use strict';
import React from 'react';

export default class AddItem extends React.Component {

  handleSubmit(e) {
    var newItem = this.refs.newItem.getDOMNode().value;
    this.refs.newItem.getDOMNode().value = '';
    this.props.add(newItem);
  }

  render(){
    return (
      <div>
        <input
          type="text"
          ref="newItem"
          className="form-control"
          placeholder="New Item"
        />
        <button onClick={this.handleSubmit.bind(this)}>Add Animal</button>
      </div>
    );
  }
}
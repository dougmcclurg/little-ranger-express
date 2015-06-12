'use strict';
import React from 'react';

export default class List extends React.Component {
  render(){
    return(
      <ul>
        {this.props.items.map(this.renderItems.bind(this))}
      </ul>
    );
  }

  renderItems(item, index){
    return(
      <li className="list-group-item" key={index}>{item}</li>
    );
  }

}

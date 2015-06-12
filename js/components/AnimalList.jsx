'use strict';
import React from 'react';
import List from '../components/List.jsx';
import AddItem from '../components/AddItem.jsx';
import listStore from '../stores/listStore.jsx';
import listActions from '../actions/listActions.jsx';

export default class AnimalList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {list: null};
  }

  componentDidMount(){
    listStore.addChangeListener(this.handleOnChange.bind(this));
    this.handleOnChange();
    return {
      list: listStore.getList()
    }
  }

  componentWillUnmount(){
    listStore.removeChangeListener(this.handleOnChange.bind(this));
  }

  handleAddItem(newItem){
    listActions.addItem(newItem);
  }

  handleRemoveItem(index){
    listActions.removeItem(index);
  }

  handleOnChange(){
    this.setState({
       list: listStore.getList()
    })
  }

  render(){
    if(this.state.list !== null){
      return (
        <div>
          <List items={this.state.list} remove={this.handleRemoveItem} />
          <AddItem add={this.handleAddItem} />
        </div>
      );
    }
    else{return(<div>Empty</div>)};
  }

}
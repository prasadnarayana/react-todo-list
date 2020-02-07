import React, { Component } from 'react'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// UUID
import uuid from "uuid";

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      items: [],
      id: uuid(),
      item: "",
      editItem: false
    };
  }

  // Function to change the input value
  handleInputChange = event => {
    this.setState({
      item: event.target.value
    });
  };

  // Function to add/edit TODO
  handleSubmit = event => {
    event.preventDefault();
    let updatedItems;

    // If editItem is true we have to add new todo else we have to edit an existing todo
    if (!this.state.editItem) {
      const newItem = {
        id: this.state.id,
        title: this.state.item
      }

      updatedItems = [...this.state.items, newItem];
    } else {
      updatedItems = this.state.items;

      // To find an index of the which we have to edit
      const index = updatedItems.findIndex(item => item.id === this.state.id)
      // To set the updated title
      updatedItems[index].title = this.state.item;
    }

    this.setState({
      items: updatedItems,
      id: uuid(),
      item: "",
      editItem: false
    });
  };

  // Function to clear all TODO's
  clearList = () => {
    this.setState({
      items: []
    });
  };

  // Function to delete TODO
  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);

    this.setState({
      items: filteredItems
    });
  };

  // Function to put the selected TODO in input box to edit.
  handleEdit = id => {
    const selectedItem = this.state.items.find(item => item.id === id);
    
    this.setState({
      item: selectedItem.title,
      id: id,
      editItem: true
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo list</h3>
            <TodoInput
              item={this.state.item}
              handleInputChange={this.handleInputChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;


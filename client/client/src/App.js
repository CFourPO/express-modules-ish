import React, { Component } from 'react';
import AddBookmarkForm from './components/AddBookmarkForm.js';
import logo from './logo.svg';
import './App.css';
import { 
    Checkbox,
    FormGroup,
    Radio,
    ControlLabel,
    FormControl,
    Button,
    HelpBlock
} from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        bookmarks: [],
        categories: []
    }
  }


  render() {
    const { 
        categories, 
        bookmarks }  = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <h2>Homepage</h2>
          
        </div>
        <AddBookmarkForm categories={[{name: 'Cat1'}, {name: 'Cat2'}]}/>
      </div>
    );
  }
}

export default App;





import React, { Component } from 'react'

import Todo from './component/Todo';
import './App.css';
import './ImportFontFiles';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo />
      </div>
    )
  }
}

export default App;

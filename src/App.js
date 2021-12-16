import React from 'react';
import './App.css';
import Palette from './components/Palette';
import seedColors from './seedColors';




class  App extends React.Component {
  render(){
    return (
      <div className="App">
      <h1>Hello</h1>
      <Palette palette={seedColors[4]} />
      </div>
    );
  }

}

export default App;

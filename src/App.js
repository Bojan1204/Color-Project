import React from 'react';
import './App.scss';
import Palette from './components/Palette';
import seedColors from './components/seedColors';




class  App extends React.Component {
  render(){
    return (
      <div className="App">
      <Palette {...seedColors[4]} />
      </div>
    );
  }

}

export default App;

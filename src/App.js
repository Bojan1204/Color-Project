import React from 'react';
import './App.scss';
import Palette from './components/Palette';
import seedColors from './components/seedColors';
import { generatePalette } from "./components/colorHelpers";




class  App extends React.Component {
  render(){
    // console.log(generatePalette(seedColors[4]))
    return (
      <div className="App">
      <Palette palette={generatePalette(seedColors[4])} />
      </div>
    );
  } 

}

export default App;

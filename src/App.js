import React from 'react';
import './App.scss';
import{ Route, Switch } from "react-router-dom";
import Palette from './components/Palette';
import seedColors from './components/seedColors';
import { generatePalette } from "./components/colorHelpers";



class  App extends React.Component {
  render(){
    
    return (
      <Switch>  
      <Route exact path='/' render={()=> <h1>Palette list foe here</h1>} />
      <Route path='/palette/:id'render={()=> <p>druga lista</p>}/>
      </Switch>
      // <div className="App">
      // <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  } 
 
}

export default App;

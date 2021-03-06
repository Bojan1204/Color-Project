import React from 'react';
import './App.scss';
import PaletteList from './components/PaletteList';
import{ Route, Switch } from "react-router-dom";
import Palette from './components/Palette';
import  SingleColorPalette from './components/SingleColorPalette';
import seedColors from './components/seedColors';
import { generatePalette } from "./components/colorHelpers";



class  App extends React.Component {

  findPalette=(id)=>{
    return seedColors.find(function (palette) {
      
      return palette.id === id;
    })
  }

  render(){
    
    return (
      <Switch>  
      <Route exact path='/' render={(routeProps)=> <PaletteList palettes={seedColors} {...routeProps}/>} />

      <Route path='/palette/:id' 
      render={(routeProps)=> 
      <Palette   palette={generatePalette(this.findPalette(routeProps.match.params.id))}
      />}/>

      <Route exact path='/palette/:id/:colorId' render={()=> <SingleColorPalette/> }/>
      </Switch>
      // <div className="App">
      // <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  } 
 
}

export default App;

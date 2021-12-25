import React from 'react';
import MiniPalette from './MiniPalette';
import { Link } from 'react-router-dom';




export default class PaletteList extends React.Component{
    render(){
        return(
            <div>
                
                <h1>React Colors</h1>
                {this.props.palettes.map(palette=>(
                   <MiniPalette {...palette} />
                ))}
            </div>
        )
    }
}
import React from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';




export default class PaletteList extends React.Component{
    render(){
        return(
            <div>
                <MiniPalette/>
                <h1>React Colors</h1>
                {this.props.palettes.map(palette=>(
                    <p>   
                    <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
                    </p>
                ))}
            </div>
        )
    }
}
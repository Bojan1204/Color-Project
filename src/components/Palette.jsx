import React, {Component} from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import './Palette.scss';


class Palette extends Component{
    constructor(props){
        super(props);
        this.state={level: 500, format : "hex"}
    }

    changeLevel=(newlevel)=>{
        this.setState({level: newlevel})
        console.log(newlevel)
    }

    changeFormat=(val)=>{
        this.setState({format: val})
    }

    render(){
        const colorBoxes = this.props.palette.colors[this.state.level].map(color=>(
            <ColorBox 
            background={color[this.state.format]} 
            name={color.name} 
            key={color.id} 
            id={color.id}
            paletteId={this.props.palette.id}
            />
        ))
        console.log(this.props.palette)
        return(
            <div className="Palette">
                <Navbar
                level={this.state.level}
                changeLevel={this.changeLevel}
                handleChange={this.changeFormat}
                  />
                <div className="Palette-colors">{colorBoxes}</div>
                <footer className="Palette-footer">
                    {this.props.palette.paletteName}
                    <span className="emoji">{this.props.palette.emoji}</span>
                </footer>
            </div>
        )
    }
}


export default Palette;
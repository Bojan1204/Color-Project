import React from "react";
import {Link} from "react-router-dom";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.scss';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';


export default class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state={format:"hex", open: false}
  }

  handleFormatChange=(e)=>{
      this.setState({format: e.target.value, open: true});
       this.props.handleChange(e.target.value)
      // console.log(e.target.value)
  }

  closeSnackbar=()=>{
    this.setState({open: false})
  }

  render() {
    return (
      <header className="Navbar">
        <div className="logo">
          <Link to="/">reactcolorpicker</Link>
        </div>
        <div className="slider-container">
        <span>Level: {this.props.level}</span>
        <div className="slider">
          <Slider
            defaultValue={this.props.level}
            min={100}
            max={900}
            step={100}
            onAfterChange={this.props.changeLevel}
          />
        </div>
        </div>
      <div className="select-container">
        <Select value={this.state.format} onChange={this.handleFormatChange}>
          <MenuItem value="hex">HEX-#fff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgb(255,255,255, 0.1)</MenuItem>
        </Select>
      </div>
      <Snackbar 
      anchorOrigin={{ vertical: "bottom", horizontal:"left"}}
       open={this.state.open}
       autoHideDuration={3000}
       message={<span id="message-id">Format Changed to {this.state.format.toUpperCase()}!</span>}
       ContentProps={{
         "aria-describedby": "message-id"
       }}
       onClose={this.closeSnackbar}
       action={[
         <IconButton
          onClick={this.closeSnackbar}
          color="inherit"
          key="close"
          aria-label="close"
          >
           <CloseIcon/>
         </IconButton>
       ]}

      />
      </header>
    );
  }
}

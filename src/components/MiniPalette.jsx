import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  main: {
    backgroundColor: "purple",
    border: "3px solid teal",
    "& h1":{
        backgroundColor: "red"
    },
  },
  section: {
    backgroundColor: "pink",
    "& p":{
        backgroundColor: "blue"
    },
  },
};

const MiniPalette = (props) => {
  const { classes } = props;

  return (
    <div className={classes.main}>
      <h1>This is mini palete</h1>
      <section className={classes.section}>
      <p>Secondary</p>

      </section>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);

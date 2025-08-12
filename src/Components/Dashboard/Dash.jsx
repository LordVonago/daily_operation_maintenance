// Os elementos <div> não podem conter id

import classes from "./Dash.module.css";

const Dash = () => {
  return (
    <>
      <div className={classes.mainContainer}>Dash</div>
    </>
  );
};

export default Dash;

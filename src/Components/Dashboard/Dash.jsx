// Os elementos <div> não podem conter id

import classes from "./Dash.module.css";

const Dash = () => {
  return (
    <>
      <div className={classes.mainContainer}>
        Dash
        <details>
          <summary>click</summary>
          <p>click1</p>
          <h1>teste</h1>
          <details>
            <summary>click2</summary>
            <p>click1</p>
            <h1>teste</h1>
          </details>
        </details>
      </div>
    </>
  );
};

export default Dash;

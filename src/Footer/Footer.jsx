import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={classes.footer}>
        &copy;
        <a href="https://github.com/LordVonago" target="blank">
          {" "}
          By Andre Luiz Baierle
        </a>
      </footer>
    </>
  );
};

export default Footer;

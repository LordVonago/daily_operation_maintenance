import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={classes.footer}>
        <a href="https://github.com/LordVonago" target="blank">
          {" "}
          &copy; By Andre Luiz Baierle
        </a>
      </footer>
    </>
  );
};

export default Footer;

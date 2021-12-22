import React, { Fragment } from "react";

import Button from "../UI/Button";

import classes from "./HomePage.module.css";

const HomePage = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <p className={classes.textInHeader}>
          React Page with Loggin form without API moment!
        </p>
      </header>
      <main className={classes.main}>
        <h2>Welcome to your Acount.</h2>
        <p>How are you today?</p>
      </main>
      <footer className={classes.footer}>
        <small>We are very glad to see you again!</small>
      </footer>
      <Button onClick={props.onClick} className={classes.btnLoggout}>
        Logout
      </Button>
    </Fragment>
  );
};

export default HomePage;

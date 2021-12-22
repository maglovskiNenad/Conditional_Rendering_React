import React, { Fragment, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import HomePage from "../Home/HomePage";
import Button from "../UI/Button";

import classes from "./LogginForm.module.css";

const LogginForm = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const storedUserInfos = localStorage.getItem("isLogged");
    if (storedUserInfos === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    setFormIsValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const emailValidation = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
  };

  const passwordValidation = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredEmail("");
    setEnteredPassword("");
  };

  const logginHandler = (email, password) => {
    //check meail
    //check password
    localStorage.setItem("isLogged", "1");
    setIsLoggedIn(
      enteredEmail.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const onClick = (props) => {
    localStorage.removeItem("isLogged");
    setIsLoggedIn(false);
    setEnteredEmail("");
    setEnteredPassword("");
  };

  return (
    <Fragment>
      {!isLoggedIn && (
        <form onSubmit={onSubmitHandler} className={classes.actionForm}>
          <p className={classes.text}>YOUR ACCOUNT FOR EVERYTHING FROM US</p>
          <input
            type="email"
            placeholder="E-Mail-Adress"
            className={`${classes.emailInput} ${
              emailIsValid === false ? classes.invalid : ""
            } `}
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailValidation}
          />

          <input
            type="password"
            placeholder="Password"
            className={`${classes.passwordInput} ${
              passwordIsValid === false ? classes.invalid : ""
            }`}
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={passwordValidation}
          />
          <div className={classes.buttonWraper}>
            <Button
              onClick={logginHandler}
              className={classes.buttonAction}
              type="submit"
            >
              Login
            </Button>
          </div>
          <p className={classes.text}>
            By logging in, you agree to Ours's privacy policy and terms and
            conditions.
          </p>
        </form>
      )}
      {isLoggedIn && (
        <form className={classes.actionForm}>
          <HomePage onClick={onClick} />
        </form>
      )}
    </Fragment>
  );
};

export default LogginForm;

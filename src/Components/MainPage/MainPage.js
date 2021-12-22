import React, { Fragment, useState } from "react";

import Button from "../UI/Button";
import LogginForm from "../LogginForm/LogginForm";

import classes from "./MainPage.module.css";

const MainPage = () => {
  const [formIsShown, setFormIsSown] = useState(false);

  const showInputHandler = (event) => {
    event.preventDefault();
    setFormIsSown((prevShowInput) => !prevShowInput);
  };

  return (
    <Fragment>
      {!formIsShown && (
        <div className={classes["backgroun-wrapper"]}>
          <Button type="submit" onClick={showInputHandler}>
            Signin
          </Button>
        </div>
      )}
      {formIsShown && <LogginForm />}
    </Fragment>
  );
};

export default MainPage;

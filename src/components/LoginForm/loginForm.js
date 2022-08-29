import React, { useContext, useState } from "react";
import "./loginForm.css"
import { LoginContext } from "../context/Login";
import { When } from "react-if";

export default function LoginForm(props) {
  const loginContext = useContext(LoginContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    loginContext.login(username, password);
  };
  const usernameHandler = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };
  const passwordHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  return (
    <>
      <When condition={!loginContext.loggedIn}>
        <div className="card-form" data-testid='header'>
          <form className="form-login">
            <div className="input">
              <label>Username </label>
              <input data-testid='input' type="text" placeholder="Enter your username" name="uname" required onChange={usernameHandler} />
            </div>

            <div className="input">
              <label>Password </label>
              <input type="password" placeholder="Enter your password" name="pass" required onChange={passwordHandler} />
            </div>

            <div className="button">
              <button data-testid='button' type="submit" onClick={handleSubmit}>Log In</button>
            </div>
          </form>
        </div>
      </When>

    </>
  );
}
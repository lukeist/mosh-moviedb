import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputForm from "../components/InputForm";
import { accountLogged } from "../store/rLogin";
import Joi, { validate } from "joi-browser";

const LoginForm = () => {
  const [account, setAccount] = useState({ username: "", password: "" }); // either username or password
  const [joiAlert, setJoiAlert] = useState("");
  const dispatch = useDispatch();
  const accountError = useSelector((state) => state.entities.login.account);

  const Joi = require("joi");
  const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string(),
  });

  // validate = () => {
  //   const result = Joi.validate(accountError, accountError.schema);
  //   console.log(result);
  // };

  const usernameError = useSelector(
    (state) => state.entities.login.errors.username
  );
  const passwordError = useSelector(
    (state) => state.entities.login.errors.password
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(accountLogged({ account }));
    setJoiAlert(schema.validate(account).error.message);
    console.log(schema.validate(account).error.message);
  };
  const handleChange = (e) => {
    const inputValue = e.target.value;
    ///handling-multiple-inputs-with-single-onchange-handler-react
    setAccount({ ...account, [e.target.name]: inputValue });
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <InputForm
          label="Username"
          id="username"
          name="username"
          value={account.username}
          onChange={handleChange}
          type="text"
          error={usernameError}
        />
        <InputForm
          label="Password"
          id="password"
          name="password"
          value={account.password}
          onChange={handleChange}
          type="text"
          error={passwordError}
        />
        <div> {usernameError || passwordError ? <h4>{joiAlert}</h4> : ""}</div>
        <button>Submit</button>
      </form>
    </div>
  );
};
export default LoginForm;

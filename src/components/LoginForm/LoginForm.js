import { useEffect, useState } from "react";

// import useUser from "../../hooks/useUser";

const LoginForm = () => {
  const initialData = {
    username: "",
    password: "",
  };

  const [loginUserData, setUserData] = useState(initialData);
  const [isDisabled, setIsDisabled] = useState(true);
  //   const { loginUser } = useUser();

  //   const onSubmit = (event) => {
  //     event.preventDefault();
  //     loginUser(loginUserData);
  //   };

  const changeUserData = (event) => {
    setUserData({
      ...loginUserData,
      [event.target.id]: event.target.value,
    });
  };

  useEffect(() => {
    setIsDisabled(
      loginUserData.username === "" || loginUserData.password === ""
    );
  }, [loginUserData]);

  return (
    <form noValidate autoComplete="off">
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        placeholder="Username"
        name="username"
        className="form-control"
        required
        onChange={changeUserData}
        value={loginUserData.username}
      ></input>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        placeholder="Password"
        name="password"
        className="form-control"
        required
        onChange={changeUserData}
        value={loginUserData.password}
      ></input>
      <button
        type="submit"
        className={
          isDisabled ? "loginform_submit_disabled" : "loginform_submit_active"
        }
        disabled={isDisabled}
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;

import { useEffect, useState } from "react";

const RegisterForm = () => {
  const initialData = {
    name: "",
    username: "",
    password: "",
    age: "",
    bio: "",
    image: "",
  };

//   const [loginUserData, setUserData] = useState(initialData);
//   const [isDisabled, setIsDisabled] = useState(true);

//   const { loginUser } = useUser();

//   const onSubmit = (event) => {
//     event.preventDefault();
//     loginUser(loginUserData);
//   };

//   const changeUserData = (event) => {
//     setUserData({
//       ...loginUserData,
//       [event.target.id]: event.target.value,
//     });
//   };

//   useEffect(() => {
//     setIsDisabled(
//       loginUserData.username === "" || loginUserData.password === ""
//     );
//   }, [loginUserData]);

  return (
    
  );
};

export default RegisterForm;

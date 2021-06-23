import { useState } from "react";
import authOperations from "../../redux/auth/authOperations";
import { useDispatch } from "react-redux";
import Container from "../../components/Container/Container";

export default function LoginView() {
    const [login, setLogin]=useState({email:'', password:'' })
  const dispatch = useDispatch();

 
 const handleChange = (e) => {
  const { name, value } = e.currentTarget;
  setLogin((prev) => ({...prev, [name]:value}));
};
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.login( login ));
    reset();
   
  };
  const reset = () => setLogin({email:'', password:'' });

  return (
    <Container>
      <form className="regForm" onSubmit={handleSubmit}>
        <h2 className="regTitle">Login</h2>
        <label className="regFormLabel">
          <span>Email</span>
          <input
            className="regInput"
            name="email"
            type="email"
            value={login.email}
            onChange={handleChange}
          />
        </label>
        <label className="regFormLabel">
          <span>Password</span>
          <input
            className="regInput"
            name="password"
            type="password"
            value={login.password}
            onChange={handleChange}
          />
        </label>
        <button className="regBtn">Login</button>
      </form>
    </Container>
  );
}
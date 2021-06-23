import { useState } from "react";
import { useDispatch } from "react-redux";
import Container from "../../components/Container/Container";

import authOperations from "../../redux/auth/authOperations";

export default function RegistrationView() {
  
 const [registration, setRegistration]=useState({name:'',     email:'', password:'' })

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const {name, value, } = e.target;
    setRegistration(prev => ({...prev, [name]: value}))
  }

  const handleSubmit = (e )=> {
    e.preventDefault();

    dispatch(authOperations.register(registration));
    reset();
  };

  const reset = () => setRegistration({ name: '', email: '', password: '' });
 

  return (
    <Container>
      <form className="regForm" onSubmit={handleSubmit}>
        <h2 className="regTitle">Registration</h2>
        <label className="regFormLabel">
          <span>Name</span>
          <input
            className="regInput"
            name="name"
            type="text"
            value={registration.name}
            onChange={handleChange}
          />
        </label>
        <label className="regFormLabel">
          <span>Email</span>
          <input
            className="regInput"
            name="email"
            type="email"
            value={registration.email}
            onChange={handleChange}
          />
        </label>
        <label className="regFormLabel">
          <span>Password</span>
          <input
            className="regInput"
            name="password"
            type="password"
            value={registration.password}
            onChange={handleChange}
          />
        </label>
        <button className="regBtn">Sign up</button>
      </form>
    </Container>
  );
}
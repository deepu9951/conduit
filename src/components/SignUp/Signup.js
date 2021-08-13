import React, { useEffect,useState } from "react";
import './Signup.css';
import Button from "react-bootstrap/Button";


const useSignUpForm = callback => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
  };

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};

export default function Signup() {
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm();
  
  return (
    <div className="main">
      <div className="container">
        <div className="header">
          <h1>Sign Up Form</h1>
        </div>
        <div className="form">
          <input
            onChange={handleInputChange}
            type="text"
            name="userName"
            value={inputs.userName}
            placeholder="User Name"
          />
          <br />
          <input
            onChange={handleInputChange}
            type="email"
            name="email"
            value={inputs.email}
            placeholder="Email"
          />
          <br />
          <input
            onChange={handleInputChange}
            type="password"
            name="password"
            value={inputs.password}
            placeholder="Password"
          />
          <br />
          <input
            onChange={handleInputChange}
            type="password"
            name="CPassword"
            value={inputs.CPassword}
            placeholder="Confirm Password"
          />
          <br />
          <Button type="submit" onClick={handleSubmit} style={{padding:"10px"}}> Submit</Button>
        </div>
      </div>
    </div>
  );
}

// ReactDOM.render(<Main />, document.getElementById("main"));

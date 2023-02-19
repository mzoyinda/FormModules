import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({
    uname: "",
    email: ""
  });

  const handleChange = (e) => {
    const {name, value} = e.currentTarget;
    setUser({
        ...user,
        [name]: value
    })
    console.log(user)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user)
    axios.post("/login", user)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }

  return (
    <Main>
      <Form>
        <Header>
          <h2>Login</h2>
        </Header>
        <div>
          <p>Email Address</p>
          <input 
          type="email" 
          name="email"
          value={user.email}
          onChange={handleChange}
          />
        </div>
        <div>
          <p>Password</p>
          <input 
          type="password"
          value={user.password}
          name="password"
          onChange={handleChange}
          />
        </div>
        <ButtonContainer>
          <button onClick={handleSubmit}>Register</button>
        </ButtonContainer>
      </Form>
      <Base>
      <p>Don't have an account?</p>
      <Link to="/register">Sign up</Link>
      </Base>
    </Main>
  );
};

const Main = styled.main`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 680px) {
    margin-left: 0;
  }
`;

const Header = styled.div`
  font-weight: 700;
  font-size: 1.3rem;
  /* text-align: center; */
  margin-bottom: 3rem;
  h2 {
    border-bottom: 1px solid black;
    padding-bottom: 1rem;
  }
`;

const Form = styled.div`
  width: 30%;
  p {
    color: var(--fontColor);
    margin-bottom: 0.3rem;
  }
  input {
    outline: none;
    width: 95%;
    padding: 1rem;
    border: 1px solid #f8f8f8;
    background-color: #f8f8f8;
    margin-bottom: 2rem;
  }

  input:focus,
  textarea:focus {
    outline: none;
    box-shadow: 0px 0px 4px 0px #b5b5b5;
  }

  textarea {
    width: 100%;
    padding: 1rem;
    border: 1px solid #f8f8f8;
    background-color: #f8f8f8;
    resize: none;
  }

  @media screen and (max-width: 680px) {
    width: 80%;
  }
`;

const ButtonContainer = styled.div`
  display: block;
  text-align: center;
  margin-top: 1rem;
  button {
    background-color: var(--mainBlue);
    padding: 1rem 5.5rem;
    cursor: pointer;
    border: none;
    color: white;
  }
  @media screen and (max-width: 680px) {
    button {
      padding: 1rem 3rem;
    }
  }
`;

const Base = styled.div`
display: flex;
/* width: 30%; */
align-items: center;
margin-top: 2rem;
a{
  margin-left: 1rem;
  font-size: 0.9rem;
  text-decoration: none;
  background-color: var(--mainOrange);
    padding: 0.5rem 2rem;
    cursor: pointer;
    border: none;
    color: white;

}
`;

export default Login;

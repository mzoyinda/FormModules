import React, { useState } from "react";
import styled from "styled-components";
import axios from 'axios';

const SignUp = () => {
  const [user, setUser] = useState({
    uname: "",
    email: "",
    password: "",
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
    axios.post("/register", user)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }

  return (
    <Main>
      <Form>
        <Header>
          <h2>Sign Up</h2>
        </Header>
        <div>
          <p>Full Name</p>
          <input 
          type="text"
          name="uname"
          value={user.uname}
          onChange={handleChange}
          />
        </div>
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
        {/* <div>
            <p>Confirm Password</p>
            <input type="password"/>
        </div> */}
        <ButtonContainer>
          <button onClick={handleSubmit}>Register</button>
        </ButtonContainer>
      </Form>
    </Main>
  );
};

const Main = styled.main`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 680px) {
    margin-left: 0;
  }
`;

const Header = styled.div`
  font-weight: 700;
  font-size: 1rem;
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

export default SignUp;

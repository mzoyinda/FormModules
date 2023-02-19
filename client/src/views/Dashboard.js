import React from 'react';
import styled from 'styled-components';
// import { FiSearch } from 'react-icons/fi';
import Admin from '../assets/admin.png';

const Dashboard = () => {
  return (
    <>
        <StyledNav>
            <User>
                <Avatar src={Admin} />
                <div>
                    <Name>Satoshi Nagamoto</Name>
                    <Role>Admin</Role>
                </div>
            </User>
            <ButtonContainer>
            <button>Logout</button>
            </ButtonContainer>
        </StyledNav>
        <Main>
            <p>Welcome to your dashboard.</p>
        </Main>
    </>
  )
}

const Main = styled.main`
margin: 2rem;
`;

const StyledNav = styled.nav`
width: 100%;
display: flex;
padding: 0 4rem;
height: 86px;
box-sizing: border-box;
border-bottom: 1px solid var(--mainPurple);
justify-content: space-between;
align-items: center;
background-color:  #F8F8F8;
/* padding: 1rem; */
@media screen and (max-width: 680px) {
      display: none;
}
`;


const User = styled.div`
text-align:left;
display: flex;
width: max-content;
justify-content: flex-end;
/* box-sizing: border-box; */
align-items: center;
`;
const Name = styled.p`
color:var(--mainBlue);
font-weight: 700;
font-size: 0.8rem;
`
const Role = styled.p`
font-size: 0.7rem;
`
const Avatar = styled.img`
margin-right:10px;
width: 2.5rem;
border: 1px solid var(--mainBlue);
object-fit: cover;
border-radius: 50%;
padding: 2px;
`

const ButtonContainer = styled.div`
  display: block;
  text-align: center;
  margin-top: 1rem;
  button {
    background-color: var(--mainBlue);
    padding: 1rem 3rem;
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

export default Dashboard
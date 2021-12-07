import styled from 'styled-components';
import logo from '../../assets/images/fendylogo.png'
import SearchBar from "../searchbar/SearchBar";

const Nav = styled.div`
height:50px;
display:flex;
justify-content:space-between;
align-items: center;
border-bottom: 1px solid burlywood;
`;

const Img = styled.img`
height:50px;
width:110px;
padding: 15px;
`;

const Span = styled.span`
font-size: 15px;
font-weight: 300;
color: black;
`;

const LoginText = styled.div`
font-size: 15px;
font-weight: 700;
color: black;
padding: 15px;
`;

const Navbar = ({ click }) => {
  
  return (
   <Nav>
     <Img src={logo}/>
     <SearchBar/>
     <LoginText>Login / <Span>Sign Up</Span></LoginText>
   </Nav>
  );
};

export default Navbar;

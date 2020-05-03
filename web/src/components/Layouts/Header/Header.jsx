import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <MainContainer>
      <h1>
        Welcome to the <br /> MERN Stack blog!
      </h1>
    </MainContainer>
  );
};

export default Header;

//main container
const MainContainer = styled.header`
  background: url(../../../assets/images/header-bg.jpg) no-repeat center/cover;
  height: 25rem;

  h1 {
    transform: translate(-50%, -50%);
    color: #000;
    position: absolute;
    top: 25%;
    left: 50%;
  }
`;

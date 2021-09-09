import React from 'react';
import styled from 'styled-components';
import googleKeepLogo from '../Images/googleKeepLogo.png';

const Header = () => {
  return (
    <NavigationBar>
      <ImgContainer>
        <Img src={googleKeepLogo} alt="Google Keep Logo" />
      </ImgContainer>
      <p align="right">Keep Clone By Danish Raza</p>
    </NavigationBar>
  );
};

export default Header;

/** Styling for the components */
const NavigationBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 4px 25px;
  border-bottom: 1px solid rgba(57, 62, 65, 0.3);`;

const ImgContainer = styled.div`
  display: flex;
  align-items:left;`;

const Img = styled.img`
  width:50px;
  height:50px;`;
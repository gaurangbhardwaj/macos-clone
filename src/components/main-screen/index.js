import React from "react";
import styled from "styled-components";
import BigSurBackgroundImage from "images/big-sur-wallpaper.jpg";
import DockController from "./dock";
import MenuBarController from "./menu-bar";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  background-image: url(${BigSurBackgroundImage});
  background-size: cover;
`;

const DockContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  align-items: flex-end;
  justify-content: center;
`;

const MenuBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: flex-start;
`;

const MainScreenController = () => {
  return (
    <MainContainer>
      <MenuBarContainer>
        <MenuBarController />
      </MenuBarContainer>
      <DockContainer>
        <DockController />
      </DockContainer>
    </MainContainer>
  );
};

export default MainScreenController;

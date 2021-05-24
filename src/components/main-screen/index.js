import React from "react";
import styled from "styled-components";
import BigSurBackgroundImage from "images/big-sur-wallpaper.jpg";
import MenuBarController from "./menu-bar";
import DesktopController from "./desktop";
import DockController from "./dock";

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

const MenuBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: flex-start;
`;

const DesktopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  margin: 20px;
`;

const DockContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  align-items: flex-end;
  justify-content: center;
`;

const MainScreenController = () => {
  return (
    <MainContainer>
      <MenuBarContainer>
        <MenuBarController />
      </MenuBarContainer>
      <DesktopContainer>
        <DesktopController />
      </DesktopContainer>
      <DockContainer>
        <DockController />
      </DockContainer>
    </MainContainer>
  );
};

export default MainScreenController;

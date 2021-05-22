import React from "react";
import styled from "styled-components";
import FinderIcon from "images/finder.png";
import FirefoxIcon from "images/firefox.png";
import ChromeIcon from "images/chrome.png";
import TerminalIcon from "images/terminal.png";
import MailIcon from "images/mail.png";
import BooksIcon from "images/books.png";
import AppStoreIcon from "images/app-store.png";
import SystemPrefrencesIcon from "images/system-prefrences.png";
import BinIcon from "images/bin.png";

const Container = styled.div`
  margin-bottom: 8px;
  padding-bottom: 10px;
  height: 50px;
  border-radius: 15px;
  background-color: rgb(0, 0, 0, 0.3);
  transition: 100ms;
`;

const OpenedAppDots = styled.div`
  padding: 2px;
  background-color: rgb(43, 59, 69);
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Icon = styled.img`
  height: 55px;
  width: 55px;
  gap: 5px;
  :hover {
    transform-origin: center bottom;
    transform: scale(2);
    margin: 0 20px;
  }
  transition: 150ms;
`;

const Divider = styled.div`
  height: 45px;
  border-right: 1px solid rgb(250, 250, 250, 0.5);
  margin: auto 10px;
`;

const DockController = () => {
  return (
    <Container>
      <IconsContainer>
        <Icon src={FinderIcon} alt="finder" />
        <Icon src={FirefoxIcon} alt="firefox" />
        <Icon src={ChromeIcon} alt="chrome" />
        <Icon src={TerminalIcon} alt="terminal" />
        <Icon src={MailIcon} alt="mail" />
        <Icon src={BooksIcon} alt="books" />
        <Icon src={AppStoreIcon} alt="app-store" />
        <Icon src={SystemPrefrencesIcon} alt="system-prefrences" />
        <Divider />
        <Icon src={BinIcon} alt="bin" />
      </IconsContainer>
    </Container>
  );
};

export default DockController;

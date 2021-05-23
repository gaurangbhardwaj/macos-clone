import React from "react";
import styled from "styled-components";
import moment from "moment";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.6);
  padding: 0 10px;
`;

const AppOptions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  filter: drop-shadow(0px 0px 2px black);
`;

const Option = styled.div`
  color: white;
  text-transform: capitalize;
  font-size: 12px;
  font-weight: 700;
  padding: 0px 10px;
  border-radius: 6px;
  :hover {
    cursor: default;
  }
`;

const AppleLogo = styled(Option)`
  font-size: 20px;
`;

const SystemOptions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
  filter: drop-shadow(0px 0px 2px black);
`;

const MenuBarController = () => {
  setInterval(() => {
    document.getElementById("live-clock").innerHTML = moment().format(
      "ddd DD MMM HH:mm:ss"
    );
  }, 1000);
  return (
    <Container>
      <AppOptions>
        <AppleLogo id="logo"></AppleLogo>
        <Option style={{fontWeight: 800}}>Finder</Option>
        <Option>File</Option>
        <Option>Edit</Option>
        <Option>View</Option>
        <Option>Go</Option>
        <Option>Window</Option>
        <Option>Help</Option>
      </AppOptions>
      <SystemOptions>
        <Option>Gaurang Bhardwaj</Option>
        <Option id="live-clock" style={{width: 140}}></Option>
      </SystemOptions>
    </Container>
  );
};

export default MenuBarController;

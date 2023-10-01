import React from "react";
import styled from "styled-components";
import DefaultIcon from "images/default-folder.png";
import GithubIcon from "images/github-folder.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const Folder = styled.img`
  height: 70px;
  width: 70px;
  padding: 4px 2px;
  border-radius: 6px;
  border: 1px solid rgb(0, 0, 0, 0);
`;

const FolderText = styled.div`
  color: white;
  font-size: 12px;
  font-weight: 800;
  padding: 2px 6px;
  border-radius: 6px;
`;

const FolderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover ${Folder} {
    border: 1px solid rgb(103, 124, 139);
    background-color: rgb(0, 0, 0, 0.3);
  }
  &:hover ${FolderText} {
    background-color: rgb(0, 92, 200, 0.7);
  }
`;

const GITHUB_URL_MACOS_CLONE = "https://github.com/gaurangbhardwaj/macos-clone";

const DesktopController = () => (
  <Container>
    <FolderContainer>
      <Folder src={DefaultIcon} />
      <FolderText>Code Snippets</FolderText>
    </FolderContainer>
    <FolderContainer
      onClick={() => window.open(GITHUB_URL_MACOS_CLONE, "_blank")}
    >
      <Folder src={GithubIcon} />
      <FolderText>MacOS Clone</FolderText>
    </FolderContainer>
  </Container>
);

export default DesktopController;

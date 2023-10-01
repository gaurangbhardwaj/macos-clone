import React, { useEffect } from "react";
import styled from "styled-components";
import BigSurBackgroundImage from "images/big-sur-wallpaper.jpg";
import ForestVideo from "videos/forest.mp4";
import RocketLaunch from "videos/rocket-launch.mp4";
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
  /* background-image: url(${BigSurBackgroundImage});
  background-size: cover; */
`;

const BackgroundVideoContainer = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
`;

const MenuBarContainer = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: flex-start;
`;

const DesktopContainer = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  margin: 20px;
`;

const DockContainer = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  align-items: flex-end;
  justify-content: center;
`;

const BG_VIDEOS = [ForestVideo, RocketLaunch];

const MainScreenController = () => {
  useEffect(() => {
    setTimeout(async () => {
      const video = document.getElementById("bg-video");
      const videoSpeeds = [1, 0.75, 0.5];
      try {
        for (let i = 1; i <= 3; i++) {
          setTimeout(() => {
            if (video?.playbackRate) {
              video.playbackRate = videoSpeeds[i];
            }
          }, i * 500);
        }
        setTimeout(() => video?.pause(), 2500);
      } catch (err) {
        console.log("UNABLE TO SET BG VIDEO");
      }
    }, 10000);
  }, []);

  return (
    <MainContainer>
      <BackgroundVideoContainer>
        <video
          id="bg-video"
          playsInline
          autoPlay
          muted
          loop
          disablePictureInPicture
          controlsList="nodownload"
        >
          <source src={BG_VIDEOS[0]} type="video/mp4" />
        </video>
      </BackgroundVideoContainer>
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

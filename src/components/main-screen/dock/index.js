import React, { useState } from "react";
import styled, { css } from "styled-components";
import FinderIcon from "images/finder.png";
import FirefoxIcon from "images/firefox.png";
import ChromeIcon from "images/chrome.png";
import TerminalIcon from "images/terminal.png";
import MailIcon from "images/mail.png";
import BooksIcon from "images/books.png";
import AppStoreIcon from "images/app-store.png";
import SystemPreferencesIcon from "images/system-preferences.png";
import BinIcon from "images/bin.png";

const ICONS_DATA = [
  { id: "finder", title: "Finder", src: FinderIcon },
  { id: "firefox", title: "Firefox", src: FirefoxIcon },
  { id: "chrome", title: "Chrome", src: ChromeIcon },
  { id: "terminal", title: "Terminal", src: TerminalIcon },
  { id: "mail", title: "Mail", src: MailIcon },
  { id: "books", title: "Books", src: BooksIcon },
  { id: "app-store", title: "App Store", src: AppStoreIcon },
  {
    id: "system-prefrences",
    title: "System Preferences",
    src: SystemPreferencesIcon,
  },
  { id: "bin", title: "Bin", src: BinIcon },
];

const Container = styled.div`
  margin-bottom: 8px;
  height: 50px;
  border-radius: 15px;
  background-color: rgb(0, 0, 0, 0.3);
`;

const MagnifyCssOnePointFive = css`
  transform-origin: center bottom;
  transform: scale(1.5);
  margin: 0 14px;
`;

const MagnifyCssOnePointTwo = css`
  transform-origin: center bottom;
  transform: scale(1.2);
  margin: 0 4px;
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4px;
  &:hover {
    width: 500px;
  }
  ${({ magnificationIds }) =>
    (magnificationIds?.previousId ||
      magnificationIds?.previousToPreviousId ||
      magnificationIds?.nextId ||
      magnificationIds?.nextToNextId) &&
    css`
      #${magnificationIds.previousId} {
        ${MagnifyCssOnePointFive}
      }
      #${magnificationIds.nextId} {
        ${MagnifyCssOnePointFive}
      }
      #${magnificationIds.previousToPreviousId} {
        ${MagnifyCssOnePointTwo}
      }
      #${magnificationIds.nextToNextId} {
        ${MagnifyCssOnePointTwo}
      }
    `}
  ${({ openingApp }) =>
    openingApp &&
    css`
      #${openingApp} {
        animation: bounce 0.4s;
        animation-direction: alternate;
        animation-iteration-count: infinite;
        @keyframes bounce {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(0, -15px, 0);
          }
        }
      }
    `}
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img:hover {
    transform-origin: center bottom;
    transform: scale(2);
    margin: 0 22px;
  }
`;

const Icon = styled.img`
  height: 40px;
  width: 40px;
  gap: 5px;
  transition: 100ms;
`;

const OpenedAppDot = styled.div`
  visibility: ${({ isOpened }) => (isOpened ? "visible" : "hidden")};
  padding: 2px;
  background-color: rgb(250, 250, 250, 0.6);
  border-radius: 50%;
`;

const Divider = styled.div`
  height: 42px;
  border-right: 1px solid rgb(250, 250, 250, 0.5);
  margin: auto 10px;
`;

const DockController = () => {
  const [openedApp, setOpenedApp] = useState("");
  const [magnificationIds, setMagnificationIds] = useState("");
  return (
    <Container>
      <IconsContainer
        id="icons-container"
        magnificationIds={magnificationIds}
        onMouseOver={({ target }) => {
          if (!target?.name) return;
          const { previousId, previousToPreviousId, nextId, nextToNextId } =
            JSON.parse(target.name);
          setMagnificationIds({
            previousId,
            previousToPreviousId,
            nextId,
            nextToNextId,
          });
        }}
        onMouseLeave={() => setMagnificationIds("")}
        openingApp={openedApp}
        onClick={({ target }) => {
          if (!target?.id) return;
          setOpenedApp(target.id);
          setTimeout(() => setOpenedApp(""), 3000);
        }}
      >
        {ICONS_DATA.map(({ id, src, title }, idx) => {
          const name = {};
          const props = {
            id: id,
            src: src,
            alt: id,
            title: title,
          };
          name.previousId = ICONS_DATA[idx - 1]?.id || "n/a";
          name.previousToPreviousId = ICONS_DATA[idx - 2]?.id || "n/a";
          name.nextId = ICONS_DATA[idx + 1]?.id || "n/a";
          name.nextToNextId = ICONS_DATA[idx + 2]?.id || "n/a";
          props.name = JSON.stringify(name);
          return (
            <>
              {idx === ICONS_DATA.length - 1 && <Divider />}
              <IconWrapper key={idx}>
                <Icon {...props} />
                <OpenedAppDot isOpened={id === openedApp || id === "finder"} />
              </IconWrapper>
            </>
          );
        })}
      </IconsContainer>
    </Container>
  );
};

export default DockController;

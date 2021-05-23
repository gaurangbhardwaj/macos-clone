import React, {useState} from "react";
import styled, {css} from "styled-components";
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
  {id: "finder", title: "Finder", src: FinderIcon},
  {id: "firefox", title: "Firefox", src: FirefoxIcon},
  {id: "chrome", title: "Chrome", src: ChromeIcon},
  {id: "terminal", title: "Terminal", src: TerminalIcon},
  {id: "mail", title: "Mail", src: MailIcon},
  {id: "books", title: "Books", src: BooksIcon},
  {id: "app-store", title: "App Store", src: AppStoreIcon},
  {
    id: "system-prefrences",
    title: "System Preferences",
    src: SystemPreferencesIcon,
  },
  {id: "bin", title: "Bin", src: BinIcon},
];

const Container = styled.div`
  margin-bottom: 8px;
  padding-bottom: 10px;
  height: 50px;
  border-radius: 15px;
  background-color: rgb(0, 0, 0, 0.3);
  transition: 100ms;
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${({openingApp}) =>
    openingApp &&
    css`
      #${openingApp} {
        animation: bounce 0.4s;
        animation-direction: alternate;
        animation-iteration-count: 6;
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
  ${({magnificationIds}) =>
    (magnificationIds?.previousId ||
      magnificationIds?.previousToPreviousId ||
      magnificationIds?.nextId ||
      magnificationIds?.nextToNextId) &&
    css`
      #${magnificationIds?.previousId}, #${magnificationIds?.nextId} {
        transform-origin: center bottom;
        transform: scale(1.5);
        margin: 0 14px;
      }
      #${magnificationIds?.previousToPreviousId},
        #${magnificationIds?.nextToNextId} {
        transform-origin: center bottom;
        transform: scale(1.2);
        margin: 0 4px;
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
  height: 55px;
  width: 55px;
  gap: 5px;
  transition: 200ms;
`;

const OpenedAppDot = styled.div`
  visibility: ${({isOpened}) => (isOpened ? "visible" : "hidden")};
  padding: 2px;
  background-color: rgb(250, 250, 250, 0.6);
  border-radius: 50%;
`;

const Divider = styled.div`
  height: 45px;
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
        onMouseOver={({target}) => {
          if (!target?.name) return;
          const {previousId, previousToPreviousId, nextId, nextToNextId} =
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
        onClick={({target}) => {
          if (!target?.id) return;
          setOpenedApp(target.id);
        }}
      >
        {ICONS_DATA.map(({id, src, title}, idx) => {
          const name = {};
          const props = {
            key: id,
            id: id,
            src: src,
            alt: id,
            title: title,
          };
          if (idx > 0) {
            name.previousId = ICONS_DATA[idx - 1].id;
            if (idx > 1) name.previousToPreviousId = ICONS_DATA[idx - 2].id;
          }
          if (idx < ICONS_DATA.length - 1) {
            name.nextId = ICONS_DATA[idx + 1].id;
            if (idx < ICONS_DATA.length - 2)
              name.nextToNextId = ICONS_DATA[idx + 2].id;
          }
          if (name && Object.keys(name).length)
            props.name = JSON.stringify(name);
          return (
            <>
              {idx === ICONS_DATA.length - 1 && <Divider />}
              <IconWrapper>
                <Icon {...props} />
                <OpenedAppDot isOpened={id === openedApp} />
              </IconWrapper>
            </>
          );
        })}
      </IconsContainer>
    </Container>
  );
};

export default DockController;

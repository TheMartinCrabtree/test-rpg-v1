import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import Header from "../Header";
import MainNavBar from "../MainNavBar";
import FileNavigator from "../FileNavigator";
import ContentViewer from "../ContentViewer";
import Footer from "../Footer";

// for a filtered search use a debounce function

// move this to an external json file
// also need to create a flexible data manager
const characterData = [
  {
    name: "angela",
    class: "noclass",
    bio: "pixie punk",
    stats: {
      str: 10,
      dex: 10,
      con: 10,
      int: 10,
      wis: 10,
      cha: 10,
    },
    items: {
      equipped: {
        head: "",
        body: "",
        hands: "",
        feet: "",
        necklace: "",
        rings: {
          left: "",
          right: "",
        },
        weapons: {
          mainhand: "",
          offhand: "",
          ranged: "",
        },
      },
      backpack: {},
    },
  },
  {
    name: "camille",
    class: "noclass",
    bio: "fem fatale",
    stats: {
      str: 10,
      dex: 10,
      con: 10,
      int: 10,
      wis: 10,
      cha: 10,
    },
    items: {
      equipped: {
        head: "",
        body: "",
        hands: "",
        feet: "",
        necklace: "",
        rings: {
          left: "",
          right: "",
        },
        weapons: {
          mainhand: "",
          offhand: "",
          ranged: "",
        },
      },
      backpack: {},
    },
  },
  {
    name: "hari",
    bio: "fem fatale",
    class: "noclass",
    stats: {
      str: 10,
      dex: 10,
      con: 10,
      int: 10,
      wis: 10,
      cha: 10,
    },
    items: {
      equipped: {
        head: "",
        body: "",
        hands: "",
        feet: "",
        necklace: "",
        rings: {
          left: "",
          right: "",
        },
        weapons: {
          mainhand: "",
          offhand: "",
          ranged: "",
        },
      },
      backpack: {},
    },
  },
];

const monsterData = [
  {
    name: "goblin",
    class: "runt",
    bio: "runt",
    stats: {
      str: 8,
      dex: 8,
      con: 8,
      int: 8,
      wis: 8,
      cha: 8,
    },
    items: {
      equipped: {
        head: "",
        body: "",
        hands: "",
        feet: "",
        necklace: "",
        rings: {
          left: "",
          right: "",
        },
        weapons: {
          mainhand: "",
          offhand: "",
          ranged: "",
        },
      },
      backpack: {},
    },
  },
];

const MainContainer = styled.div`
  background-color: lightgray;
`;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: darkgray;
  padding-left: 5px;
  min-height: 50vh;
`;

const getLocalStorageData = () => {
  let data = localStorage.getItem("game-data");
  return data ? JSON.parse(data) : [];
};

const saveLocalStorageData = (data, updateCallback) => {
  localStorage.setItem("game-data", JSON.stringify(data));
  return updateCallback(getLocalStorageData());
};

const Main = (props) => {
  const [gameData, setData] = useState(getLocalStorageData);
  const [selected, setSelectedIndex] = useState(0);
  // console.log("gameData", gameData);
  // console.log("localStorage data", getLocalStorageData());
  const _updateSelected = (indexVal) => {
    setSelectedIndex(indexVal);
  };

  return (
    <MainContainer>
      <Header />
      <MainNavBar />
      <LayoutWrapper>
        <FileNavigator
          data={gameData}
          selected={selected}
          setSelected={_updateSelected}
        />
        <ContentViewer bioData={gameData[selected]} />
      </LayoutWrapper>
      <Footer />

      <div>
        <button onClick={() => setData(characterData)}>
          update data in state
        </button>
      </div>
      <div>
        <button onClick={() => setData([])}>reset data in state</button>
      </div>
      <div>
        <button onClick={() => saveLocalStorageData(gameData, setData)}>
          update localStorage data
        </button>
      </div>
      <div>
        <a
          href={`data:text/json;charset=utf-8,${encodeURIComponent(
            JSON.stringify(gameData)
          )}`}
          download={"game-data.json"}
        >
          download JSON data
        </a>
      </div>
    </MainContainer>
  );
};

export default Main;

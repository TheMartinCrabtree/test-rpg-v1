import React, {ReactNode, useState} from "react";
import styled from "styled-components";
import Header from '../Header';
import MainNavBar from '../MainNavBar';
import FileNavigator from "../FileNavigator";
import ContentViewer from "../ContentViewer";
import Footer from "../Footer";

const testData = [
    {
        name: "angela",
        bio: "pixie punk"
    },
    {
        name: "camille",
        bio: "fem fatale"
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

const getLocalStorageData = () =>{
        let data = localStorage.getItem('game-data');
        return data ? JSON.parse(data) : [];
}

const saveLocalStorageData =(data, updateCallback)=>{
    localStorage.setItem('game-data', JSON.stringify(data));
    return updateCallback(getLocalStorageData());
}

const Main = (props)=>{
    const [gameData, setData] = useState(getLocalStorageData);
    const [selectedIndex, setSelectedIndex] = useState(undefined);
    // console.log("gameData", gameData);
    // console.log("localStorage data", getLocalStorageData());

    return(
        <MainContainer>
            <Header>Header Component</Header>
            <MainNavBar>MainNavBar Component</MainNavBar>
            <LayoutWrapper>
                <FileNavigator />
                <ContentViewer />

            </LayoutWrapper>
            <Footer />
            {/* <div>
                <button onClick={()=>setData(testData)} >update data in state</button>
            </div>
            <div>
                <button onClick={()=>setData([])} >reset data in state</button>
            </div>
            <div>
                <button onClick={()=>saveLocalStorageData(gameData, setData)} >update localStorage data</button>
            </div>
            <div>
                <a href={`data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(gameData))}`} download={"game-data.json"} >
                    download JSON data
                </a>
            </div> */}
            
            

        </MainContainer>
    )
};

export default Main;

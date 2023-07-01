import React, {ReactNode, useState} from "react";
import styled from "styled-components";

const testData = [
    {name: "angela"},
    {name: "camille"},
];

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
    console.log("gameData", gameData);
    console.log("localStorage data", getLocalStorageData);


    return(
        <div>
            <div>
                <button onClick={()=>setData(testData)} >update data in state</button>
            </div>
            <div>
                <button onClick={()=>setData([])} >reset data in state</button>
            </div>
            <div>
                <button onClick={()=>saveLocalStorageData(gameData, setData)} >update localStorage data</button>
            </div>
            <div>
                <button>set data from localStorage</button>
            </div>
            

        </div>
    )
};

export default Main;

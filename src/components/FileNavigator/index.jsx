import React from "react";
import styled from "styled-components";

const LeftNavContainer = styled.div`
    width: 25vw;
    background-color: darkgray;
    height: auto;
`;

const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const ClickContainer = styled.div`
    padding-top: 2px;
    padding-bottom: 2px;
    margin: 2px;
    width: 100%;
    min-height: 20px;
    background-color: darkblue;
`;


const FileNavigator = (props)=>{
    const {data, spreadIndex}=props;

    const _renderHeadings=()=>{
        data.map((dataObj, index)=>{
            return <ClickContainer key={index}>{dataObj.name}</ClickContainer>
        })
    };

    return(
    <LeftNavContainer>
        File Navigator Component
        <LayoutContainer>
            {data && _renderHeadings()}
        </LayoutContainer>
    </LeftNavContainer>
    );
};

export default FileNavigator;
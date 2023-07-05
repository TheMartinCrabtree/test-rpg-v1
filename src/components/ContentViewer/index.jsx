import React from "react";
import styled from "styled-components";
import InputWindow from "../InputWindow";

const RightContainer = styled.div`
    width: 100%;
    background-color: white;
    padding-left: 5px;
    padding-right: 5px;
    height: auto;
`;

const TextContainer = styled.div`
    background-color: black;
    color: white;
    min-height: 200px;
`;

const EditorContainer = styled.div`
    padding: 5px;
    min-height: 100px;
`;



const ContentViewer=(props)=>{

    return(
    <RightContainer>
        Content Viewer Component
        <TextContainer>text container</TextContainer>
        <EditorContainer>editor container</EditorContainer>
    </RightContainer>);
};

export default ContentViewer;
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

const NameContainer = styled.div`
    background-color: darkgray;
    font-size: large;
`

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
    const {name, bio} = props;
    return(
    <RightContainer>
        <NameContainer>
            {name}
        </NameContainer>
        <TextContainer>{bio}</TextContainer>
        <EditorContainer>
            <InputWindow defaultText={bio} />
        </EditorContainer>
    </RightContainer>);
};

export default ContentViewer;
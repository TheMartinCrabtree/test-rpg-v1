import React from "react";
import styled from "styled-components";

const LeftNavContainer = styled.div`
    min-width: 15em;
    background-color: darkgray;
    height: auto;
    margin: 5px;
`;

const LayoutContainer = styled.div`
    padding-top: 5px;
    padding-right: 5px;
    padding-bottom: 5px;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const HitArea = styled.div`
    border-radius: 3px;
    padding-left: 5px;
    width: 100%;
    min-height: 20px;
`;

const SelectedText = styled.div`
    background-color: blue;
    color: white;
`;

const DefaultText = styled.div`
    background-color: darkblue;
    color: white;
`;
// ${({selected})=>{selected ? 'border-color: yellow; border-width: 1px; border-style: solid;' : '' }}


const FileNavigator = (props)=>{
    const {
        data, 
        selected,
        setSelected
    }=props;

    console.log("FileNav selected", selected);
    

    const _renderHeadings=(data)=>{
        return data.map((dataObj, index)=>{
            const isSelected = selected===index;
            const TextWrapper = isSelected ? SelectedText : DefaultText;
            return( 
            <HitArea 
                key={`file-nav-key-${index}`} 
                id={index}
                onClick={isSelected ? undefined : ()=>setSelected(index)}
            >   
            <TextWrapper>
                    {dataObj && dataObj.name}
            </TextWrapper>
            </HitArea>);
        });
    };

    return(
    <LeftNavContainer>
        File Navigator Component
        <LayoutContainer>
            {data && _renderHeadings(data)}
        </LayoutContainer>
    </LeftNavContainer>
    );
};

export default FileNavigator;
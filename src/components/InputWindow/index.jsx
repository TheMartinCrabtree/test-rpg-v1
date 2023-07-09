import React, {useState, useEffect} from "react";
import styled from "styled-components";


// possible debounce function
// const useDebouncedValue=(value, wait)=> {
//     const [debouncedValue, setDebouncedValue] = useState(value);
  
//     useEffect(() => {
//       const id = setTimeout(() => setDebouncedValue(value), wait);
//       return () => clearTimeout(id);
//     }, [value]);
  
//     return debouncedValue;
// };


const InputWindow=(props)=>{
    const {defaultText} = props;
    const [inputValue, setInputValue] = useState(defaultText ? defaultText : "");
    
    return(
    <div>
        <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
    </div>
    );
};


export default InputWindow;
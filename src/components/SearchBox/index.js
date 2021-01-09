import {useRef, useContext} from 'react';
import {MovieContext} from "../../Movie";
import {StyledSearchBox, StyledSearchInput, StyledSearchButton} from "./SearchBox.style";

export const SearchBox = () => {
    const inputRef = useRef();
    const {setSearchKeyword} = useContext(MovieContext);
    return (
        <StyledSearchBox>
           <StyledSearchInput ref={inputRef} isColored={true}/>
           <StyledSearchButton onClick={()=>setSearchKeyword(inputRef?.current?.value)}>Search</StyledSearchButton> 
        </StyledSearchBox>
    )
}

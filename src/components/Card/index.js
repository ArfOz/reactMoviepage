import { useHistory } from "react-router-dom";
import {StyledCardWrapper, StyledText, StyledMovieImage} from "./Card.style"

export const Card = ({title, imgSrc, id, vote_count}) => {
    const history = useHistory();
    return (
        <StyledCardWrapper onClick={() => history.push(`/detail/${id}`)}>
            <StyledMovieImage src={imgSrc} alt={"ressim yok"}/>
            <StyledText>{title}</StyledText>
            <StyledText>{vote_count}</StyledText>
        </StyledCardWrapper>
    )
}
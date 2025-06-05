import styled from "styled-components";
import {flexCenter, flexColumn} from "../../styles/common";
import theme from "../../styles/theme";

const S = {}

S.ThemeP = styled.p`
    color: ${({theme}) => theme.PALLETE.primary.main};
    font-size : ${({theme}) => theme.FONT_SIZE["h1"]};
`



S.Wrapper = styled.div`
    ${flexCenter};
`

S.Content = styled.div`
    ${flexCenter};
    ${flexColumn};
    width: 400px;
    height: 400px;
    border: solid 1px blue;
    
    /*자가선택자*/
    & button {
        width: 200px;
        height: 50px;
        background-color: green;
    }
    
    .btn {
        color: yellow;
    }
`

S.InputWrapper = styled.div`
    ${flexCenter};
`



S.Tittle = styled.p`
    color : ${(props) => props.color && props.color};
    font-size : ${({fontSize}) => {return fontSize &&fontSize}};
`

S.Button = styled.button`
    width: 200px;
    height: 60px;
    background-color :  ${({bgColor}) => bgColor};
`

S.StyledP = styled.p`
    width: 100px;
    height: 100px;
    border : solid 1px red;
    margin-top: 10px;
`

S.StyledButton = styled.button`
    background-color: red;
    border: none;
`

S.StyledInput = styled.input`
    width: 200px;
    height: 60px;
    border:none;
    background-color: purple;
`

S.StyledStrong =  styled.strong`
    text-decoration: underline;
`

export default S;


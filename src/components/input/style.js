import styled, { ThemeProvider } from "styled-components";
import {spacingProps} from "../../styles/spacingProps";



const S = {}

S.Input = styled.input`
    width: 100%;
    background-color: ${({ theme }) => theme.PALLETE.background.white};
    border: 1px solid ${({ theme }) => theme.PALLETE.text.sub2};
    border-radius: 8px;
    font-size: ${({ theme }) => theme.FONT_SIZE["body3"]};
    line-height: ${({ theme }) => theme.LINE_HEIGHT["body3"]};  
    padding: ${({ theme }) => `${theme.SPACING["20"]} ${theme.SPACING["24"]}`};
    ${spacingProps}

    &:hover {
            border-color: ${({ theme }) => theme.PALLETE.primary.main};
        }

        &::placeholder {
           font-size: ${({ theme }) => theme.FONT_SIZE["body3"]};
            line-height: ${({ theme }) => theme.LINE_HEIGHT["body3"]};
            color: ${({ theme }) => theme.PALLETE.text.disabled.weak};
        }

        &:focus {
            outline: none;
            border-color: ${({ theme }) => theme.PALLETE.primary.main};
            box-shadow: 0 0 0 2px ${({ theme }) => theme.PALLETE.primary.light};
        }
`


export default S;
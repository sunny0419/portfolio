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

        //아무스 호버 상태
        &:hover {
            border-color: ${({ theme }) => theme.PALLETE.primary.main};
        }
        //placeholder 텍스트 색상
        &::placeholder {
            color: ${({ theme }) => theme.PALLETE.text.disabled.weak};
        }

        //입력중일때
        &:focus {
            outline: none;
            border-color: ${({ theme }) => theme.PALLETE.primary.main};
            box-shadow: 0 0 0 2px ${({ theme }) => theme.PALLETE.primary.light};
        }

        //disabled 상태일때
        &:disabled {
            outline: none;
            background-color: ${({ theme }) => theme.PALLETE.background.gray100};
            border: none;
        }

        //입력 다 한 상태
        &:not(:focus):not(:placeholder-shown) {
            border-color: ${({ theme }) => theme.PALLETE.primary.main};
        }
`


export default S;
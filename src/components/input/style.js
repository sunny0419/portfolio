import styled, { ThemeProvider } from "styled-components";
import {spacingProps} from "../../styles/spacingProps";


const S = {}

S.Input = styled.input`
    background-color: ${({ theme }) => theme.PALLETE.background.white};
    border: 1px solid ${({ theme }) => theme.PALLETE.text.sub};
    border-radius: 8px;
    padding: ${({ theme }) => `${theme.PALLETE.SPACING[20]} ${theme.PALLETE.SPACING[24]}`};
    ${spacingProps}
    
    &:hover {
            border-color: ${({ theme }) => theme.PALLETE.text.main};
        }

        &::placeholder {
            color: ${({ theme }) => theme.PALLETE.text.disabled.weak};
        }

        &:focus {
            outline: none;
            border-color: ${({ theme }) => theme.PALLETE.primary.main};
            box-shadow: 0 0 0 2px ${({ theme }) => theme.PALLETE.primary.light};
        }
`

export default S;
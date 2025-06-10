import styled, { css } from "styled-components";


const variantCSS = {
    default : css`
        background-color: ${({theme}) => theme.PALLETE.white};
        color: ${({theme}) => theme.PALLETE.primary["main"]};
        border: 1px solid ${({theme}) => theme.PALLETE.primary["main"]};
    `,
    filled : css`
        background-color: ${({theme}) => theme.PALLETE.primary["main"]};
        color: ${({theme}) => theme.PALLETE.text["white"]};
        border: 1px solid ${({theme}) => theme.PALLETE.primary["main"]};
    `,
    gray : css`
        background-color: ${({theme}) => theme.PALLETE.background["gray200"]};
        color: ${({theme}) => theme.PALLETE.text["primary"]};
        border: 1px solid ${({theme}) => theme.PALLETE.background["gray200"]};
    `,
    disabled : css`
        background-color: ${({theme}) => theme.PALLETE.background["gray200"]};
        color: ${({theme}) => theme.PALLETE.text.disabled["strong"]};
        border: 1px solid ${({theme}) => theme.PALLETE.background["gray200"]};
    `,
};



const basicButtonCSS = {
    superSmall: css`
        padding: ${({ theme }) => `${theme.SPACING["18"]} ${theme.SPACING["36"]}`};
        border-radius: 10px;
        font-size: ${({theme}) => theme.FONT_SIZE["caption2"] };
        font-weight: ${({theme}) => theme.FONT_WEIGHT["semiBold"] };
    `,
    small: css`
        padding: ${({ theme }) => `${theme.SPACING["18"]} ${theme.SPACING["78"]}`};
        border-radius: 10px;
        font-size: ${({theme}) => theme.FONT_SIZE["caption2"] };
        font-weight: ${({theme}) => theme.FONT_WEIGHT["semiBold"] };
    `,
    medium: css`
        padding: ${({ theme }) => `${theme.SPACING["18"]} ${theme.SPACING["148"]}`};
        border-radius: 10px;
        font-size: ${({theme}) => theme.FONT_SIZE["caption2"] };
        font-weight: ${({theme}) => theme.FONT_WEIGHT["semiBold"] };
    `,
    large: css`
        padding: ${({ theme }) => `${theme.SPACING["18"]} ${theme.SPACING["278"]}`};
        border-radius: 10px;
        font-size: ${({theme}) => theme.FONT_SIZE["caption2"] };
        font-weight: ${({theme}) => theme.FONT_WEIGHT["semiBold"] };
    `,
}

const roundButtonCSS = {
    superSmall: css`
        padding: ${({ theme }) => `${theme.SPACING["10"]} ${theme.SPACING["20"]}`};
        border-radius: 52px;
        font-size: ${({theme}) => theme.FONT_SIZE["button4"] };
        font-weight: ${({theme}) => theme.FONT_WEIGHT["semiBold"] };
    `,
    small: css`
        padding: ${({ theme }) => `${theme.SPACING["16"]} ${theme.SPACING["28"]}`};
        border-radius: 52px;
        font-size: ${({theme}) => theme.FONT_SIZE["button3"] };
        font-weight: ${({theme}) => theme.FONT_WEIGHT["semiBold"] };
    `,
    medium: css`
        padding: ${({ theme }) => `${theme.SPACING["20"]} ${theme.SPACING["54"]}`};
        border-radius: 52px;
        font-size: ${({theme}) => theme.FONT_SIZE["button2"] };
        font-weight: ${({theme}) => theme.FONT_WEIGHT["semiBold"] };
    `,
    large: css`
        padding: ${({ theme }) => `${theme.SPACING["28"]} ${theme.SPACING["84"]}`};
        border-radius: 52px;
        font-size: ${({theme}) => theme.FONT_SIZE["button1"] };
        font-weight: ${({theme}) => theme.FONT_WEIGHT["semiBold"] };
    `,
}






const Button = styled.button`
  ${({roundButton}) => roundButtonCSS[roundButton]}
  ${({basicButton}) => basicButtonCSS[basicButton]}
  ${({variant}) => variantCSS[variant]}
  `

export default Button;
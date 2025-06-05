import React from 'react';
import S from './style'
import Styled02 from "./Styled02";
import Styled03 from "./Styled03";


const Styled01 = () => {

    return (
        <S.StyledP>
            스타일드 텀포넌트 !;
            <Styled02/>
            <Styled03/>
        </S.StyledP>
    )
};

export default Styled01;
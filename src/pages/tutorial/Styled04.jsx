import React from 'react';
import S from "./style";

const Styled04 = () => {
    return (
        <div>
            <S.Tittle color={"red"} fontSize={"50px"}>빨간글씨</S.Tittle>
            <S.Tittle color={"blue"}>파란글씨</S.Tittle>
            <S.Tittle color={"yellow"}>노란글씨</S.Tittle>

            <S.Button bgColor={"red"}>버튼</S.Button>
        </div>
    );
};

export default Styled04;
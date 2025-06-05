import React from 'react';
import S from "./style";

const Styled05 = () => {
    return (
        <S.Wrapper >
            <S.Content >
                <S.InputWrapper >
                    <p>이름</p>
                    <input name='name' type='text'  placeholder='이름을 입력하세요' />
                </S.InputWrapper >
                <S.InputWrapper >
                    <p>나이</p>
                    <input name='age' type='text' placeholder='나이를 입력하세요' />
                </S.InputWrapper >
                <br/>
                <button className={"btn"}>전송버튼</button>
                <p>abcdefg</p>
            </S.Content >
        </S.Wrapper >
    );
};

export default Styled05;
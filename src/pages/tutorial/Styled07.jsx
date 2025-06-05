import React from 'react';
import BasicButton from "../../components/button/BasicButton";

const Styled07 = () => {

    const onClickToConsole = () => {
        console.log("출력");
    }

    return (
        <div>
            <BasicButton onClick={onClickToConsole} color={"primary"} font={"h3"} border={"primary"}>
                컴포넌트화된 버튼
            </BasicButton>
        </div>
    );
};

export default Styled07;
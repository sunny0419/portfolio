import React from 'react';
import Section from "../../components/layout/Section";
import BasicButton from "../../components/button/BasicButton";

const Main = () => {
    return (
        <Section>
                안녕허ㅏ세요!!
            <BasicButton basicButton="small"  variant="disabled">텍스트</BasicButton>
        </Section>
    );
};

export default Main;
import React from 'react';
import Wrapper from "../../components/layout/Wrapper";
import BasicButton from "../../components/button/BasicButton";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Icon from "../../components/icons/Icon";
import Text from "../../components/text/size";
import BasicInput from "../../components/input/BasicInput";



const Main = () => {
    return (
        <Wrapper>
            <Text.H1 fontWeight={600} mt="100" p={100} color={"blue"}>안녕하세요!!</Text.H1>
            <Text.Caption2 mt="50" fontWeight={900} color={"orange"}>헬로</Text.Caption2>

            <BasicButton roundButton="large" variant="default" mb="20">
                텍스트
                <Icon icon={faCheck} ml="10" fontSize="10" />
            </BasicButton>
            <Text.Body2 color={"red"}>정지우입니다</Text.Body2>
            <BasicInput type="text" placeholder="이름을 입력하세요"/>

        </Wrapper>
    );
};

export default Main;
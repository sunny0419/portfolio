import React from 'react';
import Input from './style'; // styled.input 정의된 파일

const BasicInput = ({ status = 'default', ...rest }) => {
    return <Input status={status} {...rest} />;
};

export default BasicInput;
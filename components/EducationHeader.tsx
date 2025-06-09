import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';

const HeaderContainer = styled.View`
  background: #fff;
  padding-top: 16px;
  padding-bottom: 12px;
  padding-left: 20px;
  border-bottom-width: 0px;
  /* 그림자 효과 */
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.06;
  shadow-radius: 4px;
  elevation: 2;
`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #111;
`;

const EducationHeader = () => (
  <HeaderContainer>
    <Title>교육</Title>
  </HeaderContainer>
);

export default EducationHeader;

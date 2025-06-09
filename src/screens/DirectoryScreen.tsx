import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

const DirectoryScreen = () => {
  return (
    <Container>
      <Title>참여자 디렉토리</Title>
    </Container>
  );
};

export default DirectoryScreen;

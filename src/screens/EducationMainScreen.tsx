import React, {useLayoutEffect} from 'react';
import {SafeAreaView} from 'react-native';
import Card from '../../components/molecules/Card';
import SectionTitle from '../../components/atoms/SectionTitle';
import Row from '../../components/atoms/Row';
import Container from '../../components/atoms/Container';
import PrimaryButton from '../../components/atoms/PrimaryButton';
import styled from 'styled-components/native';
import AppbarHeader from '../../components/molecules/AppbarHeader';

const todaySeminar = {
  date: '2024-12-03',
  title: 'J&J Seminar - Harmonic(초음파 절삭기)',
  agenda: '교육자료 다운받기',
};

const upcomingSeminars = [
  {
    date: '2024-12-10',
    title: 'J&J Seminar - Digital Solutions (1)',
  },
  {
    date: '2024-12-17',
    title: 'J&J Seminar - Digital Solutions (2)',
  },
];

const EducationMainScreen = ({navigation, headerTitle}: any) => {
  useLayoutEffect(() => {
    if (headerTitle) {
      navigation.setOptions({headerTitle});
    }
  }, [navigation, headerTitle]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <AppbarHeader title="교육" type="left" />
      <Container>
        <SectionTitle>Today's Seminar</SectionTitle>
        <Card>
          <DateText>{todaySeminar.date} (Tue)</DateText>
          <SeminarTitle>{todaySeminar.title}</SeminarTitle>
          <Row>
            <DownloadText>{todaySeminar.agenda}</DownloadText>
            <AgendaButton>
              <AgendaButtonText>Agenda {'>'}</AgendaButtonText>
            </AgendaButton>
          </Row>
        </Card>

        <SectionTitle>Upcoming</SectionTitle>
        {upcomingSeminars.map((seminar, idx) => (
          <Card key={idx}>
            <DateText>{seminar.date} (Tue)</DateText>
            <SeminarTitle>{seminar.title}</SeminarTitle>
          </Card>
        ))}

        <PrimaryButton
          title="E-Learning 바로가기 >"
          onPress={() => navigation.navigate('ElearningDetail')}
        />
      </Container>
    </SafeAreaView>
  );
};

const DateText = styled.Text`
  color: #b71c1c;
  font-size: 13px;
  margin-bottom: 4px;
`;

const SeminarTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const DownloadText = styled.Text`
  color: #b71c1c;
  font-size: 14px;
`;

const AgendaButton = styled.TouchableOpacity`
  padding: 4px 8px;
`;

const AgendaButtonText = styled.Text`
  color: #b71c1c;
  font-size: 14px;
`;

export default EducationMainScreen;

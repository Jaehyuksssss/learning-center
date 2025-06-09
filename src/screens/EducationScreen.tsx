import React, {useLayoutEffect} from 'react';
import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native';

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

const EducationScreen = ({navigation, headerTitle}: any) => {
  useLayoutEffect(() => {
    if (headerTitle) {
      navigation.setOptions({headerTitle});
    }
  }, [navigation, headerTitle]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Container>
        <ContentScroll>
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
        </ContentScroll>
        <ELearningButton>
          <ELearningButtonText>E-Learning 바로가기 {'>'}</ELearningButtonText>
        </ELearningButton>
      </Container>
    </SafeAreaView>
  );
};

const Container = styled.View`
  flex: 1;
  background: #fff;
`;

const ContentScroll = styled.ScrollView`
  flex: 1;
  background: #fff;
  padding-bottom: 100px;
`;

const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin: 24px 0 12px 20px;
`;

const Card = styled.View`
  background: #fff;
  border-radius: 12px;
  margin: 0 16px 12px 16px;
  padding: 16px 16px 12px 16px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.04);
  elevation: 1;
`;

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

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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

const ELearningButton = styled.TouchableOpacity`
  background: #b71c1c;
  border-radius: 8px;
  margin: 0 16px 24px 16px;
  padding: 16px 0;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;

const ELearningButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export default EducationScreen;

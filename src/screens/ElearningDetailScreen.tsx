import React, {useLayoutEffect, useState} from 'react';
import styled from 'styled-components/native';
import {SafeAreaView, ScrollView, View} from 'react-native';

const pastSessions = [
  {
    id: 1,
    title: 'Echelon Circular(전동식 원형 자동 문합기)',
    date: '2024-12-25 23:59',
    attended: true,
    canReplay: true,
  },
  {
    id: 2,
    title: 'Digital Solutions (2)',
    date: '2024-12-25 23:59',
    attended: true,
    canReplay: true,
  },
  {
    id: 3,
    title: 'Digital Solutions (1)',
    date: '2024-12-25 23:59',
    attended: true,
    canReplay: true,
  },
];

const upcomingSessions = [
  {
    id: 4,
    title: 'Harmonic(초음파 절삭기)',
    date: '2024-12-25 23:59',
    canDownload: true,
  },
];

const ElearningDetailScreen = ({navigation, headerTitle}: any) => {
  useLayoutEffect(() => {
    navigation.setOptions({headerTitle: 'E-Learning'});
  }, [navigation]);

  const [tab, setTab] = useState<'past' | 'upcoming'>('past');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Container>
        <TabRow>
          <TabButton active={tab === 'past'} onPress={() => setTab('past')}>
            <TabText active={tab === 'past'}>지난 세션</TabText>
          </TabButton>
          <TabButton
            active={tab === 'upcoming'}
            onPress={() => setTab('upcoming')}>
            <TabText active={tab === 'upcoming'}>예정된 세션</TabText>
          </TabButton>
        </TabRow>
        <TabUnderline tab={tab} />
        <ContentScroll>
          {tab === 'past' ? (
            <>
              <SectionTitle>세션 다시 보기</SectionTitle>
              {pastSessions.map(session => (
                <SessionCard key={session.id}>
                  <Row>
                    <Badge>출석</Badge>
                    <SessionDate>기간 {session.date}</SessionDate>
                  </Row>
                  <SessionTitle>{session.title}</SessionTitle>
                  <Row style={{justifyContent: 'space-between', marginTop: 8}}>
                    <View />
                    <ReplayButton>
                      <ReplayButtonText>다시 보기</ReplayButtonText>
                    </ReplayButton>
                  </Row>
                </SessionCard>
              ))}
            </>
          ) : (
            <>
              <SectionTitle>교육자료 미리보기</SectionTitle>
              {upcomingSessions.map(session => (
                <SessionCard key={session.id}>
                  <Row>
                    <UpcomingBadge>예정</UpcomingBadge>
                    <SessionDate>기간 {session.date}</SessionDate>
                  </Row>
                  <SessionTitle>{session.title}</SessionTitle>
                  <Row style={{justifyContent: 'space-between', marginTop: 8}}>
                    <View />
                    <DownloadButton>
                      <DownloadButtonText>다운로드</DownloadButtonText>
                    </DownloadButton>
                  </Row>
                </SessionCard>
              ))}
            </>
          )}
        </ContentScroll>
      </Container>
    </SafeAreaView>
  );
};

// styled-components 정의는 기존 EducationScreen과 동일하게 복사
const Container = styled.View`
  flex: 1;
  background: #fff;
`;

const TabRow = styled.View`
  flex-direction: row;
  background: #fff;
  margin-top: 8px;
`;

const TabButton = styled.TouchableOpacity<{active: boolean}>`
  flex: 1;
  align-items: center;
  padding: 12px 0 8px 0;
`;

const TabText = styled.Text<{active: boolean}>`
  font-size: 16px;
  font-weight: bold;
  color: ${({active}) => (active ? '#111' : '#bbb')};
`;

const TabUnderline = styled.View<{tab: 'past' | 'upcoming'}>`
  height: 2px;
  background: #b71c1c;
  width: 50%;
  position: absolute;
  left: ${({tab}) => (tab === 'past' ? '0%' : '50%')};
  top: 48px;
`;

const ContentScroll = styled.ScrollView`
  flex: 1;
  background: #fff;
  padding: 0 0 24px 0;
`;

const SectionTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin: 24px 0 12px 20px;
`;

const SessionCard = styled.View`
  background: #fff;
  border-radius: 12px;
  margin: 0 16px 16px 16px;
  padding: 16px 16px 12px 16px;
  border-width: 1px;
  border-color: #eee;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Badge = styled.Text`
  background: #ffebee;
  color: #b71c1c;
  font-size: 13px;
  font-weight: bold;
  border-radius: 4px;
  padding: 2px 10px;
  margin-right: 8px;
`;

const UpcomingBadge = styled.Text`
  background: #fff8e1;
  color: #b71c1c;
  font-size: 13px;
  font-weight: bold;
  border-radius: 4px;
  padding: 2px 10px;
  margin-right: 8px;
`;

const SessionDate = styled.Text`
  color: #bbb;
  font-size: 13px;
`;

const SessionTitle = styled.Text`
  font-size: 17px;
  font-weight: bold;
  margin: 8px 0 0 0;
`;

const ReplayButton = styled.TouchableOpacity`
  background: #b71c1c;
  border-radius: 12px;
  padding: 4px 16px;
`;

const ReplayButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

const DownloadButton = styled.TouchableOpacity`
  background: #b71c1c;
  border-radius: 12px;
  padding: 4px 16px;
`;

const DownloadButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

export default ElearningDetailScreen;

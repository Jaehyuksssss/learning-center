import React, {useLayoutEffect} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import styled from 'styled-components/native';
import Container from '../../components/atoms/Container';
import SectionTitle from '../../components/atoms/SectionTitle';
import AgendaCard from '../../components/molecules/AgendaCard';
import LoungeCard from '../../components/molecules/LoungeCard';
import AppbarHeader from '../../components/molecules/AppbarHeader';

const agendas = [
  {
    id: 'a1',
    badge: 'Check-in',
    title: '안내 데스크에 있는 QR 코드를 찍어 주세요.',
    qr: true,
    desc: 'Cafeteria에 식사가 준비되어 있습니다.',
    qrLabel: 'QR 촬영하기',
  },
  {
    id: 'a2',
    badge: 'Education',
    title: 'J&J Seminar\n• Harmonic(초음파 절삭기)',
    time: '18:00 ~ 19:00',
    place: '12E, 12F',
    button: '교육 자료 다운받기',
  },
];

const HomeScreen = ({navigation, headerTitle}: any) => {
  useLayoutEffect(() => {
    if (headerTitle) {
      navigation.setOptions({headerTitle});
    }
  }, [navigation, headerTitle]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f9f9f9'}}>
      <AppbarHeader title="J&J" type="left" />
      <ScrollView contentContainerStyle={{paddingTop: 10, paddingBottom: 32}}>
        <Container style={{paddingHorizontal: 0}}>
          <DateText>2024년 12월 3일 (화)</DateText>
          <WelcomeBox>
            <WelcomeText>
              안녕하세요 <Highlight>홍길동</Highlight> 선생님,{'\n'}
              <Highlight>Busan Learning Studio</Highlight> 방문을 환영합니다.
            </WelcomeText>
          </WelcomeBox>

          <SectionTitle>Today's Seminar</SectionTitle>
          <SeminarCard>
            <SeminarDate>2024-12-03 (Tue)</SeminarDate>
            <SeminarTitle>J&J Seminar - Harmonic(초음파 절삭기)</SeminarTitle>
          </SeminarCard>

          <SectionRow>
            <SectionTitle style={{marginBottom: 0}}>Agenda</SectionTitle>
            <DetailLink onPress={() => navigation.navigate('education')}>
              상세보기 &gt;
            </DetailLink>
          </SectionRow>
          <AgendaScroll
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              gap: 12,
              paddingLeft: 20,
              paddingRight: 20,
            }}>
            {agendas.map(agenda => (
              <AgendaCard key={agenda.id} {...agenda} />
            ))}
          </AgendaScroll>

          <SectionTitle
            style={{marginTop: 32, marginLeft: 20, marginBottom: 12}}>
            Lounge <LoungeEmoji>☕️</LoungeEmoji>
          </SectionTitle>
          <LoungeCard
            bg="#174b7a"
            icon={
              <View
                style={{
                  width: 32,
                  height: 32,
                  backgroundColor: '#fff',
                  borderRadius: 16,
                }}
              />
            }
            title="주차권 발급"
            text="주차하셨나요? 잊지말고 주차권 발급 받으세요!"
            highlight="주차권 발급"
            arrowColor="#fff"
          />
          <LoungeCard
            bg="#fff8e1"
            border
            icon={
              <View
                style={{
                  width: 32,
                  height: 32,
                  backgroundColor: '#fff',
                  borderRadius: 16,
                }}
              />
            }
            title="E-learning Session"
            titleColor="#b71c1c"
            text="ECHELON CIRCULAR 세미나를 다시 들어 보세요."
            highlight="ECHELON CIRCULAR"
            highlightColor="#b71c1c"
            arrowColor="#b71c1c"
          />
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const DateText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 8px;
  padding: 0 20px;
`;
const WelcomeBox = styled.View`
  background: #b71c1c;
  padding: 16px;
  margin-bottom: 16px;
`;
const WelcomeText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;
const Highlight = styled.Text`
  font-weight: bold;
  color: #fffbe0;
`;
const SeminarCard = styled.View`
  background: #fff;
  border-radius: 12px;
  margin: 0 0 16px 0;
  padding: 16px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.04);
  elevation: 1;
`;
const SeminarDate = styled.Text`
  color: #b71c1c;
  font-size: 13px;
  margin-bottom: 4px;
`;
const SeminarTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
const SectionRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 24px 20px 8px 20px;
`;
const DetailLink = styled.Text`
  color: #b71c1c;
  font-size: 14px;
  font-weight: bold;
`;
const AgendaScroll = styled(ScrollView)`
  margin-bottom: 16px;
`;
const LoungeEmoji = styled.Text`
  font-size: 18px;
`;

import React from 'react';
import styled from 'styled-components/native';

type Props = {
  badge: string;
  title: string;
  qr?: boolean;
  desc?: string;
  qrLabel?: string;
  time?: string;
  place?: string;
  button?: string;
  children?: React.ReactNode;
};

const AgendaCard: React.FC<Props> = ({
  badge,
  title,
  qr,
  desc,
  qrLabel,
  time,
  place,
  button,
  children,
}) => (
  <Card>
    <Badge style={qr ? {} : {backgroundColor: '#ffe0e0', color: '#b71c1c'}}>
      {badge}
    </Badge>
    <TitleText>{title}</TitleText>
    {qr ? (
      <>
        <QRBox>
          <QRIcon />
          <QRLabel>{qrLabel}</QRLabel>
        </QRBox>
        <Divider />
        <DescText>{desc}</DescText>
      </>
    ) : (
      <>
        <InfoRow>
          <InfoIcon>🕒</InfoIcon>
          <InfoText>{time}</InfoText>
        </InfoRow>
        <InfoRow>
          <InfoIcon>📍</InfoIcon>
          <InfoText>{place}</InfoText>
        </InfoRow>
        <ButtonText>{button}</ButtonText>
      </>
    )}
    {children}
  </Card>
);

export default AgendaCard;

const Card = styled.View`
  width: 260px;
  background: #fff;
  border-radius: 12px;
  padding: 20px 16px 16px 16px;
  border: 1px solid #f2f2f2;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.04);
  elevation: 1;
`;
const Badge = styled.Text`
  background: #ffe0e0;
  color: #b71c1c;
  font-size: 13px;
  font-weight: bold;
  border-radius: 4px;
  padding: 2px 10px;
  margin-bottom: 10px;
  align-self: flex-start;
`;
const TitleText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #222;
`;
const QRBox = styled.View`
  align-items: center;
  margin-bottom: 12px;
`;
const QRIcon = styled.View`
  width: 48px;
  height: 48px;
  background: #fff;
  border-radius: 8px;
  border-width: 2px;
  border-color: #e57373;
  margin-bottom: 4px;
`;
const QRLabel = styled.Text`
  color: #b71c1c;
  font-size: 13px;
  font-weight: 500;
`;
const Divider = styled.View`
  height: 1px;
  background: #eee;
  margin: 8px 0;
`;
const DescText = styled.Text`
  color: #888;
  font-size: 13px;
`;
const InfoRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 2px;
`;
const InfoIcon = styled.Text`
  font-size: 14px;
  margin-right: 4px;
`;
const InfoText = styled.Text`
  font-size: 13px;
  color: #888;
`;
const ButtonText = styled.Text`
  color: #b71c1c;
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
  align-self: flex-start;
  background: #f9f9f9;
  padding: 4px 10px;
  border-radius: 6px;
`;

import React, {useLayoutEffect} from 'react';
import CenteredScreen from '../../components/atoms/CenteredScreen';
import SectionTitle from '../../components/atoms/SectionTitle';

const LoungeScreen = ({navigation, headerTitle}: any) => {
  useLayoutEffect(() => {
    if (headerTitle) {
      navigation.setOptions({headerTitle});
    }
  }, [navigation, headerTitle]);

  return (
    <CenteredScreen>
      <SectionTitle>라운지</SectionTitle>
    </CenteredScreen>
  );
};

export default LoungeScreen;

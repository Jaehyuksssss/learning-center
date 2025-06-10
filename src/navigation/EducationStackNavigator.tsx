import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EducationMainScreen from '../screens/EducationMainScreen';
import ElearningDetailScreen from '../screens/ElearningDetailScreen';

const Stack = createNativeStackNavigator();

const EducationStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="EducationMain"
      component={EducationMainScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="ElearningDetail"
      component={ElearningDetailScreen}
      options={{title: 'E-Learning'}}
    />
  </Stack.Navigator>
);

export default EducationStackNavigator;

import React from 'react';
import {Image, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import EducationScreen from '../screens/EducationScreen';
import LoungeScreen from '../screens/LoungeScreen';
import DirectoryScreen from '../screens/DirectoryScreen';
import AccountScreen from '../screens/AccountScreen';
import BottomTabBar from '../../components/BottomTabBar';
import HomeIcon from '../assets/images/icon_home.svg';
import EducationIcon from '../assets/images/icon_education.svg';
import LoungeIcon from '../assets/images/icon_lounge.svg';
import DirectoryIcon from '../assets/images/icon_directory.svg';
import AccountIcon from '../assets/images/icon_account.svg';

const Tab = createBottomTabNavigator();

const TABS = [
  {
    key: 'home',
    label: '홈',
    icon: HomeIcon,
    component: HomeScreen,
    headerTitle: 'J&J',
  },
  {
    key: 'education',
    label: '교육',
    icon: EducationIcon,
    component: EducationScreen,
    headerTitle: 'E-Learning',
  },
  {
    key: 'lounge',
    label: '라운지',
    icon: LoungeIcon,
    component: LoungeScreen,
    headerTitle: '라운지',
  },
  {
    key: 'directory',
    label: '참여자 디렉토리',
    icon: DirectoryIcon,
    component: DirectoryScreen,
    headerTitle: '참여자 디렉토리',
  },
  {
    key: 'account',
    label: '내 계정',
    icon: AccountIcon,
    component: AccountScreen,
    headerTitle: '내 계정',
  },
];

const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({route}) => {
        const tab = TABS.find(t => t.key === route.name);
        return {
          tabBarIcon: ({focused, color, size}) => {
            const IconComponent = tab?.icon;
            return IconComponent ? (
              <IconComponent width={size} height={size} color={color} />
            ) : null;
          },
          tabBarLabel: tab?.label,
          headerTitleAlign: 'center',
        };
      }}
      tabBar={props => <BottomTabBar {...props} />}>
      {TABS.map(tab => (
        <Tab.Screen
          key={tab.key}
          name={tab.key}
          options={{
            tabBarIcon: ({focused, color, size}) => {
              const IconComponent = tab?.icon;
              return IconComponent ? (
                <IconComponent width={size} height={size} color={color} />
              ) : null;
            },
            tabBarIconStyle: {
              width: 24,
              height: 24,
            },
            tabBarLabel: tab.label,
          }}>
          {props => <tab.component {...props} headerTitle={tab.headerTitle} />}
        </Tab.Screen>
      ))}
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigator;

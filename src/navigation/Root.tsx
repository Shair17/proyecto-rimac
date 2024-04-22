import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HeaderRightContent} from '@rimac/components/molecules/HeaderRightContent';
import {HeaderLeftContent} from '@rimac/components/molecules/HeaderLeftContent';
import {SummaryScreen} from '../screens/SummaryScreen';
import {HomeScreen} from '../screens/HomeScreen';
import {PlansScreen} from '../screens/PlansScreen';
import {APP_COLORS} from '@rimac/theme/colors';
import {type RootStackParamsList} from './types';

const RootStack = createNativeStackNavigator<RootStackParamsList>();

export const Root: React.FC = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: APP_COLORS.BACKGROUND_COLOR},
        headerShadowVisible: false,
      }}>
      <RootStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Inicio',
          headerTransparent: true,
          headerTitle() {
            return <HeaderLeftContent />;
          },
          headerRight() {
            return <HeaderRightContent />;
          },
        }}
      />
      <RootStack.Screen
        name="PlansScreen"
        component={PlansScreen}
        options={{
          title: 'Planes',
          headerTransparent: false,
          headerStyle: {
            backgroundColor: APP_COLORS.BACKGROUND_COLOR_SECONDARY,
          },
          headerTitle() {
            return <HeaderLeftContent />;
          },
          headerRight() {
            return <HeaderRightContent />;
          },
        }}
      />
      <RootStack.Screen
        name="SummaryScreen"
        component={SummaryScreen}
        options={{
          title: 'Resumen',
          headerTransparent: false,
          headerStyle: {
            backgroundColor: APP_COLORS.BACKGROUND_COLOR_SECONDARY,
          },
          headerTitle() {
            return <HeaderLeftContent />;
          },
          headerRight() {
            return <HeaderRightContent />;
          },
        }}
      />
    </RootStack.Navigator>
  );
};

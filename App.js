import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import AppText from './app/components/AppText/AppText';

export default function App() {
  return (
    <View 
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <AppText>I love react native</AppText>
    </View>
    );
}

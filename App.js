import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartScreen from './screens/StartScreen';
import MainApp from './screens/Main';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          //로그인 성공 후 화면
          <Stack.Screen name="MainApp" component={MainApp} options={{headerShown:false}}/>
        ) : (
          //로그인 화면
          <Stack.Screen name="Start" component={StartScreen} options={{headerShown:false}}/>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';

import FoodRegFoodList from './FoodRegFoodList';
import FoodRegFoodListDetail from './FoodRegFoodListDetail';
import FoodRegInputFood from './FoodRegInputFood';
import FoodRegInputNutrition from './FoodRegInputNutrition';
import FoodRegInputQuantity from './FoodRegInputQuantity';
import Graph from './Graph';
import Mypage from './Mypage';
import SmallScreen from './SmallScreen';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="FoodRegInputFood" component={FoodRegInputFood} options={{title: '브랜드 & 음식 입력'}} />
      <HomeStack.Screen name="FoodRegInputQuantity" component={FoodRegInputQuantity} options={{title: '단위 & 내용량 입력'}} />
      <HomeStack.Screen name="FoodRegInputNutrition" component={FoodRegInputNutrition} options={{title: '영양 정보 입력'}} />
      <HomeStack.Screen name="FoodRegFoodList" component={FoodRegFoodList} options={{title: '음식 등록'}} />
      <HomeStack.Screen name="FoodRegFoodListDetail" component={FoodRegFoodListDetail} options={{title: '상세 영양 정보'}} />
    </HomeStack.Navigator>
  )
}

export default function MainApp() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: { height: 75 },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          color = 'black';

          if (route.name === 'Home') {
            iconName = focused ? 'home-sharp' : 'home-outline';
          } else if (route.name === 'Calendar') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Ranking') {
            iconName = focused ? 'trophy' : 'trophy-outline';
          } else if (route.name === 'Mypage') {
            iconName = focused ? 'ios-person-circle' : 'ios-person-outline';
          }

          return <Ionic name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} options={{tabBarLabel : '홈'}}/>
      <Tab.Screen name="Calendar" component={Graph} options={{tabBarLabel : '달력'}}/>
      <Tab.Screen name="Ranking" component={SmallScreen} options={{tabBarLabel : '랭킹'}}/>
      <Tab.Screen name="Mypage" component={Mypage} options={{tabBarLabel : '마이'}}/>
    </Tab.Navigator>
  );
}

// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import FoodRegInputFood from './screens/FoodRegInputFood';
// import FoodRegInputQuantity from './screens/FoodRegInputQuantity';
// import FoodRegInputNutrition from './screens/FoodRegInputNutrition';
// import FoodRegFoodList from './screens/FoodRegFoodList';
// import FoodRegFoodListDetail from './screens/FoodRegFoodListDetail';
// import NutritionScreen from './screens/trash/NutritionScreen';
// import DetailScreen from './screens/trash/NutritionScreen';
// import AddFoodScreen from './screens/trash/NutritionScreen';
// import SmallScreen from './screens/SmallScreen';
// import AddMealInfo from './screens/trash/AddMealInfo';
// import { createBottomTabNavigator, useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
// import Home from './screens/trash/Home';
// import Calendar from './screens/Calendar';
// import Ranking from './screens/Ranking';
// import Mypage from './screens/Mypage';
// import { TabBar } from 'react-native-tab-view';
// import Ionic from 'react-native-vector-icons/Ionicons';
// import StartScreen from './screens/StartScreen';

// const Tab = createBottomTabNavigator();
// const HomeStack = createNativeStackNavigator();
// const CalendarStack = createNativeStackNavigator();
// const RankingStack = createNativeStackNavigator();
// const MypageStack = createNativeStackNavigator();

// const HomeStackScreen = () =>{
//   return(
//     <HomeStack.Navigator>
//       {/* <Stack.Screen name="SmallScreen"component={SmallScreen} />
//         <Stack.Screen name="AddMealInfo"component={AddMealInfo} /> */}
//         <HomeStack.Screen name="FoodRegInputFood" component={FoodRegInputFood} options={{title: '브랜드 & 음식 입력'}} />
//         <HomeStack.Screen name="FoodRegInputQuantity" component={FoodRegInputQuantity} options={{title: '단위 & 내용량 입력'}} />
//         <HomeStack.Screen name="FoodRegInputNutrition" component={FoodRegInputNutrition} options={{title: '영양 정보 입력'}} />
//         <HomeStack.Screen name="FoodRegFoodList" component={FoodRegFoodList} options={{title: '음식 등록'}} />
//         <HomeStack.Screen name="FoodRegFoodListDetail" component={FoodRegFoodListDetail} options={{title: '상세 영양 정보'}} />
//     </HomeStack.Navigator>
//   )
// }


// // const CalendarStackScreen = () =>{
// //   return(
    
// //   )
// // }

// // const RankingStackScreen = () =>{
// //   return(
    
// //   )
// // }

// // const MypageStackScreen = () =>{
// //   return(
    
// //   )
// // }

// export default function App() {

//     return(
//       <NavigationContainer>
//         <Tab.Navigator
//         screenOptions={({ route }) => ({
//           headerShown: false,
//           tabBarHideOnKeyboard: true,
//           tabBarStyle: {
//             height: 75,
//           },
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;
//             color = 'black';
//             if (route.name === 'Home') {
//               iconName = focused ? 'home-sharp' : 'home-outline';
//             } else if (route.name === 'Calendar') {
//               iconName = focused ? 'calendar' : 'calendar-outline';
//             } else if (route.name === 'Ranking') {
//               iconName = focused ? 'trophy' : 'trophy-outline';
//             } else if (route.name === 'Mypage') {
//               iconName = focused ? 'ios-person-circle' : 'ios-person-outline';
//             }
    
//             return <Ionic name={iconName} size={size} color={color} />;
//           },
//         })}
//       >
          
//           <Tab.Screen name="Home" component={HomeStackScreen} options={{tabBarLabel : '홈'}}/>
//           <Tab.Screen name="Calendar" component={StartScreen} options={{tabBarLabel : '달력'}}/>
//           {/* <Tab.Screen name="Ranking" component={Ranking} options={{tabBarLabel : '랭킹'}}/> */}
//           <Tab.Screen name="Ranking" component={SmallScreen} options={{tabBarLabel : '랭킹'}}/>
//           <Tab.Screen name="Mypage" component={Mypage} options={{tabBarLabel : '마이'}}/>
//         </Tab.Navigator>
//       </NavigationContainer>

//     )
//   }





//   // export default function App() {
//   //   const Stack = createNativeStackNavigator();
//   //   const Tab = createBottomTabNavigator();
//   //   const BottomTabScreen = () =>{
//   //     //홈 달력 랭킹 마이
  
//   //     return(
//   //       <Tab.Navigator
//   //       screenOptions={({ route }) => ({
//   //         headerShown: false,
//   //         tabBarHideOnKeyboard: true,
//   //         tabBarStyle: {
//   //           height: 70,
//   //         },
//   //         tabBarIcon: ({ focused, color, size }) => {
//   //           let iconName;
//   //           color = 'black';
//   //           if (route.name === 'Home') {
//   //             iconName = focused ? 'home-sharp' : 'home-outline';
//   //           } else if (route.name === 'Callender') {
//   //             iconName = focused ? 'calendar' : 'calendar-outline';
//   //           } else if (route.name === 'Ranking') {
//   //             iconName = focused ? 'trophy' : 'trophy-outline';
//   //           } else if (route.name === 'Mypage') {
//   //             iconName = focused ? 'ios-person-circle' : 'ios-person-outline';
//   //           }
    
//   //           // You can return any component that you like here!
//   //           return <Ionic name={iconName} size={size} color={color} />;
//   //         },
//   //       })}
//   //     >
          
//   //         <Tab.Screen name="Home" component={Home} options={{tabBarLabel : '홈'}}/>
//   //         <Tab.Screen name="Calendar" component={Calendar} options={{tabBarLabel : '달력'}}/>
//   //         <Tab.Screen name="Ranking" component={Ranking} options={{tabBarLabel : '랭킹'}}/>
//   //         <Tab.Screen name="Mypage" component={Mypage} options={{tabBarLabel : '마이'}}/>
//   //       </Tab.Navigator>
//   //     )
//   //   }
  
//   //   return (
//   //     <NavigationContainer>
//   //       {/* <Stack.Navigator initialRouteName="FoodRegInputFood"> */}
//   //       <Stack.Navigator screenListeners={{ headerShown : false }}>
//   //         <Stack.Screen name="Bottom" component={BottomTabScreen}/>
//   //         {/* <Stack.Screen name="SmallScreen"component={SmallScreen} />
//   //         <Stack.Screen name="AddMealInfo"component={AddMealInfo} /> */}
          
//   //         <Stack.Screen name="FoodRegInputFood" component={FoodRegInputFood} options={{title: '브랜드 & 음식 입력'}} />
//   //         <Stack.Screen name="FoodRegInputQuantity" component={FoodRegInputQuantity} options={{title: '단위 & 내용량 입력'}} />
//   //         <Stack.Screen name="FoodRegInputNutrition" component={FoodRegInputNutrition} options={{title: '영양 정보 입력'}} />
//   //         <Stack.Screen name="FoodRegFoodList" component={FoodRegFoodList} options={{title: '음식 등록'}} />
//   //         <Stack.Screen name="FoodRegFoodListDetail" component={FoodRegFoodListDetail} options={{title: '상세 영양 정보'}} />
//   //       </Stack.Navigator>
//   //     </NavigationContainer>
//   //   );
//   // }
  










  
// // import * as React from 'react';
// // import { View, StyleSheet, Text } from 'react-native';
// // import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

// // const MorningScreen = () => (
// //   <View style={[styles.scene, { backgroundColor: '#f1c40f' }]}>
// //     <Text>아침</Text>
// //   </View>
// // );

// // const AfternoonScreen = () => (
// //   <View style={[styles.scene, { backgroundColor: '#9b59b6' }]}>
// //     <Text>점심</Text>
// //   </View>
// // );

// // const EveningScreen = () => (
// //   <View style={[styles.scene, { backgroundColor: '#34495e' }]}>
// //     <Text>저녁</Text>
// //   </View>
// // );

// // const renderScene = SceneMap({
// //   morning: MorningScreen,
// //   afternoon: AfternoonScreen,
// //   evening: EveningScreen,
// // });

// // export default function App() {
// //   const [index, setIndex] = React.useState(0);
// //   const [routes] = React.useState([
// //     { key: 'morning', title: '아침' },
// //     { key: 'afternoon', title: '점심' },
// //     { key: 'evening', title: '저녁' },
// //   ]);

// //   return (
// //     <View style={styles.container}>
// //       <TabView
// //         style={styles.tabView}
// //         navigationState={{ index, routes }}
// //         renderScene={renderScene}
// //         onIndexChange={setIndex}
// //         initialLayout={{ width: 100 }}
// //         renderTabBar={props => (
// //           <TabBar
// //             {...props}
// //             style={{ backgroundColor: '#fff', borderTopWidth: 1 }}
// //           />
// //         )}
// //       />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //   },
// //   tabView: {
// //     flex: 1,
// //     margin: 100,
// //   },
// //   scene: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// // });


// // import React from 'react';
// // import { View, Text, StyleSheet, Dimensions } from 'react-native';
// // import PagerView from 'react-native-pager-view';

// // const windowWidth = Dimensions.get('window').width;
// // const windowHeight = Dimensions.get('window').height;

// // function App() {
// //   return (
// //     <View style={styles.container}>
// //       <PagerView style={styles.pagerView} initialPage={0} showPageIndicator={true}>
// //         <View key="1" style={styles.page}>
// //           <Text style={styles.text}>첫 번째 화면</Text>
// //         </View>
// //         <View key="2" style={styles.page}>
// //           <Text style={styles.text}>두 번째 화면</Text>
// //         </View>
// //         <View key="3" style={styles.page}>
// //           <Text style={styles.text}>세 번째 화면</Text>
// //         </View>
// //       </PagerView>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#F5FCFF',
// //   },
// //   pagerView: {
// //     width: windowWidth * 0.8,
// //     height: windowHeight * 0.5,
// //   },
// //   page: {
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: 'white',
// //     borderRadius: 5,
// //     borderWidth: 1,
// //     borderColor: '#ccc',
// //     padding: 20,
// //   },
// //   text: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //   },
// // });

// // export default App;



// // import React from 'react';
// // import { View, Text, StyleSheet, Dimensions } from 'react-native';
// // import PagerView from 'react-native-pager-view';

// // const windowWidth = Dimensions.get('window').width;
// // const windowHeight = Dimensions.get('window').height;

// // function App() {
// //   return (

// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#F5FCFF',
// //   },
// //   pagerView: {
// //     width: windowWidth * 0.8,
// //     height: windowHeight * 0.5,
// //   },
// //   page: {
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: 'white',
// //     borderRadius: 5,
// //     borderWidth: 1,
// //     borderColor: '#ccc',
// //     padding: 20,
// //   },
// //   text: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //   },
// // });

// // export default App;



import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartScreen from './screens/StartScreen';
import MainApp from './screens/Main'; // MainApp 컴포넌트는 로그인 이후의 앱 화면을 관리합니다.

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // 여기에서 로그인 상태를 체크하는 로직을 추가합니다. 
  // 예를 들어, 로컬 스토리지나 서버에 저장된 토큰을 체크하는 방식을 사용할 수 있습니다.
  useEffect(() => {
    // checkLoginStatus();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          // 로그인한 경우 MainApp 컴포넌트를 렌더링합니다.
          <Stack.Screen name="MainApp" component={MainApp} options={{headerShown:false}}/>
        ) : (
          // 로그인하지 않은 경우 StartScreen을 렌더링합니다.
          <Stack.Screen name="Start" component={StartScreen} options={{headerShown:false}}/>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { useNavigation, useRoute } from '@react-navigation/native';

// const DetailScreen = () => {
//   const navigation = useNavigation();
//   const route = useRoute();
//   const { calories } = route.params;

//   return (
//     <View style={styles.container}>
//       <View style={styles.infoContainer}>
//         <Text style={styles.calories}>칼로리: {calories}kcal</Text>
//         {/* 영양소 정보 및 카드를 추가하세요 */}
//       </View>
//       <TouchableOpacity
//         style={styles.addButton}
//         onPress={() => navigation.navigate('AddFood')}
//       >
//         <Text style={styles.addButtonText}>+</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f2f2f2',
//   },
//   infoContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   calories: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   addButton: {
//     position: 'absolute',
//     bottom: 15,
//     right: 15,
//     backgroundColor: '#0f7',
//     borderRadius: 50,
//     width: 50,
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   addButtonText: {
//     fontSize: 30,
//     color: '#fff',
//   },
// });

// export default DetailScreen;
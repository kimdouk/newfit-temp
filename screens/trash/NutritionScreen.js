// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const Meal = ({ title, carbs, protein, fat, calories }) => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.slide}>
//       <Text style={styles.title}>{title}</Text>
//       <Text style={styles.info}>탄수화물: {carbs}g</Text>
//       <Text style={styles.info}>단백질: {protein}g</Text>
//       <Text style={styles.info}>지방: {fat}g</Text>
//       <Text style={styles.info}>칼로리: {calories}kcal</Text>
//       <TouchableOpacity
//         style={styles.addButton}
//         onPress={() => navigation.navigate('Detail', { calories })}
//       >
//         <Text style={styles.addButtonText}>+</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   slide: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f2f2f2',
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   info: {
//     fontSize: 20,
//     marginBottom: 10,
//   },
//   addButton: {
//     position: 'absolute',
//     top: 15,
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

// export default Meal;

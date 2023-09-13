import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FoodRegFoodList = ({navigation, route}) => {
  const {brand, food, unit, quantity, calories, carbohydrates, protein, fat, cholesterol, sodium, potassium} = route.params;

  const goBack = () => {
    navigation.goBack();
  };

  const showDetails = () => {
    navigation.navigate('FoodRegFoodListDetail', {
      brand,
      food,
      unit,
      quantity,
      calories,
      carbohydrates,
      protein,
      fat,
      cholesterol,
      sodium,
      potassium,
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={goBack}>
        <Icon name="arrow-back" size={25} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={showDetails}>
        <Text style={styles.cardTitle}>{brand}{food}</Text>
        <Text style={styles.cardSubtitle}>{brand}{quantity}g</Text>
        <Text style={styles.calories}>{calories}kcal</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  card: {
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
    backgroundColor: 'white',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  calories: {
    fontSize: 14,
    color: 'gray',
  },
});


export default FoodRegFoodList;

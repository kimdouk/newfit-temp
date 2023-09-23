import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FoodRegFoodListDetail = ({navigation, route}) => {
  const {calories, carbohydrates, protein, fat, cholesterol, sodium, potassium} = route.params;

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={goBack}>
        <Icon name="arrow-back" size={25} />
      </TouchableOpacity>
      <Text style={styles.title}>상세 정보</Text>
      <Text style={styles.text}>칼로리: {calories}kacl</Text>
      <Text style={styles.text}>탄수화물: {carbohydrates}g</Text>
      <Text style={styles.text}>단백질: {protein}g</Text>
      <Text style={styles.text}>지방: {fat}g</Text>
      <Text style={styles.text}>콜레스테롤: {cholesterol}mg</Text>
      <Text style={styles.text}>나트륨: {sodium}mg</Text>
      <Text style={styles.text}>칼륨: {potassium}mg</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop :70,
    paddingLeft:20,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});
export default FoodRegFoodListDetail;


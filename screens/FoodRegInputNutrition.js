
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NutritionTextInput from '../components/NutritionTextInput';
const FoodRegInputNutrition = ({ navigation, route }) => {
  const { brand, food, unit, quantity } = route.params;
  const [calories, setCalories] = useState('');
  const [carbohydrates, setCarbohydrates] = useState('');
  const [protein, setProtein] = useState('');
  const [fat, setFat] = useState('');
  const [cholesterol, setCholesterol] = useState('');
  const [sodium, setSodium] = useState('');
  const [potassium, setPotassium] = useState('');

  const onSubmit = () => {
    navigation.navigate('FoodRegFoodList', {
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

  const goBack = () => {
    navigation.goBack();
  };

  const isInputValid = calories && carbohydrates && protein && fat;

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS ==='ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView style={styles.inner}>
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Icon name="arrow-back" size={25} />
        </TouchableOpacity>
        
        <NutritionTextInput
          label="칼로리"
          value={calories}
          onChangeText={setCalories}
          placeholder="0 kcal"
        />
        <NutritionTextInput
          label="탄수화물"
          value={carbohydrates}
          onChangeText={setCarbohydrates}
          placeholder="0 g"
        />
        <NutritionTextInput
          label="단백질"
          value={protein}
          onChangeText={setProtein}
          placeholder="0 g"
        />
        <NutritionTextInput
          label="지방"
          value={fat}
          onChangeText={setFat}
          placeholder="0 g"
        />
        <NutritionTextInput
          label="콜레스테롤"
          value={cholesterol}
          onChangeText={setCholesterol}
          placeholder="0 mg"
        />
        <NutritionTextInput
          label="나트륨"
          value={sodium}
          onChangeText={setSodium}
          placeholder="0 mg"
        />
        <NutritionTextInput
          label="칼륨"
          value={potassium}
          onChangeText={setPotassium}
          placeholder="0 mg"
        />

        <TouchableOpacity
          style={[styles.button, !isInputValid && styles.buttonDisabled]}
          onPress={onSubmit}
          disabled={!isInputValid}>
          <Text style={styles.buttonText}>다음</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  backButton: {
    marginBottom: 20,
  },
  // label: {
  //   fontSize: 18,
  //   marginBottom: 10,
  // },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  buttonDisabled: {
    backgroundColor: 'gray',
  },
});

export default FoodRegInputNutrition;


import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FoodRegInputFood = ({navigation}) => {
  const [brand, setBrand] = useState('');
  const [food, setFood] = useState('');

  const onSubmit = () => {
    navigation.navigate('FoodRegInputQuantity', {brand, food});
  };

  const goBack = () => {
    navigation.goBack();
  };

  const isInputValid = brand && food;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={goBack}>
        <Icon name="arrow-back" size={25} />
      </TouchableOpacity>
      <Text style={styles.label}>브랜드 이름</Text>
      <TextInput
        style={styles.input}
        value={brand}
        onChangeText={(text) => setBrand(text)}
        placeholder="브랜드 이름"
      />
      <Text style={styles.label}>음식 이름</Text>
      <TextInput
        style={styles.input}
        value={food}
        onChangeText={(text) => setFood(text)}
        placeholder="음식 이름"
      />
      <TouchableOpacity
        style={[styles.button, !isInputValid && styles.buttonDisabled]}
        onPress={onSubmit}
        disabled={!isInputValid}>
        <Text style={styles.buttonText}>다음</Text>
      </TouchableOpacity>
    </View>
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
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  inner: {
    width: '100%',
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 4,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default FoodRegInputFood;


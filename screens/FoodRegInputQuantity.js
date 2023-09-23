import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FoodRegInputQuantity = ({navigation, route}) => {
  const {brand, food} = route.params;
  const [unit, setUnit] = useState('g');
  const [quantity, setQuantity] = useState('');

  const onSubmit = () => {
    navigation.navigate('FoodRegInputNutrition', {brand, food, unit, quantity});
  };

  const goBack = () => {
    navigation.goBack();
  };

  const isInputValid = quantity;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={goBack}>
        <Icon name="arrow-back" size={25} />
      </TouchableOpacity>
      <Text style={styles.label}>단위</Text>
      <View style={styles.unitContainer}>
          <Button onPress={() => setUnit('g')}  style={unit === 'g' ? styles.unitTextSelected : styles.unitText} title='그램(g)'></Button>
          <Button onPress={() => setUnit('ml')} style={unit === 'ml' ? styles.unitTextSelected : styles.unitText} title='밀리리터(ml)'></Button>
      </View>
      <Text style={styles.label}>내용량</Text>
      <TextInput
        style={styles.input}
        value={quantity}
        onChangeText={(text) => setQuantity(text)}
        keyboardType="numeric"
        placeholder={`0 ${unit === 'g' ? 'g' : 'ml'} `}
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
  unitContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  unitButton: {
    flex: 1,
    padding: 10,
  },
  unitText: {
    textAlign: 'center',
  },
  unitTextSelected: {
    textAlign: 'center',
    fontWeight: 'bold',
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
export default FoodRegInputQuantity;

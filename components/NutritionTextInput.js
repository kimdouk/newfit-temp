import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const NutritionTextInput = ({ label, value, onChangeText, placeholder }) => {
  return (
    <View>
        <Text style={styles.label}>{label}</Text>
        <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType="numeric"
        />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default NutritionTextInput;

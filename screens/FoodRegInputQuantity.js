// // QuantityInputScreen.js
// import React, {useState} from 'react';
// import {View, Text, TextInput, TouchableOpacity, StyleSheet, Picker} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

// const FoodRegUnit = ({navigation}) => {
//   const [unit, setUnit] = useState('g');
//   const [quantity, setQuantity] = useState('');

//   const onSubmit = () => {
//     navigation.navigate('NextScreen', {unit, quantity});
//   };
//   const goBack = () => {
//     navigation.goBack();
//   };

//   return (
//     <View style={styles.container}>
//         <TouchableOpacity style={styles.backButton} onPress={goBack}>
//             <Icon name="arrow-back" size={24} color="#007AFF" />
//         </TouchableOpacity>
        
//       <Text style={styles.label}>단위 선택:</Text>
//       <Picker
//         selectedValue={unit}
//         style={styles.picker}
//         onValueChange={(itemValue) => {
//           setUnit(itemValue);
//           setQuantity('');
//         }}>
//         <Picker.Item label="그램" value="g" />
//         <Picker.Item label="밀리미터" value="ml" />
//       </Picker>

//       <Text style={styles.label}>내용량 입력:</Text>
//       <TextInput
//         style={styles.input}
//         value={quantity}
//         onChangeText={(text) => setQuantity(text)}
//         placeholder={`내용량을 입력하세요 (${unit === 'g' ? 'g' : 'ml'})`}
//         keyboardType="numeric"
//       />

//       <TouchableOpacity
//         style={[styles.button, !(quantity) && styles.buttonDisabled]}
//         onPress={onSubmit}
//         disabled={!(quantity)}>
//         <Text style={styles.buttonText}>다음 페이지로 이동</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 8,
//   },
//   picker: {
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 4,
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     marginBottom: 16,
//   },
//   input: {
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 4,
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     marginBottom: 16,
//   },
//   button: {
//     backgroundColor: '#007AFF',
//     borderRadius: 4,
//     padding: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonDisabled: {
//     backgroundColor: '#ccc',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });

// export default FoodRegUnit;

// QuantityInputScreen.js
import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Button} from 'react-native';
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
        {/* <TouchableOpacity onPress={() => setUnit('g')} style={styles.unitButton}> */}
          <Button onPress={() => setUnit('g')}  style={unit === 'g' ? styles.unitTextSelected : styles.unitText} title='그램(g)'></Button>
        {/* </TouchableOpacity> */}
        {/* <TouchableOpacity onPress={() => setUnit('ml')} style={styles.unitButton}> */}
          <Button onPress={() => setUnit('ml')} style={unit === 'ml' ? styles.unitTextSelected : styles.unitText} title='밀리리터(ml)'></Button>
        {/* </TouchableOpacity> */}
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

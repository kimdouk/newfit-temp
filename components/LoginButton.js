import React, { useEffect, useRef } from 'react';
import kakaotalkLogo from '../assets/kakaotalk_logo.png'
import { TouchableOpacity, Text, StyleSheet, Image, Animated } from 'react-native';

const LoginButton = ({ onSubmit }) => {
  const fade = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(
        fade,
      {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true
      }
    ).start();
  }, [fade])

  return (
    <Animated.View                 // Special animatable View
      style={{
        // ...styles.button,
        opacity: fade,         // Bind opacity to animated value
      }}
    >
      <TouchableOpacity style={styles.button}onPress={onSubmit}>
        <Image source={kakaotalkLogo}/>
        <Text style={styles.buttonText}>카카오로 계속하기</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
    button: {
    flexDirection:'row',
    backgroundColor: 'black',
    paddingVertical: 20,
    paddingHorizontal: 100,
    borderRadius: 50,
  },
//   button: {
    // backgroundColor: 'black',
    // paddingVertical: 20,
    // paddingHorizontal: 100,
    // borderRadius: 50,
//   },
  buttonText: {
    marginHorizontal:10,
    color: 'white',
    fontSize: 16,
  },
});

export default LoginButton;

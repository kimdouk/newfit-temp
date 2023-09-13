import { View, Text } from 'react-native'
import React from 'react'

const AddMealInfo = ({navigation,route}) => {
    const {calories, carbohydrates, protein, fat} = route.params;
  return (
    <View>
      <Text>dddd{calories}</Text>
    </View>
  )
}

export default AddMealInfo;
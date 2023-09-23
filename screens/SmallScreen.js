import React, {useState} from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import PagerView from 'react-native-pager-view';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SmallScreen = ({navigation}) => {
  
    const [calories, setCalories] = useState(600);
    const [carbohydrates, setCarbohydrates] = useState(100);
    const [protein, setProtein] = useState(20);
    const [fat, setFat] = useState(10);

    const onSubmit = () => {
        navigation.navigate('AddMealInfo', {calories, carbohydrates, protein, fat});
      };
      
  return (
    <View style={styles.container}>
      <PagerView style={styles.pagerView} initialPage={0} showPageIndicator={true}>
        <View key="1" style={styles.page}>
            <TouchableOpacity  onPress={onSubmit}>
                <Text style={styles.plusbutton} >+</Text>
            </TouchableOpacity>
            <Text style={styles.timetext}>아침</Text>
            <Text style={styles.text}>탄수화물 : {carbohydrates}g</Text>
            <Text style={styles.text}>단백질 : {protein}g</Text>
            <Text style={styles.text}>지방  : {fat}g</Text>
            <Text style={styles.text}>칼로리 : {calories}kcal</Text>
        </View>
        <View key="2" style={styles.page}>
            <TouchableOpacity  onPress={onSubmit}>
                <Text style={styles.plusbutton} >+</Text>
            </TouchableOpacity>
            <Text style={styles.timetext}>점심</Text>
            <Text style={styles.text}>탄수화물 : {carbohydrates+120}g</Text>
            <Text style={styles.text}>단백질 : {protein+15}g</Text>
            <Text style={styles.text}>지방  : {fat+13}g</Text>
            <Text style={styles.text}>칼로리 : {calories+423}kcal</Text>
        </View>
        <View key="3" style={styles.page}>
            <TouchableOpacity  onPress={onSubmit}>
                <Text style={styles.plusbutton} >+</Text>
            </TouchableOpacity>
            <Text style={styles.timetext}>저녁</Text>
            <Text style={styles.text}>탄수화물 : {carbohydrates+20}g</Text>
            <Text style={styles.text}>단백질 : {protein+20}g</Text>
            <Text style={styles.text}>지방  : {fat+30}g</Text>
            <Text style={styles.text}>칼로리 : {calories+400}kcal</Text>
        </View>
      </PagerView>
    </View>
  )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    pagerView: {
      width: windowWidth * 0.8,
      height: windowHeight * 0.5,
    },
    page: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 20,
    },
    text: {
      fontSize: 25,
      fontWeight: 'bold',
      marginVertical:10
    },
    timetext:{
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom:60
    }
  });
  

export default SmallScreen;
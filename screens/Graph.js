import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import { VictoryBar, VictoryChart, VictoryStack, VictoryTheme, } from 'victory-native';

const allData = [
  { day: '5.1', carb: 20, protein: 10, fat: 30 },
  { day: '5.2', carb: 10, protein: 20, fat: 20 },
  { day: '5.3', carb: 25, protein: 13, fat: 10 },
  { day: '5.4', carb: 30, protein: 40, fat: 34 },
  { day: '5.5', carb: 60, protein: 30, fat: 23 },
  { day: '5.6', carb: 10, protein: 42, fat: 52 },
  { day: '5.7', carb: 42, protein: 25, fat: 22 },
  { day: '5.8', carb: 25, protein: 30, fat: 6 },
  { day: '5.9', carb: 25, protein: 32, fat: 32 },
  { day: '5.10', carb: 34, protein: 15, fat: 43 },
  { day: '5.11', carb: 25, protein: 24, fat: 23 },
  { day: '5.12', carb: 12, protein: 32, fat: 321 },
  { day: '5.13', carb: 4, protein: 21, fat: 12 },
  { day: '5.14', carb: 25, protein: 25, fat: 23 },
  { day: '5.16', carb: 53, protein: 40, fat: 35 },
];

const Graph = () => {
  
  const [displayDates, setDisplayDates] = useState({ start: '5.1', end: '5.8' });

  
  const [weeklyData, setWeeklyData] = useState(allData.slice(0, 7));

  
  useEffect(() => {
    const startIndex = allData.findIndex((data) => data.day === displayDates.start);
    const endIndex = startIndex + 7;
    setWeeklyData(allData.slice(startIndex, endIndex));
  }, [displayDates]);

  const handleNextWeek = () => {
    const endIndex = allData.findIndex((data) => data.day === displayDates.end);
    if (endIndex < allData.length - 8) {
      setDisplayDates({ start: allData[endIndex + 1]?.day, end: allData[endIndex + 8]?.day });
    }
  };
  
  const handlePreviousWeek = () => {
    const startIndex = allData.findIndex((data) => data.day === displayDates.start);
    if (startIndex > 6) {
      setDisplayDates({ start: allData[startIndex - 7]?.day, end: allData[startIndex - 1]?.day });
    }
  };
  const [selectedBar, setSelectedBar] = useState(null);

  const handleBarPress = (data, isCarb, isProtein, isFat) => {
    setSelectedBar(selectedBar?.day === data.day ? null : { ...data, isCarb, isProtein, isFat });
  };


  return (
    <SafeAreaView>
    <View style={{ marginTop:30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
        <TouchableOpacity onPress={handlePreviousWeek}>
            <Ionic name="chevron-back" size={25} />
        </TouchableOpacity>

      {/* <Button title="<-" onPress={handlePreviousWeek} /> */}
      <Text style={{marginHorizontal: 20}}>{`${displayDates.start} ~ ${displayDates.end}`}</Text>
      {/* <Button title="->" onPress={handleNextWeek} /> */}
      <TouchableOpacity onPress={handleNextWeek}>
            <Ionic name="chevron-forward" size={25} />
        </TouchableOpacity>
    </View>

      <VictoryChart theme={VictoryTheme.material} domainPadding={{ x: [10, -10], y: 5 }}>
      <VictoryStack>
      <VictoryBar
    data={weeklyData}
    x="day"
    y='carb'
    style={{ data: { fill: 'yellow' } }}
    events={[
      {
        target: 'data',
        eventHandlers: {
          onPress: () => {
            return [
              {
                target: 'data',
                mutation: (props) => {
                  handleBarPress(props.datum);
                  return null;
                },
              },
            ];
          },
        },
      },
    ]}
  />
    <VictoryBar
    data={weeklyData}
    x="day"
    y='protein'
    style={{ data: { fill: 'purple' } }}
    events={[
      {
        target: 'data',
        eventHandlers: {
          onPress: () => {
            return [
              {
                target: 'data',
                mutation: (props) => {
                  handleBarPress(props.datum);
                  return null;
                },
              },
            ];
          },
        },
      },
    ]}
  />
    <VictoryBar
    data={weeklyData}
    x="day"
    y='fat'
    style={{ data: { fill: 'green' } }}
    events={[
      {
        target: 'data',
        eventHandlers: {
          onPress: () => {
            return [
              {
                target: 'data',
                mutation: (props) => {
                  handleBarPress(props.datum);
                  return null;
                },
              },
            ];
          },
        },
      },
    ]}
  />
        {/* <VictoryBarComponent data={weeklyData} yValue="carb" color="red" handleBarPress={handleBarPress} />
        <VictoryBarComponent data={weeklyData} yValue="protein" color="orange" handleBarPress={handleBarPress} />
        <VictoryBarComponent data={weeklyData} yValue="fat" color="gold" handleBarPress={handleBarPress} /> */}
      </VictoryStack>
      </VictoryChart>
      {selectedBar && (
        <View style={{ 
          marginTop:50,
          bottom: 50,
          alignSelf: 'center',
          backgroundColor: 'white',
          padding: 10,
          borderRadius: 10,
          elevation: 5,
        }}>
          <Text>{`날짜: ${selectedBar.day}`}</Text>
          <Text>{`탄수화물: ${selectedBar.carb}g`}</Text>
          <Text>{`단백질: ${selectedBar.protein}g`}</Text>
          <Text>{`지방: ${selectedBar.fat}g`}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Graph;
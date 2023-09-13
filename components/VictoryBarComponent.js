// import React from 'react';
// import { VictoryBar } from 'victory-native';

// const VictoryBarComponent = ({data, yValue, color, handleBarPress}) => (
//   <VictoryBar
//     data={data}
//     x="day"
//     y={yValue}
//     style={{ data: { fill: color } }}
//     events={[
//       {
//         target: 'data',
//         eventHandlers: {
//           onPress: () => {
//             return [
//               {
//                 target: 'data',
//                 mutation: (props) => {
//                   handleBarPress(props.datum);
//                   return null;
//                 },
//               },
//             ];
//           },
//         },
//       },
//     ]}
//   />
// );

// export default VictoryBarComponent;
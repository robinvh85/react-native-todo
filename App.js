import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

// State
let appState = {
  
};

const DemoNavigation = createStackNavigator({
  Home: { screen: HomeScreen },
  Detail: { screen: DetailScreen },
});

export default DemoNavigation;

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = appState;
//   }

//   render() {   
//     return (
//       <View style={styles.container}>
//         <DrawerScreen />>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

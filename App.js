import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/header";
import CreateItem from "./components/createItem";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <CreateItem />
        <Text>Hello 1</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

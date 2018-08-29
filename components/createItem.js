import React from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

export default class CreateItem extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={{backgroundColor: 'green', width: 100, flex: 1}}/>
        <Button title='Add' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 40,
    // backgroundColor: "red",
    alignItems: "center",
    margin: 10
  },
  title: {
    flex: 1,
    alignItems: "center"
  }
})

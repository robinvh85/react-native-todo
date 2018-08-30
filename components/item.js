import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';

export default class Item extends React.Component {

  onPress = (item) => {
    // Alert.alert("Clicked");
    debugger;
    this.props.onRemove(item);
  }

  render() {
    let deleteIcon = require("../images/icons/cancel.png");

    return (
      <View style={styles.container}>
        <Text style={{flex:1}}>{this.props.taskName}</Text>
        <TouchableOpacity onPress={() => { this.onPress({content: this.props.taskName}) } }>
          <Image source={deleteIcon} style={{width: 30, height: 30}}/>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10
  }
});
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';

export default class Item extends React.Component {

  render() {
    let { onRemove, onChangeStatus } = this.props;
    let deleteIcon = require("../images/icons/cancel.png");

    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity style={{ marginTop: -2 }} onPress={ () => onChangeStatus() } >
            <Text> { (this.props.data.isFinished) ? `✅` : `🕘` } </Text>
          </TouchableOpacity>
        </View>
        <Text style={{flex:1}}>{this.props.data.content}</Text>
        <TouchableOpacity onPress={ () => onRemove() }>
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
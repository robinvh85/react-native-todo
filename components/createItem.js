import React from 'react';
import {StyleSheet, View, TextInput, Image, TouchableOpacity, Alert} from 'react-native';

export default class CreateItem extends React.Component {

  constructor(props){
    super(props);
    this.state = {content: "Please input"};
  }

  onPress() {
    // Alert.alert(this.state.text);
    this.props.onAdd(this.state.content);
    this.setState({content: ''})
  }

  render() {
    let addItemIcon = require("../images/icons/add.png");

    return (
      <View style={styles.container}>
        <TextInput style={{flex: 1, borderBottomWidth: 1, borderBottomStartRadius: 1, borderBottomEndRadius: 1, borderColor: '#0093c4'}}
          onChangeText={(content) => this.setState({content})}
          value={this.state.content} />
        <TouchableOpacity onPress={this.onPress.bind(this)}>
          <Image source={addItemIcon} style={{width: 30, height: 30, marginLeft: 10, marginRight: 0}}/>
        </TouchableOpacity>
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
  }
})

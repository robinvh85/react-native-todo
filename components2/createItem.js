import React from 'react';
import {StyleSheet, View, TextInput, Image, TouchableOpacity, Alert} from 'react-native';
import { connect } from 'react-redux';

class CreateItem extends React.Component {

  constructor(props){
    super(props);
    this.state = {content: "Please input"};
  }

  onPress() {
    this.props.addItem({ content: this.state.content, isFinished: false });
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
    alignItems: "center",
    margin: 10
  }
})

// Action
const addItem = (newItem) => {
  return {
    type: "ADD",
    newItem: newItem
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (newItem) => dispatch( addItem(newItem) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateItem)
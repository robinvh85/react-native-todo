import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';

import { connect } from 'react-redux';

class Item extends React.Component {

  render() {
    let { onDeleteItem, onFinishItem, index } = this.props;
    let deleteIcon = require("../images/icons/cancel.png");

    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity style={{ marginTop: -2 }} onPress={ () => onFinishItem(index) } >
            <Text> { (this.props.data.isFinished) ? `✅` : `🕘` } </Text>
          </TouchableOpacity>
        </View>
        <Text style={{flex:1}}>{this.props.data.content}</Text>
        <TouchableOpacity onPress={ () => onDeleteItem(index) }>
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

// Action
const deleteTask = (index) => {
  return {
    type: "DELETE",
    atIndex: index
  };
}

const mapStateToProp = (state) => {
  return {
  }
}

const mapDispatchToProp = (dispatch) => {
  return {
    onDeleteItem: (index) => dispatch( deleteTask(index) )
  }
}

// the connect function that glue our component to the Redux store
export default connect(mapStateToProp, mapDispatchToProp)(Item);
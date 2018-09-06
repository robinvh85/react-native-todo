import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Item from "../components/item";

import { connect } from 'react-redux';

class ItemList extends React.Component {
  render() {

    const { onFinishItem } = this.props;

    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.list}
          renderItem={
            ({item, index}) => <Item data={item} index={index} onFinishItem={ () => onFinishItem(index) }  />
          }
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10
  }
});

// Action
const finishTask = (index) => {
  return {
    type: "FINISH",
    atIndex: index
  };
}

const mapDispatchToProp = (dispatch) => {
  return {
    onFinishItem: (index) => dispatch( finishTask(index) )
  }
}

const mapStateToProp = (state) => {
  return {
    list: state.data
  }
}

// // the connect function that glue our component to the Redux store
export default connect(mapStateToProp, mapDispatchToProp)(ItemList);

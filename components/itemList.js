import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Item from "../components/item";

import { connect } from 'react-redux';

class ItemList extends React.Component {

  onRemove(item) {
    this.props.onRemove(item);
  }

  render() {
    console.log(this.props);

    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.list}
          renderItem={
            ({item}) => <Item taskName={item.content} onRemove={this.onRemove.bind(this)}/>
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

export default connect(state => {
  console.log(state);
  return {
    list: state.data
  }
})(ItemList);

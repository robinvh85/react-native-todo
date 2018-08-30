import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Item from "../components/item";

export default class ItemList extends React.Component {

  onRemove(item) {
    debugger;
    this.props.onRemove(item);
  }

  render() {

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
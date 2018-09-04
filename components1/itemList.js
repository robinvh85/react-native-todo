import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Item from "../components/item";

export default class ItemList extends React.Component {
  render() {
    const { onRemove, onChangeStatus } = this.props;

    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.list}
          renderItem={
            ({item, index}) => <Item data={item} onRemove={ () => onRemove(index) } onChangeStatus={ () => onChangeStatus(index) }/>
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

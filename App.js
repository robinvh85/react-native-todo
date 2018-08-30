import React from 'react';
import { StyleSheet, Alert, View } from 'react-native';
import Header from "./components/header";
import CreateItem from "./components/createItem";
import ItemList from "./components/itemList";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {listTasks: [{
      content: "Task 1"
    }, {
      content: "Task 2"
    }]};
  }

  onAdd(value) {
    let listTasks = [...this.state.listTasks, {content: value}];
    this.setState({listTasks});
  }

  onRemove(value){
    debugger;
    Alert.alert(value.content);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <CreateItem onAdd={this.onAdd.bind(this)} />
        <ItemList list={this.state.listTasks} onRemove={this.onRemove.bind(this)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

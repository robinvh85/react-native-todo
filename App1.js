import React from 'react';
import { StyleSheet, Alert, View } from 'react-native';
import Header from "./components1/header";
import CreateItem from "./components1/createItem";
import ItemList from "./components1/itemList";

// State
let appState = {
  data: [{
    content: "Task 1",
    isFinished: true
  }, {
    content: "Task 2",
    isFinished: true
  }]
};

export default class App1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = appState;
  }

  onAdd(value) {
    let data = [...this.state.data, {content: value, isFinished: false}];
    this.setState({data});
  }

  onRemove(index){
    let newTaskList = this.state.data.filter( (item, idx) => idx != index )
    this.setState({data: newTaskList});
  }

  onChangeStatus(index){
    this.state.data[index].isFinished = !this.state.data[index].isFinished;
    let newTaskList = [ ...this.state.data];
    this.setState({data: newTaskList});
  }

  render() {   
    return (
      <View style={styles.container}>
        <Header />
        <CreateItem onAdd={ this.onAdd.bind(this) } />
        <ItemList list={this.state.data} 
          onRemove={ this.onRemove.bind(this) } 
          onChangeStatus={ this.onChangeStatus.bind(this) } />
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

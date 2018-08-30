import React from 'react';
import { StyleSheet, Alert, View } from 'react-native';
import Header from "./components/header";
import CreateItem from "./components/createItem";
import ItemList from "./components/itemList";

import {createStore} from "redux";
import {Provider} from "react-redux";

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

// Action
const finishTask = (index) => {
  return {
    type: "FINISH",
    atIndex: index
  };
}

const deleteTask = (index) => {
  return {
    type: "DELETE",
    atIndex: index
  };
}

// Reducer
const taskListReducer = (state = appState, action) => {
  let newTaskList = state.data;
  
  switch(action.type){
    case "FINISH":
      newTaskList[action.atIndex].isFinished = true;
      return {...state, data: newTaskList};
    case "DELETE":
      newTaskList = state.data.filter((item, i) => i !== action.atIndex);
      return {...state, data: newTaskList};
  }

  return state;
}

// Store
console.log("STATE", appState);
const store = createStore(taskListReducer, appState);
console.log("STORE", store.getState());

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = appState;
  }

  onAdd(value) {
    let data = [...this.state.data, {content: value}];
    this.setState({data});
  }

  onRemove(value){
    Alert.alert(value.content);
  }

  render() {
    
    return (
      <Provider store={ store }>
        <View style={styles.container}>
          <Header />
          <CreateItem onAdd={this.onAdd.bind(this)} />
          {/* <ItemList list={this.state.data} onRemove={this.onRemove.bind(this)}/> */}
          <ItemList />
        </View>
      </Provider>
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

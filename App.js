import React from 'react';
import { StyleSheet, Alert, View } from 'react-native';
import Header from "./components/header";
import CreateItem from "./components/createItem";
import ItemList from "./components/itemList";

import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

// State
let appState = {
  data: []
};

// Reducer
const taskListReducer = (state = appState, action) => {
  let newTaskList = [...state.data];
  
  switch(action.type){
    case "FINISH":
      newTaskList = state.data.filter((item, i) => true);
      newTaskList[action.atIndex].isFinished = !newTaskList[action.atIndex].isFinished; 
      return { ...state, data: newTaskList };
    case "DELETE":
      newTaskList = state.data.filter((item, i) => i !== action.atIndex);
      return {...state, data: newTaskList};
    case "ADD":
      newTaskList.push(action.newItem);
      return { ...state, data: newTaskList };
    case "INIT_DATA":
      return { ...state, data: action.data };
  }

  return state;
}

// Middleware
const logger = store => next => action => {
  console.log("LOGGER State: ", store.getState());
  const data = store.getState().data;

  if(data.length > 1){
    next(action);
  } else if(data.length == 1){
    Alert.alert("Can not delete this item");
    return;
  }
  
  next(action);
  console.log("LOGGER State after: ", store.getState());
}

// // Store
const store = createStore(taskListReducer, applyMiddleware(thunk,logger));
// console.log("STORE", store.getState());

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = appState;
  }

  render() {
    return (
      <Provider store={ store }>
        <View style={styles.container}>
          <Header />
          <CreateItem />
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

// Action
const initData = (data) => {
  return {
    type: "INIT_DATA",
    data: data
  }
} 

const addDataAfter3s = () => {
  return () => {
    setTimeout( () => {
      let data = [{
        content: "Task 1",
        isFinished: true
      }, {
        content: "Task 2",
        isFinished: false
      }];

      store.dispatch(initData(data));
    }, 3000 );
  }
}

store.dispatch( addDataAfter3s() );
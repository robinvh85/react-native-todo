import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';


class Header extends React.Component {
  render() {
    let menuIcon = require("../images/icons/menu1.png");

    return (
      <View style={styles.container}>
        <Image source={menuIcon} style={{width: 30, height: 30, marginLeft: 5}}/>
        <View style={styles.title}>
          <Text>Header 1</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    height: 40,
    backgroundColor: "#4fc3f7",
    alignItems: "center"
  },
  title: {
    flex: 1,
    alignItems: "center"
  }
})

export default Header;

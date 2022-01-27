import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class Splash extends Component {
  constructor(props) {
    super(props);

    setTimeout(() => {
      props.navigation.navigate("Main");
    }, 1000);
  }

  render() {
    return (
      <View />
    );
  }
}

export default Splash;
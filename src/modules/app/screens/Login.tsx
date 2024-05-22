
import React, { useCallback } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { showToast } from "@helpers/toast/showToast";

export default function Login() {

  const goHomePage = useCallback(() => {
    showToast("Welcome");
  }, []);

  return (
    <View style={styles.root}>
      <Text style={styles.welcome}>Welcome !</Text>
      <View style={styles.buttonStyle}>
        <Button onPress={goHomePage} title="Login" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  welcome: {
    fontFamily: "Bold",
    fontSize: 25,
  },
  buttonStyle: {
    marginTop: 20,
  },
  labelStyle: {
    fontSize: 3,
    textAlign: "center",
    fontWeight: "bold",
  },
});

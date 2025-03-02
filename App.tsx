import React from "react";
import StudentDataInput from "./components/StudentDataInput";
import StudentDataDisplay from "./components/StudentDataDisplay";
import { SafeAreaView, StyleSheet, View } from "react-native";
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StudentDataInput></StudentDataInput>
      <StudentDataDisplay></StudentDataDisplay>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    //backgroundColor: "lightgray"
  }
})

export default App;
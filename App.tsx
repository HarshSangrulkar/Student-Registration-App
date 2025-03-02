import React, { useState } from "react";
import StudentDataInput from "./components/StudentDataInput";
import StudentDataDisplay from "./components/StudentDataDisplay";
import { SafeAreaView, StyleSheet, View } from "react-native";

interface Data {
  name: string,
  age: number;
}
const App = () => {
  const [list, setList] = useState<Data[]>([])
  const addDataHandler = (nameParam: string, ageParam: number) => {
    setList((prevState) => [...prevState, { name: nameParam, age: ageParam }])
  }
  return (
    <SafeAreaView style={styles.container}>
      <StudentDataInput onDataAdd={addDataHandler}></StudentDataInput>
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
import React, { useState } from "react";
import StudentDataInput from "./components/StudentDataInput";
import StudentDataDisplay from "./components/StudentDataDisplay";
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from "react-native";

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
      <ScrollView>
        {list.map((value, index) => (
          <StudentDataDisplay key={index} name={value.name} age={value.age} />
        ))}

      </ScrollView>
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
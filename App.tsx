import React, { useState } from "react";
import StudentDataInput from "./components/StudentDataInput";
import StudentDataDisplay from "./components/StudentDataDisplay";
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from "react-native";

interface Data {
  name: string,
  age: number;
  phone: number,
  school: string,
}
const App = () => {
  const [list, setList] = useState<Data[]>([])
  const addDataHandler = (nameParam: string, ageParam: number, phoneParam: number, schoolParam: string) => {
    setList((prevState) => [...prevState, { name: nameParam, age: ageParam, phone: phoneParam, school: schoolParam }])
  }
  return (
    <SafeAreaView style={styles.container}>
      <StudentDataInput onDataAdd={addDataHandler}></StudentDataInput>
      <Text style={styles.txt}>Student Data</Text>
      <View style={styles.scrollContainer}>

        <Text style={styles.data}>name</Text>
        <Text style={styles.data}>age</Text>
        <Text style={styles.data}>phone</Text>
        <Text style={styles.data}>school</Text>
      </View>
      <ScrollView style={styles.scroll}>
        {list.map((value, index) => (
          <StudentDataDisplay key={index} name={value.name} age={value.age} phone={value.phone} school={value.school} />
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
    padding: 5,

  },
  txt: {
    color: "black",
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
  },
  scroll: {
    // padding: 15,
    // margin: 15,
  },
  scrollContainer: {

    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",


  },
  data: {
    color: "black",
    fontWeight: "bold",
    margin: 5,
  },
})

export default App;
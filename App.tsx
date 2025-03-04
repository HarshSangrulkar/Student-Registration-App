import React, { useState } from "react";
import StudentDataInput from "./components/StudentDataInput";
import StudentDataDisplay from "./components/StudentDataDisplay";
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from "react-native";

interface Data {
  name: string,
  age: number;
  phone: number,
  school: string,
  id: string;
}
const App = () => {
  const [list, setList] = useState<Data[]>([])
  const addDataHandler = (nameParam: string, ageParam: number, phoneParam: number, schoolParam: string) => {
    setList((prevState) => [...prevState, { id: Math.random().toString(), name: nameParam, age: ageParam, phone: phoneParam, school: schoolParam }])
  }

  const deleteStudentHandler = (idParam: string) => {
    setList((prevState) => prevState.filter((student) => student.id !== idParam));
  };
  return (
    <SafeAreaView style={styles.container}>
      <StudentDataInput onDataAdd={addDataHandler}></StudentDataInput>
      <Text style={styles.txt}>Student Data</Text>
      <View style={styles.scrollContainer}>

        <Text style={styles.data}>Name</Text>
        <Text style={styles.data}>Age</Text>
        <Text style={styles.data}>Phone</Text>
        <Text style={styles.data}>School</Text>
      </View>
      <ScrollView style={styles.scroll}>
        {list.map((value) => (
          <StudentDataDisplay key={value.id} id={value.id} name={value.name} age={value.age} phone={value.phone} school={value.school} onDelete={deleteStudentHandler} />
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
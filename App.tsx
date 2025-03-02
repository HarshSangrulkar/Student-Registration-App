import React from "react";
import StudentDataInput from "./components/StudentDataInput";
import StudentDataDisplay from "./components/StudentDataDisplay";
import { SafeAreaView, View } from "react-native";
const App = () => {
  return (
    <SafeAreaView>
      <StudentDataInput></StudentDataInput>
      <StudentDataDisplay></StudentDataDisplay>
    </SafeAreaView>
  )
}

export default App;
import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import CheckBox from "@react-native-community/checkbox";

interface DataProps {
    onDataAdd: (name: string, age: number) => void;
}
const StudentDataInput = ({ onDataAdd }: DataProps) => {

    //const [gender, setGender] = useState("");

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);

    const nameInputHandler = (enteredName: string) => {
        //console.log(enteredName);
        setName(enteredName);
    }
    const ageInputHandler = (enteredAge: string) => {
        setAge(Number(enteredAge) || 0);
    }
    const addDataHandler = () => {
        onDataAdd(name, age);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Student Registration</Text>

            <Text style={styles.label}>Name:</Text>
            <TextInput style={styles.input} placeholder="Full Name" value={name} onChangeText={nameInputHandler}></TextInput>

            <Text style={styles.label}>Age:</Text>
            <TextInput style={styles.input} placeholder="Age" keyboardType="numeric" value={age.toString()} onChangeText={ageInputHandler}></TextInput>

            <Text style={styles.label}>Gender:</Text>
            <View style={styles.genderContainer}>
                <Text>Male</Text>
                <Text>Female</Text>
            </View>

            <Text style={styles.label}>Mail Id:</Text>
            <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" ></TextInput>

            <Text style={styles.label}>Contact Number:</Text>
            <TextInput style={styles.input} placeholder="Phone Number" keyboardType="phone-pad" ></TextInput>

            <Text style={styles.label}>School Name:</Text>
            <TextInput style={styles.input} placeholder="School Name" ></TextInput>

            <TouchableOpacity style={styles.button} onPress={addDataHandler}><Text style={styles.btnText}>SUBMIT</Text></TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 20,
        backgroundColor: "lightgray",
        //flex: 1,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,

    },
    label: {
        fontSize: 16,
        fontWeight: "bold",

        margin: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: "gray",
        padding: 10,
        borderRadius: 5,
        margin: 5,
    },
    genderContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 10,
    },

    button: {
        borderColor: "black",
        padding: 5,
        backgroundColor: "blue",
    },
    btnText: {
        color: "white",
    },

});

export default StudentDataInput;

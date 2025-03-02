import { StyleSheet, Text, View } from "react-native"

interface DataDisplayProps {
    name: string,
    age: number,
    phone: number,
    school: string,
}
const StudentDataDisplay = ({ name, age, phone, school }: DataDisplayProps) => {
    return (
        <View style={styles.container}>

            <Text style={styles.data}>{name}</Text>
            <Text style={styles.data}>{age}</Text>
            <Text style={styles.data}>{phone}</Text>
            <Text style={styles.data}>{school}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        margin: 15,
        padding: 15,
        backgroundColor: "purple",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around"

    },
    data: {
        color: "white",
        fontWeight: "bold",
        margin: 5,
    },

})
export default StudentDataDisplay;
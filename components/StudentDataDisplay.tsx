import { StyleSheet, Text, View, Pressable } from "react-native"

interface DataDisplayProps {
    name: string,
    age: number,
    phone: number,
    school: string,
    id: string;
    onDelete: (id: string) => void;
}
const StudentDataDisplay = ({ name, age, phone, school, id, onDelete }: DataDisplayProps) => {
    return (
        <Pressable onPress={() => onDelete(id)}>
            <View style={styles.container}>
                <Text style={styles.data}>{name}</Text>
                <Text style={styles.data}>{age}</Text>
                <Text style={styles.data}>{phone}</Text>
                <Text style={styles.data}>{school}</Text>
            </View>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    container: {
        margin: 15,
        padding: 15,
        backgroundColor: "purple",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"

    },
    data: {
        color: "white",
        fontWeight: "bold",
        margin: 5,
    },

})
export default StudentDataDisplay;
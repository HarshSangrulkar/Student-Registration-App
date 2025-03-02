import { Text, View } from "react-native"

interface DataDisplayProps {
    name: string,
    age: number,
}
const StudentDataDisplay = ({ name, age }: DataDisplayProps) => {
    return (
        <View>
            <Text>{name}</Text>
            <Text>{age}</Text>
        </View>
    )
}

export default StudentDataDisplay;
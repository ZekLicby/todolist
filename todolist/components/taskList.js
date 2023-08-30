import { FlatList, Text, View } from "react-native"

export const TaskList = ({taskList}) => {

    return(
        <View>
            <FlatList
            data={taskList}
            renderItem={({item}) => <Text>{item}</Text>}
            keyExtractor={(item, index) => `${index}`}
            />
        </View>
    )
}
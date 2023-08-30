import { View } from "react-native"

export const TaskList = ({taskList}) => {

    return(
        <View>
            {taskList?.map(item => {return(
                <View>

                </View>
            )})}
        </View>
    )
}
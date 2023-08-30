import { StyleSheet, Text, View } from "react-native"

export const StatusBar = ({taskQuantity}) => {

    const taskQuantityText = taskQuantity > 1 ? `${taskQuantity} tarefas` : `${taskQuantity} tarefa`

    return(
        <View style={styles.container}>
            <Text>{taskQuantityText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row-reverse",
        padding: "2.5px",
    }
})
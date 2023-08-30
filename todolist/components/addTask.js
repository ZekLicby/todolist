import { Button, StyleSheet, TextInput, Text, View } from "react-native"

export const AddTask = () => {
    return(
        <View style={{backgroundColor: "white"}}>
            <Button title="Adicionar" style={styles.button} />
            <TextInput placeholder="Insira aqui" placeholderTextColor="#000000" />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
    },  
    button:{
        width: "50%",
    },
    input:{
        width: 50,
        height: 25,
        color: 'black',
    }
})
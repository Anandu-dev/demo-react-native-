import React,{Component} from "react";
import { View, Text, StyleSheet} from "react-native";


export default class Cart extends Component {
    render(){
        return(
            <View style ={Styles.container}>
                <Text style ={styles.CartText}>Hi This Is Cart page</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create ({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: 'green'
    },
    CartText:{
        fontSize: 20,
        fontWeight:'bold',
        color:'black'
    }
})
import React,{Component} from "react";
import { View, Text, StyleSheet} from "react-native";

export default class Home extends Component {
    render(){
        return(
            <View style ={Styles.container}>
                <Text style ={styles.homeText}>Hi This Is Home page</Text>
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
    homeText:{
        fontSize: 20,
        fontWeight:'bold',
        color:'black'
    }
})
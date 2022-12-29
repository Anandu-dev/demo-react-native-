import React,{Component} from "react";
import { View, Text, StyleSheet} from "react-native";


export default class Profile extends Component {
    render(){
        return(
            <View style ={Styles.container}>
                <Text style ={styles.profileText}>Hi This Is Profile page</Text>
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
    profileText:{
        fontSize: 20,
        fontWeight:'bold',
        color:'black'
    }
})
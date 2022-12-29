import React,{Component} from "react";
import{
    View,
    StyleSheet,
    Text,
    TouchableHighlight,
}from 'react-native'

class Flexcontent extends Component{
    render(){
        return(
            <View>
                <Text style ={styles.contentstyle}>Hi name is {this.props.name}</Text>
            </View>
        )
    }
}

export default class Flexbox extends Component{
    constructor(){
        super();
        this.state={
            min_text:'Hi',
            sub_text:'hellow'
        }
    }
    updateText(){
        this.setState({
            min_text:'hi(hello updated)',
            sub_text:'react (changed)'
        })
    }
    componentDidMount(){
        console.log('the username is',this.props.route.params.username)
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>{this.state.min_text}</Text>
                <Text style={styles.text}>{this.state.sub_text}</Text>
                <Text style={styles.text}>React</Text>
                <TouchableHighlight style={styles.button}
                underlayColor ='red'
                onPress= {()=> this.updateText()}>
                    <Text style={styles.buttontext}>
                        update
                    </Text>

                </TouchableHighlight>
                <TouchableHighlight  style={styles.button}
                underlayColor = '#ffffff'
                onPress={()=> this.props.navigation.navigate('Drawer')}>
                    <Text style={styles.buttontext}>click</Text>

                </TouchableHighlight>
                <Flexcontent name = {this.props.route.params.username} >

                </Flexcontent>
            </View>
        )
        
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#ffffff',
        justifyContent:'center',
        alignItems:'center',



    },
    text:{
        fontSize: 25,
        color: '#000000'
        
    },
    button:{
        width: '60%',
        height: 55,
        backgroundColor:'green',
        alignItems:'center',
        borderRadius: 10,


    },
    buttontext:{
        color:'blue',
        fontWeight:'bold',
        fontSize : 25,

    },
    contentstyle:{
        fontSize : 18,
        fontWeight:'bold',
        color:'yellow',
    }
})
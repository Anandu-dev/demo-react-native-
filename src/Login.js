import React,{Component} from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
}from 'react-native'

export default class Login extends Component {

  constructor(){
    super();
    this.state = {
      name: null
    }
  }  
    updateValue(username) {
      console.log (username)
      this.setState({name: username})

    }
  
    render (){
      return (
        <View style= {styles.container}>
          <ImageBackground source={require ('./asset/bg1.jpg')}
          style= {styles.backgroundImage}>
            <Image source={require('./asset/logo.jpg')}
              style={styles.logo}>
            </Image>
            <Text style ={styles.Textview}>react native</Text>
            <TextInput style ={styles.Inputview}
                placeholder = 'User name'
                placeholderTextColor='green'
                maxlength ={10}
                onChangeText={(username)=>this.updateValue(username)}>
                
            </TextInput>
            <TextInput style ={styles.Inputview}
            placeholder ='password'
            placeholderTextColor='red'
            maxLength={10}
            secureTextEntry={true}>

            </TextInput>
            <TouchableHighlight style={styles.ButtonView}
            underlayColor ='transparent'
            onPress = {()=>this.props.navigation.navigate ('Flexbox',{username:this.state.name}) }>
              <Text style={styles.ButtonText}>LOG IN</Text>
            </TouchableHighlight>
          </ImageBackground>
        </View>
      )
    }
}

const styles = StyleSheet.create({
    container :{
      height: '100%',
      width : '100%',
      backgroundColor: '#f37637'
    },
    backgroundImage:{
      height: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent:'center'
    },
    logo:{
      height:100,
      width:100,
      marginBottom: 20,
    },
    Textview:{
      fontSize: 25,
      fontWeight:'bold',
      marginTop:20,
    },
    Inputview:{
      height: 55,
      width:'80%',
      borderWidth: 1,
      borderColor:'green',
      paddingLeft: 10,
      marginTop: 20,
    },
    ButtonView:{
      width: '60%',
      height: 55,
      backgroundColor: 'green',
      marginTop: 30,
      borderRadius: 10,
      alignItems: 'center'
    },
    ButtonText:{
      fontSize: 20,
      fontWeight:'bold',
      color:'white'
    }
})
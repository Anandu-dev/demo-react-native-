import React,{component} from "react";
import{
    View,
}from 'react-native'
import { WebView } from 'react-native-webview';

export default class Webview extends component{
    render(){
        return <WebView source={{ uri: 'https://reactnative.dev/' }} />;
        
    }
}
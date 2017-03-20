/**
 * Created by lingfengliang on 2017/3/15.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';


import HomePage from './HomePage';

export default class WelcomPage extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
        this.timer = setTimeout(()=>{
            this.props.navigator.resetTo({component: HomePage});
        },100);
    }

    render(){
        return <View style={styles.container}>
            <Text>欢迎</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
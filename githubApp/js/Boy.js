/**
 * Created by lingfengliang on 2017/3/13.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import Girl from './Girl';
import NavigationBar from './Components/NavigationBar';

export default class Boy extends Component{
    constructor(props){
        super(props)
        this.state = {
            word: ''
        }
    }

    render(){
        let word = this.state.word;
        return(
        <View style={styles.container}>
            <NavigationBar title={"Boy"} statusBar={{
                backgroundColor: 'green'
            }} style={{backgroundColor: 'green'}}></NavigationBar>
            <Text style={styles.text}>I am a Boy</Text>
            <Text style={styles.text} onPress={()=>{
                this.props.navigator.push({
                    component: Girl,
                    params: {
                        word: '一只玫瑰',
                        onCallBack: (word)=>{
                            this.setState({
                                word: word
                            })
                        }
                    }

                });
            }}>送女孩一只玫瑰</Text>
            <Text style={styles.text}>{word}</Text>
        </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
    },
    text: {
        fontSize: 20,
    }
})
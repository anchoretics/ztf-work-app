/**
 * Created by lingfengliang on 2017/4/7.
 */


import React, {Component, PropTypes} from "react";
import {BackAndroid} from "react-native";

export default class BackPressComponent{
    constructor(props){
        this._hardwareBackPress=this.onHardwareBackPress.bind(this);
        this.props=props;
    }
    componentDidMount(){
        if(this.props.backPress)BackAndroid.addEventListener('hardwareBackPress',this._hardwareBackPress);
    }
    componentWillUnmount(){
        if(this.props.backPress)BackAndroid.removeEventListener('hardwareBackPress',this._hardwareBackPress);
    }
    onHardwareBackPress(e){
        return this.props.backPress(e);
    }
}
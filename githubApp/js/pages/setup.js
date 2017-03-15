/**
 * Created by lingfengliang on 2017/3/15.
 */
import React, { Component } from 'react';
import {
    Navigator
} from 'react-native';

import WelcomePage from './WelcomPage';

function setup(){
    //初始化
    class Root extends Component{
        renderScene(route, navigator) {
            let Component = route.component;
            return <Component {...route.params} navigator={navigator}/>
        }

        render() {
            return <Navigator
                initialRoute={{component: WelcomePage}}
                renderScene={(route, navigator)=>this.renderScene(route, navigator)}
            />
        }
    }

    return <Root />
}

module.exports = setup;
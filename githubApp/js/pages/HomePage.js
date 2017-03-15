/**
 * Created by lingfengliang on 2017/3/15.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Navigator,
    ListView,

} from 'react-native';

import TabNavigator from 'react-native-tab-navigator'

export default class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'home',
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        title="最热"
                        selected={this.state.selectedTab === 'home'}
                        selectedTitleStyle={{color:'red'}}
                        renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_popular.png')} />}
                        renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={require('../../res/images/ic_popular.png')} />}
                        onPress={() => this.setState({ selectedTab: 'home' })}>
                        <View style={styles.page1}></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        title="趋势"
                        selected={this.state.selectedTab === 'trending'}
                        selectedTitleStyle={{color:'red'}}
                        renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_trending.png')} />}
                        renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={require('../../res/images/ic_trending.png')} />}
                        onPress={() => this.setState({ selectedTab: 'trending' })}>
                        <View style={styles.page2}></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        title="收藏"
                        selected={this.state.selectedTab === 'favorite'}
                        selectedTitleStyle={{color:'red'}}
                        renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_favorite.png')} />}
                        renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={require('../../res/images/ic_favorite.png')} />}
                        onPress={() => this.setState({ selectedTab: 'favorite' })}>
                        <View style={styles.page3}></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        title="我的"
                        selected={this.state.selectedTab === 'profile'}
                        selectedTitleStyle={{color:'red'}}
                        renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_my.png')} />}
                        renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={require('../../res/images/ic_my.png')} />}
                        onPress={() => this.setState({ selectedTab: 'profile' })}>
                        <View style={styles.page4}></View>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    page1: {
        flex: 1,
        backgroundColor: 'red'
    },
    page2: {
        flex: 1,
        backgroundColor: 'green'
    },
    page3: {
        flex: 1,
        backgroundColor: 'blue'
    },
    page4: {
        flex: 1,
        backgroundColor: '#ffa300'
    },
    image: {
        height: 22,
        width: 22
    }

});
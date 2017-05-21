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

import { ListItem, Left, Body, Right, Switch, Radio, Icon, Badge, CheckBox } from 'native-base'
import TabNavigator from 'react-native-tab-navigator'
import PopularPage from './PopularPage'
import TrendingPage from './TrendingPage'
import MyPage from './my/MyPage'


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
                        selectedTitleStyle={{color:'#FFB5A1'}}
                        renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_popular.png')} />}
                        renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'#FFB5A1'}]} source={require('../../res/images/ic_popular.png')} />}
                        onPress={() => this.setState({ selectedTab: 'home' })}>
                        <PopularPage {...this.props} ></PopularPage>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        title="趋势"
                        selected={this.state.selectedTab === 'trending'}
                        selectedTitleStyle={{color:'#FFB5A1'}}
                        renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_trending.png')} />}
                        renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'#FFB5A1'}]} source={require('../../res/images/ic_trending.png')} />}
                        onPress={() => this.setState({ selectedTab: 'trending' })}>
                        <TrendingPage {...this.props} ></TrendingPage>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        title="收藏"
                        selected={this.state.selectedTab === 'favorite'}
                        selectedTitleStyle={{color:'#FFB5A1'}}
                        renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_favorite.png')} />}
                        renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'#FFB5A1'}]} source={require('../../res/images/ic_favorite.png')} />}
                        onPress={() => this.setState({ selectedTab: 'favorite' })}>
                        <View style={styles.page3}>
                            <Icon style={{color:'red'}} name="menu" />

                        </View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        title="我的"
                        selected={this.state.selectedTab === 'profile'}
                        selectedTitleStyle={{color:'#FFB5A1'}}
                        renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_my.png')} />}
                        renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'#FFB5A1'}]} source={require('../../res/images/ic_my.png')} />}
                        onPress={() => this.setState({ selectedTab: 'profile' })}>
                        <MyPage {...this.props}></MyPage>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#F5FCFF',
    },
    image: {
        height: 22,
        width: 22,

    }

});
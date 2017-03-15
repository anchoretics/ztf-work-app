/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import setup from './js/pages/setup';

export default class githubApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTab: 'home'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'home'}
              title="Home1"
              renderIcon={() => <Image source={require('./res/images/popular')} />}
              renderSelectedIcon={() => <Image source={require('./res/images/popular')} />}
              badgeText="1"
              onPress={() => this.setState({ selectedTab: 'home' })}>
            <View style={styles.page}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'profile'}
              title="Profile"
              renderIcon={() => <Image source={require('./res/images/popular')} />}
              renderSelectedIcon={() => <Image source={require('./res/images/popular')} />}
              renderBadge={() => <CustomBadgeView />}
              onPress={() => this.setState({ selectedTab: 'profile' })}>
              {profileView}
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
  page: {
    flex: 1,
    backgroundColor: 'red'
  }
});

AppRegistry.registerComponent('githubApp', () => setup);

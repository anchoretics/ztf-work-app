/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Navigator,
    ListView
} from 'react-native';

import setup from './js/pages/setup';

export default class githubApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTab: 'home',
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {/*<Navigator initialRoute={{*/}
          {/*component: Boy*/}
        {/*}} renderScene={(route,navigator)=>{*/}
          {/*let Component = route.component;*/}
          {/*return <Component navigator={navigator} {...route.params}/>;*/}
        {/*}}>*/}

        {/*</Navigator>*/}
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

AppRegistry.registerComponent('githubApp', () => setup);

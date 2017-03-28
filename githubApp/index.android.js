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
        <Container>
          <Content>
            <ListItem>
              <Text>Simon Mignolet</Text>
            </ListItem>
            <ListItem>
              <Text>Nathaniel Clyne</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
            </ListItem>
            <ListItem icon>
              <Body>
              <Text>Bluetooth</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </Content>
        </Container>
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

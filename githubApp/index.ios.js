/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry
} from 'react-native';

// import { Container, Content, ListItem, Left, Body, Right, Switch, Radio, Text, Icon, Badge } from 'native-base'

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

AppRegistry.registerComponent('githubApp', () => setup);
// AppRegistry.registerComponent('githubApp', () => githubApp)
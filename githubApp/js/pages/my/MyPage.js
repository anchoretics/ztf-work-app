/**
 * Created by lingfengliang on 2017/3/17.
 */
import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    AsyncStorage,
    Alert
} from 'react-native';
import { Container, Content, ListItem, Left, Body, Right, Switch, Radio, Text, Icon, Badge, CheckBox } from 'native-base'

import NavigationBar from '../../Components/NavigationBar';
import CustomKeyPage from './CustomKeyPage';
import SortKeyPage from './SortKeyPage';
import {FLAG_LANGUAGE} from "../../expand/dao/LanguageDao";

import _ from 'lodash'

export default class MyPage extends Component {
    constructor(props){
        super(props);
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <Container>
                <NavigationBar title={"我的"}
                               statusBar={{
                                   backgroundColor: '#B8F4FF',
                               }}
                               style={{backgroundColor: '#B8F4FF'}}

                />
                <Content>
                    <ListItem itemDivider>
                    </ListItem>

                    <ListItem icon onPress={()=>{
                        this.props.navigator.push({
                            component: CustomKeyPage,
                            params: {...this.props,flag:FLAG_LANGUAGE.flag_key}
                        })
                    }}>
                        <Body>
                        <Text>自定义标签</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon onPress={()=>{
                        this.props.navigator.push({
                            component: SortKeyPage,
                            params: {...this.props,flag:FLAG_LANGUAGE.flag_key}
                        })
                    }}>
                        <Body>
                        <Text>标签排序</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon onPress={()=>{
                        this.props.navigator.push({
                            component: CustomKeyPage,
                            params: {
                                ...this.props,
                                flag:FLAG_LANGUAGE.flag_key,
                                isRemoveKey: true
                            }
                        })
                    }}>
                        <Body>
                        <Text>标签移除</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>

                    <ListItem itemDivider>
                    </ListItem>
                    <ListItem icon onPress={()=>{
                        Alert.alert(
                            '确定清除缓存？',
                            null,
                            [
                                {text: 'Cancel'},
                                {text: 'OK', onPress: () => {
                                    AsyncStorage.getAllKeys((error, keys)=>{
                                        console.log(keys);
                                        let keys2 = keys.filter( (k)=> /^https/.test(k) );
                                        console.log(keys2);
                                        AsyncStorage.multiRemove(keys2, (errors)=>Alert.alert('清除' + (errors?'失败':'成功')));
                                    });
                                }},
                            ]
                        )
                    }}>
                        <Body>
                        <Text>清除缓存</Text>
                        </Body>
                    </ListItem>

                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})
/**
 * Created by lingfengliang on 2017/3/17.
 */
import React, { Component } from 'react'
import {
    StyleSheet,
    View,
} from 'react-native';
import { ListItem, Left, Body, Right, Switch, Radio, Text, Icon, Badge, CheckBox } from 'native-base'

import NavigationBar from '../../Components/NavigationBar';
import CustomKeyPage from './CustomKeyPage';
import SortKeyPage from './SortKeyPage';
import {FLAG_LANGUAGE} from "../../expand/dao/LanguageDao";

export default class MyPage extends Component {
    constructor(props){
        super(props);
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar title={"我的"}
                               statusBar={{
                                   backgroundColor: '#B8F4FF',
                               }}
                               style={{backgroundColor: '#B8F4FF'}}

                />
                <View style={styles.content}>
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
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})
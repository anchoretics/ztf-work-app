/**
 * Created by lingfengliang on 2017/3/17.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    ListView,
    RefreshControl
} from 'react-native';

import NavigationBar from '../../Components/NavigationBar';
import { ListItem, Left, Body, Right, Switch, Radio, Text, Icon, Badge, CheckBox } from 'native-base'

import LanguageDao, {FLAG_LANGUAGE} from '../../expand/dao/LanguageDao'
import ViewUtils from '../../ViewUtils';
import _ from 'lodash'

export default class CustomKeyPage extends Component{
    constructor(props){
        super(props);
        this.originArray = [];
        this.isRemoveKey=this.props.isRemoveKey?true:false;
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        this.languageDao = new LanguageDao(this.props.flag);

        this.languageDao.fetch().then((data)=> {
            this.originArray = _.cloneDeep(data);
            if(this.isRemoveKey){
                for(let i=0;i<data.length;i++){
                    data[i].checked = false;
                }
            }
            this.setState({
                data: data
            })
        }).catch((error)=> {
            console.log(error);
        });
    }

    _save(){
        let _saveArray = this.state.data;
        if(this.isRemoveKey){
            let _removedArray = _.remove(_saveArray, n => {
                return n.checked;
            });
            for(let i=0;i<_removedArray.length;i++){
                this.originArray.splice(_.findIndex(this.originArray,{name: _removedArray[i].name}),1);
            }
            _saveArray = this.originArray;
        }
        this.languageDao.save(_saveArray);
    }
    _renderScrollViews(){
        if(this.state.data && this.state.data.length>0){
            var views = [];
            for(var i=0;i<this.state.data.length;i++){
                let index = 0+i;
                let _onPress = function(id){
                    this.state.data[id].checked = !this.state.data[id].checked;
                    this.forceUpdate();
                };
                let view = <View key={i}>
                    <ListItem key={index} onPress={_onPress.bind(this,index)}>
                        <CheckBox checked={this.state.data[index].checked} onPress={_onPress.bind(this,index)} />
                        <Body>
                        <Text>{this.state.data[index].name}</Text>
                        </Body>
                    </ListItem>
                </View>;
                views.push(view);
            }
            return views;
        }else{
            return null;
        }
    }
    render(){
        let title = this.isRemoveKey?'标签移除':'自定义标签';
        let rightButtonTitle = this.isRemoveKey?'移除':'保存';
        return (
            <View style={styles.container}>
                <NavigationBar
                    title={title}
                    statusBar={{ backgroundColor: '#B8F4FF',}}
                    style={{backgroundColor: '#B8F4FF'}}
                    leftButton={ViewUtils.getLeftButton(()=>{this._save();this.props.navigator.pop();})}
                    rightButton={ViewUtils.getRightButton(rightButtonTitle, ()=>{this._save();this.props.navigator.pop();})}
                />
                <View style={styles.container}>
                    <ScrollView>
                        {/*{this.state.views}*/}
                        {this._renderScrollViews()}
                    </ScrollView>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    }
})
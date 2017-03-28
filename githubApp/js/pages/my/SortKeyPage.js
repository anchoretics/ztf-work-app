/**
 * Created by lingfengliang on 2017/3/19.
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
import SortableListView from 'react-native-sortable-listview';

import LanguageDao, {FLAG_LANGUAGE} from '../../expand/dao/LanguageDao'
import ViewUtils from '../../ViewUtils';
import _ from 'lodash'

export default class SortKeyPage extends Component{
    constructor(props){
        super(props);
        console.log(_.clone(['a']));
        this.dataArray = [];
        this.sortResultArray = [];
        this.originCheckedArray = [];
        this.state = {
            checkedArray: []
        }
    }

    componentDidMount(){
        this.languageDao = new LanguageDao(this.props.flag);
        this._loadData();
    }
    _loadData(){
        this.languageDao.fetch().then((data)=> {
            this._getCheckedItems(data);
        }).catch((error)=> {
            console.log(error);
        });
    }
    _getCheckedItems(result){
        this.dataArray = result;
        let checkedArray = [];
        for(let i=0; i<result.length;i++){
            let data = result[i];
            if(data.checked)checkedArray.push(data);

        }
        this.setState({
            checkedArray: checkedArray
        })
        this.originCheckedArray = _.clone(checkedArray);
    }
    _save(){
        //TODO 判断更改了则保存
        if(!_.isEqual(this.originCheckedArray, this.state.checkedArray)){
            this.languageDao.save(this.state.checkedArray);
            console.log('saved');
        }
    }
    _renderSortCell(row){
        return (
            <ListItem style={{padding:7,margin:0}}>
                <Icon style={{color:'#a4da00'}} name="menu" />
                <Body>
                <Text>{row.name}</Text>
                </Body>
            </ListItem>
        )
    }
    render(){
        return (
            <View style={styles.container}>
                <NavigationBar
                    title={"标签排序"}
                    statusBar={{ backgroundColor: '#B8F4FF',}}
                    style={{backgroundColor: '#B8F4FF'}}
                    leftButton={ViewUtils.getLeftButton(()=>{this._save();this.props.navigator.pop();})}
                    rightButton={ViewUtils.getRightButton('保存',()=>{this._save();this.props.navigator.pop();})}
                />
                <SortableListView
                    data={this.state.checkedArray}
                    order={Object.keys(this.state.checkedArray)}
                    onRowMoved={e => {
                        this.state.checkedArray.splice(e.to, 0, this.state.checkedArray.splice(e.from, 1)[0]);
                        this.forceUpdate();
                    }}
                    renderRow={row => this._renderSortCell(row)}
                >
                </SortableListView>
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
/**
 * Created by lingfengliang on 2017/3/15.
 */
import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Platform,
    StatusBar,
    ListView,
    TouchableOpacity,
    RefreshControl
} from 'react-native';

import NavigationBar from './NavigationBar';
import Toast, {DURATION} from 'react-native-easy-toast'


var data = {
    "result": [
        {
            "email": "abc@163.com",
            "fullName": "张三"
        },
        {
            "email": "abc@163.com",
            "fullName": "张三"
        }
    ],
    "statusCode": 0
}
export default class ListViewTest extends Component{

    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            ds: ds,
            dataSource: ds.cloneWithRows(data.result),
            isRefreshing: true,
        }
        setTimeout(()=>this.setState({
            isRefreshing: false
        }),1000)
    }
    _rederRow(item){
        return <View style={styles.row}>
            <TouchableOpacity
                onPress={()=>{
                    this.toast.show('单击了：' + item.fullName, DURATION.LENGTH_SHORT)
                }}
            >
                <Text style={styles.tips}>{item.fullName}</Text>
                <Text style={styles.tips}>{item.email}</Text>
            </TouchableOpacity>
        </View>;
    }
    _renderSeparator(sectionID, rowID, adjacentRowHighlighted){
        return <View key={rowID} style={styles.line}></View>;
    }
    _renderFooter(){
        return  <Image style={{width: 400,height:100}} source={{uri:'https://a-ssl.duitang.com/uploads/item/201401/16/20140116183459_L3kRJ.gif'}}></Image>
    }
    _renderRefreshControl(){
        return <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this._onRefresh.bind(this)}
            tintColor="#ff0000"
            title="努力加载中..."
            titleColor="#B57EFF"
            colors={['#ff0000', '#00ff00', '#0000ff']}
            progressBackgroundColor="#ffff00"
        ></RefreshControl>
    }
    _onRefresh(){
        this.setState({isRefreshing: true});
        setTimeout(() => {
            // prepend 10 items
            const rowData = Array.from(new Array(10))
                .map((val, i) => ({
                    text: 'Loaded row ' + (+this.state.loaded + i),
                    clicks: 0,
                }))
                .concat(this.state.rowData);
            data.result.splice(0,0,{
                "fullName": "Alice",
                "email": new Date().getTime()+'@qq.com'
            });
            this.setState({
                isRefreshing: false,
                dataSource: this.state.ds.cloneWithRows(data.result)
            });
        }, 1000);
    }
    render(){
        return(<View style={styles.container}>
            <NavigationBar
                title={"ListViewTest"}
                statusBar={{
                    backgroundColor: 'red',
                }}
                style={{backgroundColor: 'red'}}
            />
            <ListView dataSource={this.state.dataSource}
                renderRow={(item)=>this._rederRow(item)}
                renderSeparator={(sectionID, rowID, adjacentRowHighlighted)=>this._renderSeparator(sectionID, rowID, adjacentRowHighlighted)}
                renderFooter={()=>this._renderFooter()}
                refreshControl={this._renderRefreshControl(this)}
            >

            </ListView>
            <Toast ref={(toast)=>this.toast=toast}/>
        </View>);
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    text: {
        fontSize: 22,
    },
    tips: {
        fontSize: 18
    },
    row: {
        height: 50
    },
    line: {
        height: 1,
        backgroundColor: 'black'
    }

})
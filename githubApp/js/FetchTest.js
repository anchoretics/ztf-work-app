/**
 * Created by lingfengliang on 2017/3/13.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';

import NavigationBar from './Components/NavigationBar';
import Utils from './Utils';

var AppKey = "mnjfkldshamdlkas";

export default class FetchTest extends Component{
    constructor(props){
        super(props);
        this.state = {
            result: ''
        }
    }
    _refreshData(url){
        Utils.get(url)
        .then(result=>{
            this.setState({
                result: JSON.stringify(result)
            });
        }).catch((error) => {
            console.error(error);
        });
    }
    _testLogin(){
        let url = 'http://ztf.io:9999/workhour/showReportItemList.jhtml?workId=758B97258EC72F269D56B74842DD6AC7&random=1489585637726';
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/xml, text/xml, */*; q=0.01',
                'Cache-Control': 'no-cache',
                'Cookie': 'JSESSIONID=00371E50D3D4E22E757184762C8F0231'
            }
        }).then(response=>{
            return response.text();
        }).then(result=>{
            // console.log(result);
            let showList = {
                init(){

                }
            };
            let str = result.match(/<script\>[\s\S]*<\/script>/)[0].replace(/<script>|<\/script>/g,'');
            console.log(eval(str));
            console.log(reportItemList);
            this.setState({
                result: result
            });

        });
    }
    renderButton(img){
        return (
            <TouchableOpacity onPress={()=>{
                this.props.navigator.pop()
            }}>
                <Image style={{width:22,height:22,margin:5}} source={img}></Image>
            </TouchableOpacity>
        )
    }

    render(){
        return(<View style={styles.container}>
            <NavigationBar title={"FetchTest"}
                statusBar={{
                    backgroundColor: 'red',
                }}
                style={{backgroundColor: 'red'}}
                leftButton={
                    this.renderButton(require('./../res/images/ic_arrow_back_white_36pt.png'))
                }
                rightButton={
                    this.renderButton(require('./../res/images/ic_star.png'))
                }

            />
            <Text style={styles.text}
                onPress={()=>{
                    this._refreshData('http://rap.taobao.org/mockjsdata/15363/list');
                }}
            >获取数据</Text>
            <Text style={styles.text}
                onPress={()=>{
                    this._testLogin();
                }}
            >提交登录</Text>
            <Text style={styles.text}>结果：</Text>
            <ScrollView>
                <Text style={styles.tip}>{this.state.result}</Text>
            </ScrollView>
        </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        backgroundColor: 'pink',
    },
    text: {
        fontSize: 22,
    },
    tip: {
        fontSize: 11
    }
})
/**
 * Created by lingfengliang on 2017/3/17.
 */
import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    AsyncStorage,
    Alert,
    ScrollView,
    TouchableHighlight,
    Image,
    Text
} from 'react-native';

import NavigationBar from '../../Components/NavigationBar';
import CustomKeyPage from './CustomKeyPage';
import SortKeyPage from './SortKeyPage2';
import {FLAG_LANGUAGE} from "../../expand/dao/LanguageDao";
import ViewUtils from '../../util/ViewUtils'


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
                <ScrollView>
                    <TouchableHighlight
                        onPress={()=>{
                            this.props.navigator.push({
                                component: SortKeyPage,
                                params: {...this.props,flag:FLAG_LANGUAGE.flag_key}
                            });
                        }}>
                        <View style={styles.setting_item_container}>
                            <View style={{alignItems: 'center', flexDirection: 'row'}}>
                                <Image source={require('./img/ic_swap_vert.png')} resizeMode='stretch'
                                       style={{opacity: 1, width: 16, height: 16, marginRight: 10,}}/>
                                <Text>标签排序</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    setting_item_container: {
        backgroundColor: 'white',
        padding: 10, height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
})
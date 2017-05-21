/**
 * Created by lingfengliang on 2017/3/15.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    TouchableOpacity,
    ListView,
    RefreshControl
} from 'react-native';

import NavigationBar from '../Components/NavigationBar';
import ScrollableTabView, {ScrollableTabBar,} from 'react-native-scrollable-tab-view';
import RepositoryCell from '../Components/RepositoryCell'
import RepositoryDetail from './RepositoryDetail'

import DataRepository, {FLAG_STORAGE} from '../expand/dao/DataRepository'
import LanguageDao, {FLAG_LANGUAGE} from '../expand/dao/LanguageDao'
import Utils from '../Utils';

const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&page=1&per_page=10&sort=stars';
const dataRepository = new DataRepository(FLAG_STORAGE.flag_popular);

export default class PopularPage extends Component{
    constructor(props){
        super(props);
        this.languageDao = new LanguageDao(FLAG_LANGUAGE.flag_key);
        this.state = {
            loading: false,
            languages: []
        }
    }

    componentDidMount(){

        this.loadLanguage();
    }
    loadLanguage() {
        this.languageDao.fetch().then((languages)=> {
            if (languages) {
                this.setState({
                    languages: languages,
                });
            }
        }).catch((error)=> {

        });
    }
    render(){
        let content = this.state.languages.length > 0 ?
            <ScrollableTabView
                renderTabBar={() => <ScrollableTabBar />}
                tabBarBackgroundColor={"#B8F4FF"}
            >
                {this.state.languages.map((reuslt, i, arr)=> {
                    let language = arr[i];
                    return language.checked ? <PopularTab key={i} tabLabel={language.name} {...this.props}/> : null;
                })}
            </ScrollableTabView> : null;

        return (
        <View style={styles.container}>
            <NavigationBar title={"最热门"}
                           statusBar={{
                               backgroundColor: '#B8F4FF',
                           }}
                           style={{backgroundColor: '#B8F4FF'}}

            />
            {content}
        </View>)
    }
}

class PopularTab extends Component{
    constructor(props){
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2}),
            isRefreshing: false
        }
    }
    componentDidMount(){
        this.loadData();
    }
    loadData(){
        this.setState({
            isRefreshing: true
        });
        let url = this.genUrl();
        dataRepository
            .fetchRepository(url)
            .then(result=> {
                this.items = result && result.items ? result.items : result ? result : [];
                // this.getFavoriteKeys();
                if (result && result.update_date && !Utils.checkDate(result.update_date)){
                    return dataRepository.fetchNetRepository(url);
                }else{
                    return result.items;
                }
            })
            .then((items)=> {
                if (!items || items.length === 0)return;
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(items),
                    isRefreshing: false
                })
            })
            .catch(error=> {
                console.log(error);
                this.setState({
                    isRefreshing: false
                });
            })
    }
    genUrl(){
        return URL+this.props.tabLabel+QUERY_STR;
    }
    _renderRow(data){
        return (
            <RepositoryCell onSelect={this.onSelect.bind(this)} data={data}/>
        )
    }
    _renderRefreshControl(){
        return (
            <RefreshControl
                refreshing={this.state.isRefreshing}
                onRefresh={()=>this.loadData()}
                tintColor="#ff0000"
                title="努力加载中..."
                titleColor="#B57EFF"
                colors={['#ff0000', '#00ff00', '#0000ff']}
                progressBackgroundColor="#ffff00"
            />
        )
    }
    onSelect(item){
        console.log(item);
        this.props.navigator.push({
            component: RepositoryDetail,
            params: {
                ...this.props,
                item: item
            }
        });
    }
    render(){
        return(
            <View style={{flex: 1,margin:5}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(data) => this._renderRow(data)}
                    refreshControl={this._renderRefreshControl()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});
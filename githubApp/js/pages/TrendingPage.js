/**
 * Created by lingfengliang on 2017/3/29.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity,
    ListView,
    RefreshControl
} from 'react-native';

import NavigationBar from '../Components/NavigationBar';
import { Spinner, Tabs, Tab, Body, ScrollableTab, Text, View, Content, Container, Header, Title, Button, Icon, InputGroup, Input, ListItem, List, Radio, CheckBox, Thumbnail, Card, CardItem, H3 } from 'native-base';
import RepositoryDetail from './RepositoryDetail'
import HTMLView from 'react-native-htmlview'

import LanguageDao, {FLAG_LANGUAGE} from '../expand/dao/LanguageDao'
import DataRepository, {FLAG_STORAGE} from '../expand/dao/DataRepository'
import GitHubTrending from 'GitHubTrending'
import Utils from '../Utils';

const dataRepository = new DataRepository(FLAG_STORAGE.flag_trending);


const API_URL = 'https://github.com/trending/'

export default class TrendingPage extends Component{
    constructor(props){
        super(props);
        this.languageDao = new LanguageDao(FLAG_LANGUAGE.flag_language);
        this.trending = new GitHubTrending();
        this.state = {
            loading: true,
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
                    loading: false
                });
            }
        }).catch((error)=> {

        });
    }
    renderTabs(){
        let _tabs = [];
        if(this.state.languages.length>0){
            for(let i=0;i<this.state.languages.length;i++){
                if(this.state.languages[i].checked){
                    _tabs.push(
                        <Tab key={i} heading={this.state.languages[i].name}>
                            <TrendingTab item={this.state.languages[i]} {...this.props} />
                        </Tab>
                    )
                }
            }
        }
        return <Tabs
                    renderTabBar={() => <ScrollableTab />}
                >
                    {_tabs}
                </Tabs>;
    }
    render(){
        let content = this.state.languages.length > 0 ? this.renderTabs() : null;
        return (
            <Container>
                <NavigationBar
                    title={"趋势"}
                    statusBar={{
                       backgroundColor: '#B8F4FF',
                    }}
                    style={{backgroundColor: '#B8F4FF'}}
                />
                {content}
            </Container>
        )
    }
}
class TrendingTab extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            items: []
        }
    }
    componentDidMount(){
        this.loadData();
    }
    loadData(){
        this.setState({
            loading: true
        });
        let url = this.genUrl();
        dataRepository
            .fetchRepository(url)
            .then(result=> {
                // this.getFavoriteKeys();
                if (result && result.update_date && !Utils.checkDate(result.update_date)){
                    return dataRepository.fetchNetRepository(url);
                }else{
                    let items = result && result.items ? result.items : result ? result : [];
                    return items;
                }
            })
            .then((items)=> {
                if (!items || items.length === 0)return;
                this.setState({
                    loading: false,
                    items: items
                })
            })
            .catch(error=> {
                console.error(error);
                this.setState({
                    loading: false
                });
            })
    }
    genUrl(){
        return API_URL+this.props.item.path;
    }

    _renderRefreshControl(){
        return (
            <RefreshControl
                refreshing={this.state.loading}
                onRefresh={()=>this.loadData()}
                tintColor="#ff0000"
                title="努力加载中..."
                titleColor="#B57EFF"
                colors={['#ff0000', '#00ff00', '#0000ff']}
                progressBackgroundColor="#ffff00"
            />
        )
    }
    render(){
        return (
                <Container>
                    <Content
                        refreshControl={this._renderRefreshControl()}>
                        <List
                            dataArray={this.state.items} renderRow={(data) => {
                                let p = '<span>'+ data.description +'</span>';
                                return (
                                    <ListItem
                                        onPress={()=>{
                                        this.props.navigator.push({
                                            component: RepositoryDetail,
                                            params: {
                                                ...this.props,
                                                item: data
                                            }
                                        });}}
                                    >
                                    <Body>
                                    <Text>{data.fullName}</Text>
                                    <View style={{marginLeft:10,marginRight:10}}>
                                        <HTMLView
                                            style={{marginLeft:10}}
                                            stylesheet={styles}
                                            value={p}
                                            onLinkPress={(url) => console.log('clicked link: ', url)}
                                        />
                                    </View>
                                    <View style={{flex:1,flexDirection: 'row', alignItems: 'center' , marginLeft:10,marginRight:10,marginTop:5}}>
                                        <Text note>Builders: </Text>
                                        {data.contributors.map((r,i,d)=>{
                                            return <Image key={i} style={{width:22,height:22,marginRight:2,borderRadius:2}} source={{uri:d[i]}}/>
                                        })}
                                    </View>
                                    </Body>
                                </ListItem>)

                                }

                            }
                        />
                    </Content>
                </Container>
        );
    }
}

const styles = StyleSheet.create({
    span: {
        flex:1,
        flexDirection: 'row',
        marginLeft:10,
        marginRight:10,
        paddingLeft:10,
        color: 'gray'
    },
    a: {
        fontWeight: '300',
        color: '#FF3366', // pink links
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});
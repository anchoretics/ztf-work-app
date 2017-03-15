/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon} from 'native-base';
import LoginPage from './views/LoginPage';

export default class app extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '我的工时',
            selectedTab: '工时',
            isLogin: false
        }

    }
    handleLogin(result){
        if(result==true){
            this.setState({
                isLogin: true
            });
        }
    }
    render() {
        return (
            this.state.isLogin?(
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{this.state.title}</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Right>
                </Header>

                <Content>
                    <Text>内容</Text>
                </Content>

                <Footer>
                    <FooterTab>
                        <Button
                            onPress={()=>{
                                this.setState({
                                    selectedTab: '工时',
                                    title: '工时'
                                })
                            }}>
                            <Icon name="paper" style={{color:'#ffc125'}} active={this.state.selectedTab=='工时'}/>
                            <Text>工时</Text>
                        </Button>
                        <Button
                            onPress={()=>{
                                this.setState({
                                    selectedTab: '费用',
                                    title: '费用'
                                })
                            }}>
                            <Icon name="paper-plane" style={{color:'#ffc125'}} active={this.state.selectedTab=='费用'}/>
                            <Text>费用</Text>
                        </Button>
                        <Button
                            onPress={()=>{
                                this.setState({
                                    selectedTab: '报销',
                                    title: '报销'
                                })
                            }}>
                            <Icon name="nuclear" style={{color:'#ffc125'}} active={this.state.selectedTab=='报销'}/>
                            <Text>报销</Text>
                        </Button>
                        <Button
                            onPress={()=>{
                                this.setState({
                                    selectedTab: '出差',
                                    title: '出差'
                                })
                            }}>
                            <Icon name="planet" style={{color:'#ffc125'}} active={this.state.selectedTab=='出差'}/>
                            <Text>出差</Text>
                        </Button>
                        <Button
                            onPress={()=>{
                                this.setState({
                                    selectedTab: '我',
                                    title: '个人资料'
                                })
                            }}>
                            <Icon name="happy" style={{color:'#ffc125'}} active={this.state.selectedTab=='我'}/>
                            <Text>我</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>): (
            <Container>
                <Content>
                    <LoginPage onLogin={this.handleLogin.bind(this)}></LoginPage>
                </Content>
            </Container>)
        );

    }

}


const styles = StyleSheet.create({
    button: {
        height: 50
    },
    tab: {
        height: '45'
    },
    icon: {
        color: '#FDBD00'
    }
})


AppRegistry.registerComponent('app', () => app);

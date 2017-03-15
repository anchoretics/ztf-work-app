/**
 * Created by lingfengliang on 2017/3/8.
 */
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Container, Content, Item, Input, Button, Form, Label } from 'native-base';

class LoginPage extends Component {
    constructor(props){
        super(props)
        this.state = {

        }

    }
    onPress() {
        // call getValue() to get the values of the form
        console.log(this);
        // let value = this.refs.form.getValue();
        // if (value) { // if validation fails, value will be null
        //     console.log(value); // value here is an instance of Person
        // }
    }
    render() {
        return (
            <Container>
                <View style={styles.view}>
                </View>
                <Content>
                    <Form>
                        <Item fixedLabel>
                            <Label>用户名</Label>
                            <Input ref="inputUsername" placeholder="请输入用户名"/>
                        </Item>
                        <Item fixedLabel last>
                            <Label>密码</Label>
                            <Input placeholder="请输入密码"/>
                        </Item>
                        <View style={{marginTop:20}}>
                        </View>
                        <Button ref="loginBtn" block success style={{marginLeft:10,marginRight:10}} onPress={()=>{this.props.onLogin(true)}}>
                            <Text style={{fontSize:18}}>登录</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    view:{
        marginTop: 100
    },
    container: {
        justifyContent: 'center',
        marginTop: '100px',
        padding: '20px',
        backgroundColor: '#85ff60',
    },
    title: {
        fontSize: 30,
        alignSelf: 'center',
        marginBottom: 30
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    button: {
        height: 36,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
});
module.exports = LoginPage;
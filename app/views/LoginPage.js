/**
 * Created by lingfengliang on 2017/3/8.
 */
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Container, Content, Item, Input, Button } from 'native-base';
import t from 'tcomb-form-native';

const Form = t.form.Form;

let Person = t.struct({
    username: t.String,              // a required string
    password: t.String,  // an optional string
    autologin: t.Boolean        // a boolean
});
let options = {
    auto: 'placeholders',
    fields: {
        username: {
            label: '',
            placeholder: '用户名'
        },
        password: {
            label: '',
            placeholder: '密码'
        },
        autologin: {
            label: '自动登录',
            value: true
        }
    }
}; // optional rendering options (see documentation)
let values = {
    autologin: true
}

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
            <View style={styles.container}>
                <Form
                    ref="form1"
                    type={Person}
                    options={options}
                    value={values}
                />
                <Button block success>
                    <Text>Success</Text>
                </Button>
            </View>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffffff',
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
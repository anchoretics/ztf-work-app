/**
 * Created by lingfengliang on 2017/3/17.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    TouchableOpacity,
    ListView
} from 'react-native';

export default class RepositoryCell extends Component{

    render(){
        return(
            <TouchableOpacity>
                <View style={styles.cell_container}>
                    <Text style={styles.title}>{this.props.data.full_name}</Text>
                    <Text style={styles.description}>{this.props.data.description}</Text>
                    <View style={styles.row}>
                        <View style={{flexDirection:'row', alignItems: 'center'}}>
                            <Text>Author: </Text>
                            <Image style={{height:22,width:22}} source={{uri: this.props.data.owner.avatar_url}}></Image>
                        </View>
                        <View style={{flexDirection:'row', alignItems: 'center'}}>
                            <Text>Stars: {this.props.data.stargazers_count}</Text>
                        </View>
                        <Image style={{width:22,height:22}} source={require('../../res/images/ic_star.png')}></Image>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 16,
        marginBottom: 2,
        color: '#210b0c'
    },
    description: {
        fontSize: 14,
        marginBottom: 2,
        color: '#757575',
    },
    cell_container: {
        backgroundColor: 'white',
        padding: 10,
        marginLeft: 5,
        marginRight: 5,
        marginVertical: 3,
        borderRadius: 3,
        borderColor: 'gray',
        borderWidth: 0.5,
        shadowColor: 'gray',
        shadowOffset: {width:2,height:2},
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation:2
    },
    row: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
})
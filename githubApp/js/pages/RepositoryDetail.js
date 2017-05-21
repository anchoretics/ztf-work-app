/**
 * Created by lingfengliang on 2017/3/28.
 */
import React, {Component} from 'react'
import {
    Image,
    ScrollView,
    StyleSheet,
    WebView,
    Platform,
    TouchableOpacity,
    Text,
    View,
} from 'react-native'
import NavigationBar from '../Components/NavigationBar'
import ViewUtils from '../ViewUtils'


const GITHUB_URL = 'https://github.com/';

export default class RepositoryDetail extends Component {
    constructor(props) {
        super(props);
        this.url = this.props.item.html_url || (GITHUB_URL + this.props.item.fullName);
        var title = this.props.item.full_name || this.props.item.fullName;

        this.state = {
            url: this.url,
            canGoBack: false,
            title: title,
        }
    }
    componentDidMount(){

    }
    componentWillUnmount() {

    }

    onBack() {
        if (this.state.canGoBack) {
            this.webView.goBack();
        } else {
            this.props.navigator.pop();
        }
    }

    onNavigationStateChange(navState) {
        console.log(navState);
        this.setState({
            canGoBack: navState.canGoBack,
            url: navState.url,
        });
    }

    render() {
        var titleLayoutStyle=this.state.title.length>20?{paddingRight:30}:null;
        return (
            <View style={styles.container}>
                <NavigationBar
                    leftButton={ViewUtils.getLeftButton(()=>this.onBack())}
                    popEnabled={false}
                    title={this.state.title}
                    titleLayoutStyle={titleLayoutStyle}
                    statusBar={{
                        backgroundColor: '#B8F4FF',
                    }}
                    style={{backgroundColor: '#B8F4FF'}}
                />
                <WebView
                    ref={webView=>this.webView = webView}
                    startInLoadingState={true}
                    onNavigationStateChange={(e)=>this.onNavigationStateChange(e)}
                    source={{uri: this.state.url}}
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
})

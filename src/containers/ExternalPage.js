import React from 'react';
import Header from '../components/Header';
import {WebView} from 'react-native-webview';

function ExternalPage({navigation}) {
    const externalUrl = navigation.getParam('external_url');
    return (
        <>
        <Header secao='globo'/>
    <WebView style={{flex:1}} source={{uri: `${externalUrl}`}}/>
    </>)
}

export default ExternalPage;
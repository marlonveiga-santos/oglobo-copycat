import React from 'react';
import {WebView} from 'react-native-webview';

function ExternalPage({navigation}) {
    const externalUrl = navigation.getParam('external_url');
    return <WebView style={{flex:1}} source={{uri: `${externalUrl}`}}/>
}

export default ExternalPage;
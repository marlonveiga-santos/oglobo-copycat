import React from "react";
import { WebView } from "react-native-webview";

function ExternalPage(props) {
  const { navigation } = props;
  const externalUrl = navigation.getParam("external_url");

  React.useEffect(() => {
    navigation.setParams({
      headerTitle: "Web - Viewer"
    });
  }, []);

  return (
    <>
      <WebView style={{ flex: 1 }} source={{ uri: `${externalUrl}` }} />
    </>
  );
}

ExternalPage.navigationOptions = props => {
  return {
    title: props.navigation.getParam("headerTitle")
  };
};
export default ExternalPage;

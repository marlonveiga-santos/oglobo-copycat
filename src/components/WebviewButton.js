import React from 'react'
import { linkEvaluator } from "../selectors/headerSelectors";

import {
    StyleSheet,
    Text,
    SafeAreaView,
    ImageBackground,
    ScrollView,
    View
  } from "react-native";

  export default function WebviewButton(props) {
      return(
        <Text
        style={styles.external}
        onPress={() => {
          props.navigation("ExternalPage", {
            external_url: props.externalUrl
          });
        }}
      >
        {linkEvaluator(props.externalUrl)}
      </Text>
      )
  }

  const styles = StyleSheet.create({
    external: {
      fontSize: 24,
      color: "#fff",
      fontWeight: "900",
      transform: [{ scaleX: -1 }],
      marginRight:24
    }
  });
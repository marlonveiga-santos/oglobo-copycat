import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function NotFound(props) {
  const { navigation } = props;

  React.useEffect(() => {
    navigation.setParams({
      headerTitle: "404"
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Conteúdo ausente!</Text>
    </View>
  );
}

NotFound.navigationOptions = props => {
  return {
    title: props.navigation.getParam("headerTitle")
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

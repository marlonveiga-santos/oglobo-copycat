import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  View
} from "react-native";

import {
  evaluator,
  textEvaluator,
  legendEvaluator,
  byEvaluator,
  dateEvaluator,
  imageLoader
} from "../selectors/newsPageSelectors";

import WebviewButton from "../components/WebviewButton";

function NewsPage(props) {
  const { navigation } = props;
  const payload = navigation.getParam("payload");

  React.useEffect(() => {
    navigation.setParams({
      headerTitle: payload.secao.nome.toUpperCase(),
      headerRight: (
        <WebviewButton
          externalUrl={payload.urlOriginal}
          navigation={navigation.navigate}
        />
      )
    });
  }, []);

  return (
    <SafeAreaView
      style={styles.container}
      onPress={() => navigation.navigate("Headlines")}
    >
      <ScrollView>
        <Text style={styles.titulo}>{evaluator(payload.titulo)}</Text>
        <Text style={styles.subTitulo}>{evaluator(payload.subTitulo)}</Text>
        <Text style={styles.porData}>{byEvaluator(payload.autores)}</Text>
        <Text style={styles.porData}>
          &#128344; {dateEvaluator(payload.publicadoEm)}
        </Text>
        <View>
          <ImageBackground
            source={imageLoader(payload.imagens.map(item => item.url))}
            style={styles.imagem}
          >
            <Text style={styles.legenda}>
              {legendEvaluator(payload.imagens.map(item => item.legenda))}
            </Text>
          </ImageBackground>
        </View>
        <View>
          <Text style={styles.texto}>{textEvaluator(payload.texto)}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

NewsPage.navigationOptions = props => {
  return {
    title: props.navigation.getParam("headerTitle"),
    headerRight: props.navigation.getParam("headerRight")
  };
};

const styles = StyleSheet.create({
  container: {
    minHeight: "100%"
  },
  titulo: {
    color: "#19334c",
    padding: "2%",
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: "bold"
  },
  subTitulo: {
    color: "#a0b5bf",
    padding: "2%",
    fontSize: 18,
    fontWeight: "bold"
  },
  porData: {
    color: "#a0b5bf",
    padding: "2%",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center"
  },
  legenda: {
    color: "#a0b5bf",
    fontWeight: "bold",
    backgroundColor: "rgba(0, 0, 0, 0.551)",
    alignSelf: "flex-start",
    marginLeft: "3%",
    padding: "1%"
  },
  imagem: {
    width: "100%",
    height: 195,
    justifyContent: "flex-end"
  },
  texto: {
    textAlign: "left",
    fontSize: 18,
    padding: "2%"
  },
  external: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "900",
    transform: [{ scaleX: -1 }],
    marginRight: 24
  }
});

export default NewsPage;

import React, { useState, useEffect } from "react";
import { newsSource } from "../connections/api";
import { StyleSheet, SafeAreaView, ScrollView, View } from "react-native";
import { defaultStyle, firstItemStyle } from "../styles/HeadlineItemStyle";
import HeadlineItems from "../components/HeadlineItems";

function Headlines({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    newsSource().then(response => setData(response[0].conteudos));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {data.map((item, k) => {
          let urlCapture = item.imagens.map(item => item.url);
          return (
            <View key={item.id}>
              <HeadlineItems
                stylesTypes={k === 0 ? firstItemStyle : defaultStyle}
                titulo={item.titulo}
                secao={item.secao.nome}
                imageUrl={urlCapture}
                imageItem={item.imagens}
                titulo={item.titulo}
                item={() =>
                  navigation.navigate("NewsPage", {
                    payload: item
                  })
                }
              />
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default React.memo(Headlines);

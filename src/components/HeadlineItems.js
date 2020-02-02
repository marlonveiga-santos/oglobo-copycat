import React, { useState, useEffect } from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import { imageLoader } from "../selectors/newsPageSelectors";

function HeadlineItems(props) {
  const [styles, setStyles] = useState([]);

  const stylesTypes = props.stylesTypes;

  useEffect(() => {
    function styling() {
      setStyles(stylesTypes);
    }

    styling();
  }, [stylesTypes]);

  return (
    <View style={styles.artigo}>
      <View imageItem={props.imageItem} style={{ flex: 1 / 2 }}>
        <Image source={imageLoader(props.imageUrl)} style={styles.imagem} />
      </View>
      <View style={[{ flex: 1 }, styles.toFirst]}>
        <Text style={styles.secao}>{props.secao}</Text>
        <TouchableOpacity onPress={props.item}>
          <Text style={styles.titulo}>{props.titulo}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default React.memo(HeadlineItems);

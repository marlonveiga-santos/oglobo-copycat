import { StyleSheet } from "react-native";

// NOTE: Created just for handle conditional styling

export const defaultStyle = StyleSheet.create({
  titulo: {
    color: "#19334c",
    textTransform: "uppercase",
    fontSize: 16,
    fontWeight: "bold"
  },
  secao: {
    color: "#a0b5bf",
    fontWeight: "bold"
  },
  imagem: {
    margin: "8%",
    height: 80,
    maxWidth: "80%"
  },
  artigo: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  imageNotFound: {
    width: "85%",
    height: "5%",
    padding: 35,
    margin: "10%"
  }
});

export const firstItemStyle = StyleSheet.create({
  titulo: {
    color: "#fff",
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: "bold"
  },
  secao: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#000",
    padding: "1%",
    alignSelf: "flex-start",
    marginLeft: "43%",
    marginTop: "45%"
  },
  imagem: {
    height: 250,
    minWidth: "100%"
  },
  artigo: {
    flexDirection: "column",
    flexWrap: "wrap",
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  toFirst: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  }
});

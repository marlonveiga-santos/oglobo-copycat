import moment from "moment";

const fallback = "";

export function evaluator(comparatorItem) {
  if (comparatorItem === undefined) {
    return fallback;
  } else {
    return comparatorItem;
  }
}

export function byEvaluator(comparatorItem) {
  if (comparatorItem === undefined) {
    return "";
  } else {
    return "POR: " + comparatorItem;
  }
}

export function dateEvaluator(comparatorItem) {
  if (comparatorItem === undefined) {
    return "";
  } else {
    return moment(comparatorItem).format("DD/MM/YYYY[ às ]HH:mm:ss");
  }
}

export function imageLoader(image) {
  // api_path = payload.imagens.map(item => item.url);

  if (image.length === 0) {
    return require("../../assets/imageNotFound.png");
  } else {
    return { uri: "" + image };
  }
}

export function textEvaluator(comparatorItem) {
  if (comparatorItem === undefined) {
    return "Texto Ausente :( \n \n Clique no ícone Link externo(⇱) para ver no site.";
  } else {
    return comparatorItem;
  }
}

export function legendEvaluator(comparatorItem) {
  if (comparatorItem.length === 0) {
    return "Legenda ausente. ";
  } else {
    return comparatorItem;
  }
}

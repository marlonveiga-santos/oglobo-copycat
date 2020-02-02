import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { backEvaluator, linkEvaluator, handleLink } from '../selectors/headerSelectors';

export default function Header(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.back} onPress={props.back}>
        {backEvaluator(props.back)}
      </Text>
      <Text style={styles.title}>	 <Text>{props.secao}</Text> </Text>
      <Text style={styles.external} onPress={() => {
        props.navigation.navigate('ExternalPage', { external_url:props.external })}
        }>
        {linkEvaluator(props.external)}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1 / 20,
    backgroundColor: '#125e92',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    minHeight: '14%',
    flexDirection: 'row',

  },
  title: {
    color: '#fff',
    fontWeight: '900',
    paddingTop: '2%',
    fontSize: 24,
    textTransform: 'uppercase'
  },
  back: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '900',
    padding: '4%'
  },
  external: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '900',
    transform: [{ scaleX: -1 }],
    padding: '4%',
  },
});



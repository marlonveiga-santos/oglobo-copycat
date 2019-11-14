import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from '../components/Header';

export default function NotFound(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Header>Erro</Header>
      <Text>Conteúdo ausente!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Headlines')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
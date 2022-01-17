import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import SearchComp from './component/SearchComp';
import SearchResultComp from './component/SearchResultComp';



export default function App() {
  return (
    <View style={styles.container}>
      <SearchComp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

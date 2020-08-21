import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { styles } from './src/styles/home.js'
import {CatFacts} from "./src/catFactsIndex";

export default function App() {
    return (
    <View style={styles.container}>
      <CatFacts/>
    </View>
  );
}


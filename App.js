import React, {useState} from 'react';
import {StyleSheet, Button, Image, TextInput, Text, View} from 'react-native';

const Cat = () => {
  const name = 'Liyu';
  return (
    <View>
      <Image
        source={{uri: 'https://reactnative.dev/docs/assets/p_cat1.png'}}
        style={{width: 200, height: 200}}
      />
      <Text>Hello, I am your cat, {name}</Text>
    </View>
  );
};

const App = () => {
  return (
    <View>
      <Cat />
    </View>
  );
};

export default App;

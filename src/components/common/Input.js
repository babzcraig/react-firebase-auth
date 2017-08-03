import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={{ width: 100, height: 20 }} />
    </View>
  )
};

export { Input };
import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function Country({ country }) {
  return (
    <View>
      <Image
        source={{ uri: country.flags.png }}
        style={{ width: 300, height: 200 }}
      />
      <Text style={styles.header}>{country.name.common}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    margin: 50,
    fontSize: 30,
    color: "red",
  },
});

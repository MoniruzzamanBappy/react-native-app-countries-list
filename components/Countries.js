import { View, Text, ScrollView,StyleSheet, SafeAreaView, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import Country from "./Country";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [searched, setSearched] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  const handleCountrySearch = text =>{
      const filtered = countries.filter(country=>country.name.common.includes(text));
      setSearched(filtered)
  }
  return (
    <View>
      <Text>Countries here!</Text>
      <Text>Total Countries: {countries?.length}</Text>
      <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={handleCountrySearch}
        placeholder='Type your name'
      />
      </SafeAreaView>
      <ScrollView>
        {searched?.map((country) => (
          <Country key={country.ccn3} country={country}></Country>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
  });
  
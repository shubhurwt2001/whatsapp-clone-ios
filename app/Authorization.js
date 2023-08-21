import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import FlatButton from "../components/FlatButton";
import { Stack, useRouter } from "expo-router";
import SelectButton from "../components/SelectButton";
import { useSelector } from "react-redux";
import { useState } from "react";

const Authorization = () => {
  const navigation = useRouter();
  const country = useSelector((state) => state.country.value);
  const [number, setNumber] = useState("");
  const selectCountry = () => {
    navigation.push("/Countries");
  };

  return (
    <>
      <StatusBar style="auto" />
      <Stack.Screen
        options={{
          title: "Phone number",
          headerRight: () => <FlatButton title="Done" press={() => {}} disabled={number.length <= 9 || !country} />,
          headerBackTitleVisible: false,
          headerBackButtonMenuEnabled: false,
          headerBackVisible: false,
          gestureEnabled: false,
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Please confirm your country code and enter your phone number</Text>
        <View style={styles.section}>
          <SelectButton title={country ? country.title : "Select Country"} press={selectCountry} titleColor="#007AFF" icon="chevron-forward-sharp" />
          <View style={styles.seperator}></View>
          <View style={styles.number}>
            <Text style={styles.code}>{country ? country.subtitle : "-"}</Text>
            <TextInput inputMode="numeric" maxLength={10} value={number} onChangeText={(e) => setNumber(e)} style={styles.input} placeholder="phone number" />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    width: 300,
    textAlign: "center",
    paddingHorizontal: 10,
    paddingVertical: 19,
    fontSize: 15,
  },
  section: {
    width: "100%",
    height: 90,
    borderTopWidth: 1,
    borderColor: "#f6f6f6",
  },
  seperator: {
    width: "100%",
    height: 1,
    backgroundColor: "#f6f6f6",
    marginLeft: 16,
  },
  number: {
    width: "100%",
    paddingLeft: 16,
    paddingRight: 8,
    paddingVertical: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    borderBottomWidth: 1,
    borderColor: "#f6f6f6",
  },
  code: {
    fontSize: 27,
    width: "25%",
    textAlign: "center",
    paddingRight: 8,
  },
  input: {
    fontSize: 26,
    width: "75%",
    borderLeftWidth: 1,
    borderLeftColor: "#f6f6f6",
    paddingLeft: 8,
  },
});

export default Authorization;

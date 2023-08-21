import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { countriesData } from "../data/countries";
import { useDispatch, useSelector } from "react-redux";
import Icon from "@expo/vector-icons/Ionicons";
import { setCountry } from "../store/slices/countrySlice";
import SearchBar from "../components/SearchBar";

const Countries = () => {
  const navigation = useRouter();
  const [countries, setCountries] = useState([]);
  const country = useSelector((state) => state.country.value);
  const dispatch = useDispatch();
  useEffect(() => {
    setCountries(countriesData);
  }, []);

  const press = (item) => {
    dispatch(setCountry(item));
    navigation.push("/Authorization");
  };
  const search = (e) => {
    if (e) {
      const filtered = countriesData.filter((x) => x.title.toLowerCase().includes(e.trim().toLowerCase()));
      setCountries([...filtered]);
    } else {
      setCountries([...countries]);
    }
  };
  return (
    <View style={styles.main}>
      <SearchBar search={search} />
      <ScrollView style={styles.container}>
        <Stack.Screen
          options={{
            title: "Your Country",
            headerBackTitleVisible: false,
            headerBackButtonMenuEnabled: false,
            headerBackVisible: true,
            gestureEnabled: true,
          }}
        />

        {countries.map((item, i) => {
          return (
            <Pressable
              key={i}
              onPress={() => {
                press(item);
              }}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "#f6f6f6" : "#fff",
                },
              ]}
            >
              <Item title={item.title} subtitle={item.subtitle} last={i === countries.length - 1} selected={country && country.code === item.code} />
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

const Item = ({ title, subtitle, last, selected }) => (
  <View style={[styles.item, last ? styles.last : ""]}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.innerContainer}>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      {selected && <Icon name="checkmark-sharp" size={22} color="#007AFF"></Icon>}
    </View>
  </View>
);
const styles = StyleSheet.create({
  main: {
    backgroundColor: "#fff",
    flex: 1,
  },
  container: {
    marginBottom: 30,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 44,
    paddingVertical: 12,
    paddingLeft: 0,
    paddingRight: 16,
    borderTopWidth: 0.33,
    marginLeft: 24,
    borderColor: "rgba(60, 60, 67, 0.29)",
  },
  title: {
    fontSize: 17,
  },
  subtitle: {
    fontSize: 17,
    color: "rgba(60, 60, 67, 0.60)",
  },
  last: {
    borderBottomWidth: 0.33,
    borderColor: "rgba(60, 60, 67, 0.29)",
  },
  innerContainer: { gap: 8, display: "flex", justifyContent: "flex-end", alignItems: "center", flexDirection: "row", flexWrap: "nowrap" },
});

export default Countries;

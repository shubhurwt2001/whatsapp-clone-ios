import { StyleSheet, TextInput, View } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
const SearchBar = ({ search }) => {
  return (
    <View style={styles.container}>
      <Icon name="search-sharp" style={styles.icon} size={22} color="#007AFF"></Icon>
      <TextInput style={styles.input} onChangeText={search} placeholder="Search"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginRight: 12,
    marginLeft: 20,
    marginBottom: 12,
    borderWidth: 0.33,
    borderRadius: 10,
    alignItems: "center",
    borderColor: "rgba(60, 60, 67, 0.29)",
    backgroundColor: "#fff",
  },
  icon: {
    paddingHorizontal: 8,
  },
  input: {
    height: 40,
    flex: 1,
  },
});

export default SearchBar;

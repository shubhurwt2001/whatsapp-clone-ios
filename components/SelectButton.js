import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

const SelectButton = ({ title, press, subtitle, height, icon, titleColor }) => {
  return (
    <Pressable
      onPress={press}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#f6f6f6" : "#fff",
        },
      ]}
    >
      <View style={[styles.container, { height: height }]}>
        <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
        <View style={styles.innerContainer}>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
          <Icon name={icon} size={24} color="#ccc"></Icon>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingLeft: 16,
    paddingRight: 8,
    paddingVertical: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "nowrap",
  },
  innerContainer: { gap: 8, display: "flex", justifyContent: "flex-end", alignItems: "center", flexDirection: "row", flexWrap: "nowrap" },
  title: {
    fontSize: 17,
    flex: 1,
  },
  subtitle: {
    fontSize: 17,
    // flex: 1,
    color: "rgba(60, 60, 67, 0.60)",
    // marginRight: 10,
  },
});

export default SelectButton;

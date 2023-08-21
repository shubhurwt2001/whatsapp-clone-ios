import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

const Welcome = () => {
  const navigation = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cat X Dog</Text>
      <Text style={styles.subtitle}>Welcome</Text>
      <Button title="Cats tab" onPress={() => navigation.push("/Authorization")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default Welcome;

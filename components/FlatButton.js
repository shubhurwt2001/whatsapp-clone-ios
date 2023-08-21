import { Button, StyleSheet } from "react-native";

const FlatButton = ({ title, press, disabled }) => {
  return <Button title={title} onPress={press} disabled={disabled} />;
};

const styles = StyleSheet.create({});

export default FlatButton;

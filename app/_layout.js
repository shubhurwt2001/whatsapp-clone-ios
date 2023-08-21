import { Stack } from "expo-router/stack";
import { store } from "../store/store";
import { Provider } from "react-redux";

export default function Layout() {
  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerShadowVisible: false,
          headerStyle: {
            shadowColor: "transparent",
          },
        }}
      />
    </Provider>
  );
}

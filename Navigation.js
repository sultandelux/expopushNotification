import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "@react-navigation/stack";
import Other from "./Other";
import Main from "./Main";

export default function AppNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Other"
        component={Other}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

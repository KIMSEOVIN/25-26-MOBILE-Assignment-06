import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../screens/SignInScreen";
import ListScreen from "../screens/ListScreen";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="seovin"
      screenOptions={{
        headerTintColor: "blue",
        headerBackTitie: "뒤로!",
        headerShown: true, // 필수 적용
      }}
    >
      <Stack.Screen name="seovin" component={SignInScreen} />
      <Stack.Screen name="List" component={ListScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;

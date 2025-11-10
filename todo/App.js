import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import SignInScreen from "./src/screens/SignInScreen";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/navagations/AuthStack";
import ListScreen from "./src/screens/ListScreen";

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />

      <AuthStack />
      {/*여기에 singinScreen이 잇음 */}
      {/*주석은 아래 두기*/}
      {/**쉬프트+알트+F는 자동들여쓰기 */}
    </NavigationContainer>
  );
};

export default App;


import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import SignInScreen from "./src/screens/SignInScreen"; 

const App = () => {
  return (
    // <View> 대신 <View style={{flex: 1}}> 화면전체 감싸기
    <View style={{ flex: 1 }}> 
      <StatusBar style="dark" />
      <SignInScreen /> 
    </View>
  );
};

export default App;
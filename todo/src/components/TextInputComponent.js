import { MaterialIcons } from "@expo/vector-icons";
import React from 'react';
import { View, TextInput, StyleSheet,Text } from 'react-native';

const InputComponent = ({ labelName2, iconName, placeholder, isPassword }) => {
  return (
    <View >
      <Text>{labelName2}</Text>
    
    <View style={styles.container}>
 
      <View style={styles.iconContainer}>
        
        <MaterialIcons name={iconName} size={20} color='gray' />

      </View>


      <TextInput 
        style={styles.input}
        placeholder={placeholder} 
        secureTextEntry={isPassword}
      />
    </View>
    </View>
  );
};

// export const InputComponent2 = ({ placeholder, isPassword }) => {
//   return (
//     <View style={styles.container}>
//       {/* 아이콘을 담는 View */}
//       <View style={styles.iconContainer}>
//         <MaterialIcons name="lock" size={20} color='gray' />
//       </View>

//       <TextInput 
//         style={styles.input}
//         placeholder={placeholder} 
//         secureTextEntry={isPassword}
//       />
//     </View>
//   );
// };

// 3. 스타일 (두 컴포넌트가 공통으로 사용)
const styles = StyleSheet.create({
  container3:{
    flexDirection:'column'
  },

  container: {
    flexDirection: 'row', 
    alignItems: 'center', 
    width: '80%', 
    marginBottom: 15, 
  },
  iconContainer: {
    position: 'absolute', // input 위에 띄우기
    left: 10,             // 왼쪽에서 10px 띄우기
  },
  input: {
    flex: 1, 
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingLeft: 40,      // 아이콘이 들어갈 공간 확보
    paddingRight: 15, 
  }
});

export default InputComponent;

//proptypes 명시하기
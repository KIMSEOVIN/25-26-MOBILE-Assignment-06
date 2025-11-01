import React from 'react';
import { 
  View, 
  StyleSheet, 
  KeyboardAvoidingView, 
  Platform, 
  Pressable,
  Keyboard 
} from 'react-native';
import ImageComponent from '../components/ImageComponent';
import InputComponent, { InputComponent2 } from '../components/TextInputComponent';
import ButtonComponent from '../components/ButtonComponent';

const SignInScreen = () => {
  return (
    <KeyboardAvoidingView
      style={{flex: 1}} // 화면 전체를 차지하도록
      // iOS는 padding, 안드로이드는 height가 좀 더 자연스럽습니다.
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
    >
      {/* 2. Pressable이 컨테이너 역할을 하며, 
           onPress로 키보드를 닫는 기능을 가집니다.
      */}
      <Pressable 
        style={styles.container} // 기존 스타일을 여기에 적용
        onPress={() => Keyboard.dismiss()}
      >
        {/* 모든 UI 컴포넌트를 Pressable 안에 배치 */}
        <ImageComponent /> 


        <InputComponent 
          labelName2="이메일"
          iconName="mail" 
          placeholder="이메일" 
          isPassword={false}
        />

        <InputComponent
          labelName2="비밀번호"
          iconName="lock"
          placeholder="비밀번호" 
          isPassword={true} 
        />

        <ButtonComponent text="로그인" />

      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',   
    backgroundColor: 'white', 
  }
});

export default SignInScreen;

//TextInputComponent에다가
//
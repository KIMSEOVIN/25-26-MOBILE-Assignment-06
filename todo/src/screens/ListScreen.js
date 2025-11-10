import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";


const ListScreen = () => {
    const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerBackTitle: "뒤로가기",
    });
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>투두 리스트</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default ListScreen;

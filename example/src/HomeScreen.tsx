import { Button, Text } from "react-native";
import React from "react";

export const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate("Profile", { name: "Jane" })
      }
    />
  );
};
export const ProfileScreen = ({ route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

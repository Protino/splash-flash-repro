import React, { useEffect } from "react";
import { Platform, StatusBar } from "react-native";
import { AppStack } from "./AppStack";

export const App = () => {

  useEffect(() => {
    // set transparent status bar
    StatusBar.setBarStyle("dark-content");

    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent");
      StatusBar.setTranslucent(true);
    }
  }, []);

  return (
    <AppStack />
  );
};

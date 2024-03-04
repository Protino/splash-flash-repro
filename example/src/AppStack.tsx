import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, ProfileScreen } from "./HomeScreen";
import { useState } from "react";
import { AnimatedBootSplash } from "./AnimatedBootSplash";

const Stack = createNativeStackNavigator();
export const AppStack = () => {
  const [visible, setVisible] = useState(true);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
      <>
        {visible && (
          <AnimatedBootSplash
            onAnimationEnd={() => {
              setVisible(false);
            }}
          />
        )}
      </>

    </NavigationContainer>
  );
};

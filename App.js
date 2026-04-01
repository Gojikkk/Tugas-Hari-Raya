import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TodoProvider } from "./src/context/ToDoProvider";
import AppNavigator from "./src/Navigation/AppNavigator";

export default function App() {
  return (
  <TodoProvider>
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
  </TodoProvider>
  );
}

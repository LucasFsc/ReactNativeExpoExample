import React from "react"
import { StatusBar } from "expo-status-bar"
import Router from "./src/router"
import { ThemeProvider } from "react-native-elements"

export default function App() {
  return (
    <ThemeProvider>
      <StatusBar style="dark" translucent={false} backgroundColor="white" />
      <Router />
    </ThemeProvider>
  )
}

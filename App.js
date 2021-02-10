/* eslint-disable react/style-prop-object */
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'react-native-elements'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Router from './src/router'

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <StatusBar style="dark" translucent={false} backgroundColor="white" />
        <Router />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

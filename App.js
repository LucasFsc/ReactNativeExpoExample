import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import { Text, View } from "react-native"
import { Avatar, Accessory } from "react-native-elements"
import styled from "styled-components"
import { space, typography } from "styled-system"

const Container = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`

const StyledText = styled(Text)`
  ${typography}
`

const Space = styled(View)`
  ${space}
`

export default function App() {
  return (
    <Container>
      <Avatar
        size="xlarge"
        rounded
        source={{
          uri:
            "https://raw.githubusercontent.com/LucasFsc/LucasFsc/master/images/avatar.png",
        }}
      />
      <Space my={2} />
      <StyledText fontWeight="bold">
        Hi, I'm Lucas, welcome to my example App.
      </StyledText>
      <StatusBar style="auto" />
    </Container>
  )
}

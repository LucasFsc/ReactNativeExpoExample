import React from "react"
import { Avatar } from "react-native-elements"
import styled from "styled-components"
import { AnimatedIcon, Container, Space, Text } from "../../components"
import { animationConfig } from "../../utils"
import shortid from "shortid"

export default () => (
  <Container flex={1} alignItems="center" justifyContent="center">
    {animationConfig.map(({ ...props }, index) => (
      <AnimatedIcon key={shortid.generate()} {...props} index={index} quantity={animationConfig.length} />
    ))}
    <Avatar
        containerStyle={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}
        size={300}
        rounded
        source={{
          uri:
            "https://raw.githubusercontent.com/LucasFsc/LucasFsc/master/images/avatar.png",
        }}
      />
      <Space my={2} />
      <Text fontWeight="bold" fontSize={24} textAlign="center">
        Hi, I'm Lucas, welcome to my example App.
      </Text>
  </Container>
)

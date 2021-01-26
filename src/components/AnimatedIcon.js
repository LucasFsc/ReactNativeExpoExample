import React, { useEffect, useRef } from "react"
import { Animated, View, useWindowDimensions } from "react-native"
import { FontAwesome5 as Icon } from "@expo/vector-icons"

export default ({
  name,
  size = 48,
  color = "black",
  initialDelay = 0,
  initialXPosition = "50%",
  duration = 3000,
}) => {
  const { width } = useWindowDimensions()

  const animatedValue = useRef(new Animated.Value(0)).current

  const animationLoop = Animated.loop(
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 1,
        duration,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }),
    ])
  )

  useEffect(() => {
    setTimeout(() => {
      animationLoop.start()
    }, initialDelay)
  }, [])

  return (
    <Animated.View
      style={{
        position: "absolute",
        top: 0,
        left: initialXPosition || width / 2 - size / 2,
        transform: [
          {
            translateY: animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [size * -1, 250],
            }),
            rotateZ: animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: ["0deg", "180deg"],
            }),
          },
        ],
        opacity: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0],
        }),
      }}
    >
      <Icon name={name} size={size} color={color} />
    </Animated.View>
  )
}

import React, { useEffect, useRef, useState } from 'react'
import { Avatar } from 'react-native-elements'
import { Animated, Easing, TouchableOpacity } from 'react-native'
import { FontAwesome5 as Icon } from '@expo/vector-icons'
import { Container, Space, Text } from '~/components'

export default () => {
  const animatedValue = useRef(new Animated.Value(0)).current

  const animatedSequenceValue = useRef(new Animated.Value(0)).current

  const spinningValue = useRef(new Animated.Value(0)).current

  const [hasAnimated, setHasAnimated] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const animate = () => {
    setIsAnimating(true)

    Animated.timing(animatedValue, {
      toValue: hasAnimated ? 0 : 1,
      duration: 1000,
      useNativeDriver: true
    }).start(() => {
      setHasAnimated(!hasAnimated)
      setIsAnimating(false)
    })
  }

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedSequenceValue, {
          toValue: 1,
          duration: 5000,
          useNativeDriver: false
        }),
        Animated.timing(animatedSequenceValue, {
          toValue: 0,
          duration: 5000,
          useNativeDriver: false
        })
      ])
    ).start()

    Animated.loop(
      Animated.timing(spinningValue, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: true
      })
    ).start()
  }, [])

  return (
    <Container flex={1} alignItems="center" justifyContent="center">
      <Container justifyContent="center">
        <TouchableOpacity
          disabled={isAnimating}
          hitSlop={{ top: 32, right: 32, bottom: 16, left: 32 }}
          onPress={animate}
        >
          <Animated.View
            style={{
              transform: [
                {
                  rotate: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '180deg']
                  })
                }
              ]
            }}
          >
            <Icon size={32} name="chevron-circle-up" />
          </Animated.View>
        </TouchableOpacity>
      </Container>
      <Space my={2} />
      <Container
        minWidth={200}
        minHeight={200}
        overflow="hidden"
        borderRadius={100}
        bg="white"
        borderColor="white"
      >
        <Container
          alignItems="center"
          justifyContent="center"
          width={200}
          height={200}
        >
          <Animated.View
            style={{
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 100,
              backgroundColor: animatedSequenceValue.interpolate({
                inputRange: Array.from({ length: 10 }, (_, value) =>
                  parseFloat(Number(value / 10 + 0.1).toFixed(1))
                ),
                outputRange: [
                  '#5C1F28',
                  '#A8384D',
                  '#C26647',
                  '#96349D',
                  '#723CB4',
                  '#32143D',
                  '#0E242A',
                  '#203211',
                  '#256F64',
                  '#2D6E86'
                ]
              })
            }}
          >
            <Animated.View
              style={{
                transform: [
                  {
                    rotate: spinningValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '360deg']
                    })
                  }
                ]
              }}
            >
              <Icon name="react" size={64} color="white" />
            </Animated.View>
          </Animated.View>
        </Container>
        <Animated.View
          style={{
            transform: [
              {
                translateY: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -180]
                })
              }
            ],
            position: 'absolute'
          }}
        >
          <Avatar
            size={200}
            rounded
            source={{
              uri:
                'https://raw.githubusercontent.com/LucasFsc/LucasFsc/master/images/avatar.png'
            }}
          />
        </Animated.View>
      </Container>
      <Space my={2} />
      <Container maxWidth={200}>
        <Text fontWeight="bold" fontSize={24} textAlign="center">
          Hi, I'm Lucas, welcome to my
        </Text>
        <Animated.View style={{ opacity: animatedValue }}>
          <Text fontWeight="bold" fontSize={32} textAlign="center">
            React Native
          </Text>
        </Animated.View>
        <Text fontWeight="bold" fontSize={24} textAlign="center">
          example App.
        </Text>
      </Container>
    </Container>
  )
}

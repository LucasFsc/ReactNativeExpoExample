import React from 'react'
import { Avatar } from 'react-native-elements'
import { Container, Space, Text } from '../../components'

export default () => (
  <Container flex={1} alignItems="center" justifyContent="center">
    <Avatar
      containerStyle={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
      }}
      size={200}
      rounded
      source={{
        uri:
          'https://raw.githubusercontent.com/LucasFsc/LucasFsc/master/images/avatar.png'
      }}
    />
    <Space my={2} />
    <Container maxWidth={250}>
      <Text fontWeight="bold" fontSize={24} textAlign="center">
        Hi, I'm Lucas, welcome to my example App.
      </Text>
    </Container>
  </Container>
)

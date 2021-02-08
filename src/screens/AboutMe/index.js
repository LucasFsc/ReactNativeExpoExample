import React from 'react'
import { ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'
import { FontAwesome5 as Icon } from '@expo/vector-icons'
import { Container, Space, Text } from '../../components'
import { IconText } from './elements'

export default () => (
  <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
    <Container>
      <Container p={4} alignItems="center">
        <Icon name="github" size={128} />
        <Text fontWeight="bold">@lucasfsc</Text>
        <Space mb={3} />
        <Text fontWeight="bold" textAlign="center" fontSize={16}>
          I'm a software engineer, serious looking person that keeps talking to
          computers all day long.
        </Text>
        <Space mb={3} />
        <Divider
          style={{
            backgroundColor: 'gray'
          }}
        />
        <Space mb={3} />
        <IconText
          iconBg="black"
          iconName="mug-hot"
          iconColor="white"
          text={[
            { value: 'I love coffee, feel free to buy me a' },
            { value: 'Mocaccino', bold: true },
            { value: 'or an' },
            { value: 'Ice Coffee', bold: true }
          ]}
        />
        <Space mb={3} />
        <IconText
          iconBg="black"
          iconName="book-reader"
          iconColor="white"
          text={[
            { value: 'Not so into books... but sent me an' },
            { value: 'article', bold: true },
            { value: 'about programming and consider it read' }
          ]}
        />
        <Space mb={3} />
        <IconText
          iconBg="black"
          iconName="cookie-bite"
          iconColor="white"
          text={[
            { value: 'Sugar for life, specially' },
            { value: 'swiss chocolate,', bold: true },
            { value: 'must eat' }
          ]}
        />
        <Space mb={3} />
        <IconText
          iconBg="black"
          iconName="gamepad"
          iconColor="white"
          text={[
            { value: 'Well... I play videogames since I was 4' },
            { value: "(not to say I'm addicted),", fontSize: 10 },
            { value: 'huge fan of' },
            { value: 'Mega Man', bold: true },
            { value: 'franchise' }
          ]}
        />
        <Space mb={3} />
      </Container>
    </Container>
  </ScrollView>
)

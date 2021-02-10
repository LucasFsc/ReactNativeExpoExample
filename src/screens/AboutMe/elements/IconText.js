/* eslint-disable react/prop-types */
import React, { memo } from 'react'
import { FontAwesome5 as Icon } from '@expo/vector-icons'
import { Container, Space, Text } from '../../../components'

export default memo(
  ({
    iconBg = 'transparent',
    iconColor = 'black',
    iconName,
    text = [{ value: '', fontWeight: 'normal', fontSize: 14 }],
    textEndingSymbol = '.'
  }) => (
    <Container flexDirection="row" alignItems="center" justifyContent="center">
      <Container
        bg={iconBg}
        p={2}
        borderRadius={50}
        alignItems="center"
        justifyContent="center"
        width="48px"
        minHeight="48px"
      >
        <Icon name={iconName} size={24} color={iconColor} />
      </Container>
      <Space mr={3} />
      <Text flex={1} minWidth={200}>
        {text.map(({ value = '', bold = false, fontSize = 14 }, index) => (
          <Text fontWeight={bold && 'bold'} key={value} fontSize={fontSize}>
            {value}
            {index !== text.length - 1 && ' '}
          </Text>
        ))}
        {textEndingSymbol}
      </Text>
    </Container>
  )
)

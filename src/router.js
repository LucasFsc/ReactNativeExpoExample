import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather as Icon } from '@expo/vector-icons'
import { Welcome, AboutMe } from './screens'

const { Navigator, Screen } = createBottomTabNavigator()

export default () => (
  <NavigationContainer>
    <Navigator>
      <Screen
        name="Welcome"
        component={Welcome}
        options={{
          tabBarIcon: ({ ...props }) => <Icon name="home" {...props} />
        }}
      />
      <Screen
        name="About me"
        component={AboutMe}
        options={{
          tabBarIcon: ({ ...props }) => <Icon name="at-sign" {...props} />
        }}
      />
    </Navigator>
  </NavigationContainer>
)

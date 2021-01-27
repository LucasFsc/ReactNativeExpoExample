import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Welcome, AboutMe } from "./screens"
import { Feather as Icon } from "@expo/vector-icons"

const Tab = createBottomTabNavigator()

export default () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen
        name="Welcome"
        component={Welcome}
        options={{
          tabBarIcon: ({ ...props }) => <Icon name="home" {...props} />,
        }}
      />
      <Tab.Screen
        name="About me"
        component={AboutMe}
        options={{
          tabBarIcon: ({ ...props }) => <Icon name="at-sign" {...props} />,
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
)

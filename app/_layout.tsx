import { Slot, Stack } from 'expo-router'
import React from 'react'

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{
          headerShown: false,
          // headerTitle: 'Index',
        }}
      />
      <Stack.Screen
        name='auth'
        options={{
          headerShown: false,
          // headerTitle: 'Index',
        }}
      />
      {/* <Slot /> */}
    </Stack>
  )
}

export default RootLayout
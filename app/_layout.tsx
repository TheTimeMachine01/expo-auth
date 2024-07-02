import { Slot, Stack } from 'expo-router'
import React from 'react'
import { Provider } from 'react-redux'
import AppWrapper from './(redux)/AppWrapper'
import { store } from './(redux)/store'

const RootLayout = () => {
  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  )
}

export default RootLayout
import { useSegments, useRouter } from 'expo-router'
import React from 'react'
import { Button, View, Text } from 'react-native'


const profile: React.FC = () => {
  const segments = useSegments()
  const rootSegment = segments[0];
  const router = useRouter();
  
  return (
    <View>
      <Text>Profile</Text>
      <Button title={'signin'} onPress={() => router.replace('/auth')} />
    </View>
  )
}

export default profile
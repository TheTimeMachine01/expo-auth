import { useSegments, useRouter, Link } from 'expo-router';
import React from 'react'
import { Button, View, Text } from 'react-native';


const home: React.FC = () => {
  const router = useRouter();

  return (
    <View>
      <Text>Home Page</Text>
      <Button title={'signin'} onPress={() => router.replace('/auth')} />
    </View>
  )
}

export default home;
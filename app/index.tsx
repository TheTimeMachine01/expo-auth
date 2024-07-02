import { Video, ResizeMode } from 'expo-av';
import { router } from 'expo-router';
import React, { useRef } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import tw from 'twrnc';

const index = () => {
  const video = useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={tw`flex-1 justify-center`}>
      {/* <Video
      ref={video}
      style={{ ...StyleSheet.absoluteFillObject }}
      source={{
        // uri: 'https://cdn.pixabay.com/video/2017/11/28/13100-245530611_large.mp4',
        // uri: 'https://cdn.pixabay.com/video/2018/11/16/19368-301525727_large.mp4',
        // uri: 'https://cdn.pixabay.com/video/2024/06/14/216761_large.mp4',
        // uri: 'https://cdn.pixabay.com/video/2020/09/05/49131-459186455_large.mp4',
        // uri: 'https://cdn.pixabay.com/video/2024/05/09/211275_large.mp4',

      }}
      resizeMode={ResizeMode.COVER}
      shouldPlay
      isLooping
      onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      /> */}
      <Text style={tw`text-white text-xl text-center mt-30`}>Home</Text>
      <View
        style={tw`flex-col justify-around items-center top-[60] my-80`}
      >
        <TouchableOpacity
          style={tw`bg-gray-700 px-7 py-3`}
          onPress={() => router.push("/auth/SignUp")}
        >
          <Text style={tw`text-white text-xl`}>Sign-up with Email or Phone ab</Text>
        </TouchableOpacity>
        <View
        style={tw`px-3 py-3 my-2 flex-row`}
        >
        <Text style={tw`text-white text-lg`}>Already have a account? a</Text>
        <TouchableOpacity
          
          onPress={() => router.push("/auth/SignIn")}
        >
          <Text style={tw`text-red-200 text-lg`}>Login a</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default index;
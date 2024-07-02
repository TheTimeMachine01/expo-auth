import { Video, ResizeMode } from 'expo-av';
import { Redirect, router } from 'expo-router';
import React, { useRef } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux';
import tw from 'twrnc';

const index = () => {

  useSelector((state: any) => console.log('Your token: ', state.auth.token));
  // const video = useRef(null);
  // const [status, setStatus] = React.useState({});
  return <Redirect href="/home" />
}

export default index;
import { useRouter, useSegments } from 'expo-router'
import React, { useState } from 'react'
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, logoutAction } from '../(redux)/authSlice';

const SignIn: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const goToSignUp = () => {
    router.replace('auth/SignUp')
  }
  const handleLogin = () => {
    // Implement login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    if(username && password) {
      dispatch(loginAction(username));
      router.push('/home')
    }
  };

  const removeToken = () => {
    dispatch(logoutAction());
  }
   
  useSelector((state: any) => console.log('Your token: ', state.auth.token));
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>RTU</Text>
        </View>
      </View>
      <Text style={styles.title}>LOGIN &</Text>
      <View style={styles.inputContainer}>
        <Ionicons name="person-circle" size={24} color="#000" />
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="key" size={24} color="#000" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity style={styles.forgotPassword} onPress={() => { }}>
        {/* <Text style={styles.forgotPasswordText}>Forgot Password?</Text> */}
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOG-IN</Text>
      </TouchableOpacity>
      <Text style={styles.signupText}>
        Don't have an account yet?{' '}
        <TouchableOpacity onPress={() => goToSignUp()}>
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => removeToken()}>
          <Text style={styles.signupLink}>Logout ab</Text>
        </TouchableOpacity>
      </Text>
    </View>
  )
}

export default SignIn





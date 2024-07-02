import React, { useState } from 'react';
import styles from './styles';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Login:React.FC =  ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const goToSignUp = () =>{
    navigation.replace('Signup')
  }
  const handleLogin = () => {
    // Implement login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>RTU</Text>
        </View>
      </View>
      <Text style={styles.title}>LOGIN</Text>
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
      <TouchableOpacity style={styles.forgotPassword} onPress={() => {}}>
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
      </Text>
    </View>
  );
};

export default Login;

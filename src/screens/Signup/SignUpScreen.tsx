import React, { useState } from 'react';
import styles from './styles';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Signup: React.FC = ( {navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setUseremail] = useState('');



  const goToLogin = () =>{
    navigation.push('Login')
  }

  const handleLogin = () => {
    // Implement Sign up logic here
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('email:', email);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>RTU</Text>
        </View>
      </View>
      <Text style={styles.title}>SIGNUP</Text>
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
        <Ionicons name='information' size={24} color="#000" />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setUseremail}
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
        {/* <Text style={styles.forgotPasswordText}>Forgot Password?</Text>y` */}
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>SIGN-UP</Text>
      </TouchableOpacity>
      <Text style={styles.signupText}>
        Don't have an account yet?{''}
        <TouchableOpacity onPress={() => goToLogin()}>
          <Text style={styles.signupLink}>LOGIN</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};



export default Signup;

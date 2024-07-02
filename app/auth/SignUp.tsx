import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import tw from 'twrnc'

type Props = {}

const SignUp = (props: Props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setUseremail] = useState('');

  const router = useRouter();

  const goToLogin = () =>{
    router.push('/home')
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
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    marginBottom: 40,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:'brown',
    borderWidth:1,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f11111',
  },
  title: {
    fontSize: 28,
    fontWeight:'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  forgotPassword: {
    marginBottom: 10,
  },
  forgotPasswordText: {
    color: '#007bff',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#800080',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupText: {
    marginTop: 20,
    textAlign: 'center',
  },
  signupLink: {
    color: '#007bff',
    textDecorationLine: 'underline',
  },
});

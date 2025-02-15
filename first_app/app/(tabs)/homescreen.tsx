import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function homescreen() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation();
  const handleLogin = async () => {
    const users = JSON.parse(await AsyncStorage.getItem("users")) || []
        const user = users.find(
            (u) => u.username === username && u.password === password
        )
        if (user){
            alert("Login successful!")
            navigation.navigate('dashboard')
        }
        else if(username.length === 0 && password.length === 0){
            alert("Please fill out the form first")
        }
        else{
            alert("Invalid username or password")
        }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, Welcome to My Expo App!</Text>
      <Text style={styles.login}>Log in</Text>
      <TextInput style={styles.input} placeholder='Username' value={username} 
      onChangeText={setUsername} />
      <TextInput style={styles.password} placeholder='Password' secureTextEntry={true} 
      value={password} 
      onChangeText={setPassword} />
      <TouchableOpacity style={styles.button} onPress={handleLogin} type="submit">Sign In</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    fontFamily: 'sans-serif',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 200,
  },
  login: {
    fontSize: 25,
    marginTop: 80,
    paddingBottom: 30,
  },
  input: {
    width: 300,
    height: 40,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: 'black',
  },
  password:{
    width: 300,
    height: 40,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: 'black',
  }
});

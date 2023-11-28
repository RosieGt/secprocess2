import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

export default props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={{uri: 'assets/book-lover.png' }}
          style={styles.logo}
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Acessar</Text>
        <View style={styles.card}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              placeholderTextColor="#999"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              placeholderTextColor="#999"
              secureTextEntry
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('hall')}>
            <Text style={styles.buttonText}>Login</Text>
         </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    color: '#0000ff',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 120,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius:60,
    resizeMode: 'contain',
  },

    formContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      color: '#0000ff',
      marginBottom: 20,
      marginTop: 20,
    },
    card: {
      width: '80%',
      backgroundColor: '#fff',
      borderRadius: 4,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      padding: 20,
      marginBottom: 20,
    },
    inputContainer: {
      marginBottom: 20,
    },
    label: {
      fontSize: 16,
      color: '#333',
    },
    input: {
      height: 40,
      borderRadius:6,
      borderWidth: 1,
      borderColor: '#ddd',
      color: '#333',
      paddingLeft:10,
    },
    button: {
      width: '100%',
      height: 40,
      backgroundColor: '#0000FF',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
  };
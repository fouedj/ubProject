import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Image} from 'react-native';
import UserState from '../atoms';
import Network from '../api/network';
import {ub_logo} from '../components/images';

const SignUpScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setUser = UserState.useSetCurrentUser();
  const handleSignUp = () => {
    Network()
      .post('auth/local', {
        identifier: email,
        password,
      })
      .then((response: any) => {
        setUser({
          token: response.data.jwt,
          refreshToken: response.data.jwt,
          id: response.data.user,
        });
        navigation.navigate('BottomTab', {
          screen: 'Home',
        });
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={ub_logo} style={styles.img} />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.btnContainer}>
        <Button title="Connexion" onPress={handleSignUp} color="#ed7703" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  img: {
    width: 150,
    height: 100,
  },
  imgContainer: {
    display: 'flex',
    flex: 0.5,
  },
  btnContainer: {
    borderRadius: 20,
  },
});

export default SignUpScreen;

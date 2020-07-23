import React, { useState } from 'react';
import { Input, Button } from 'react-native-elements';
import {
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';

const SignUpScreen = ({}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');

  return (
    <View style={styles.container} behavior="padding">
      <ImageBackground
        style={styles.img}
        imageStyle={{
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
        source={{
          uri:
            'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg',
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            // alignItems: 'center',
          }}>
          <View style={styles.modal}>
            <Text style={styles.header}>Sign Up</Text>
            <Input
              placeholder="Full Name"
              value={name}
              onChangeText={(newName) => {
                setName(newName);
              }}
              autoCorrect={false}
              autoCapitalize="none"
            />
            <Input
              placeholder="Email"
              value={email}
              onChangeText={(newEmail) => {
                setEmail(newEmail);
              }}
              autoCorrect={false}
              autoCapitalize="none"
            />
            <Input
              secureTextEntry
              placeholder="Password"
              value={password}
              onChangeText={(newpassword) => {
                setPassword(newpassword);
              }}
              autoCorrect={false}
              autoCapitalize="none"
            />
            <Input
              secureTextEntry
              placeholder="Confirm Password"
              value={passwordConf}
              onChangeText={(newpassword) => {
                setPasswordConf(newpassword);
              }}
              autoCorrect={false}
              autoCapitalize="none"
            />
            <Button
              titleStyle={{ color: 'white', fontSize: 13 }}
              buttonStyle={[
                styles.customizeBtn,
                { backgroundColor: '#F4B400' },
              ]}
              title="Sign Up"
            />
            <Text style={{ textAlign: 'center' }}>or</Text>
            <Button
              titleStyle={{ color: 'white', fontSize: 13 }}
              buttonStyle={[
                styles.customizeBtn,
                { backgroundColor: '#4267B2' },
              ]}
              title="Sign Up with Facebook"
            />
            <Button
              titleStyle={{ color: 'white', fontSize: 13 }}
              buttonStyle={[
                styles.customizeBtn,
                { backgroundColor: '#DB4437' },
              ]}
              title="Sign Up with Google"
            />
            <View style={styles.loginContainer}>
              <Text style={{ color: 'grey' }}>Existing User ?</Text>
              <TouchableOpacity>
                <Text style={{ color: 'red' }}>Login Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  img: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  header: {
    // textAlign: 'center',
    color: 'red',
    marginLeft: 8,
    fontSize: 25,
    marginBottom: 10,
  },
  modal: {
    // alignSelf: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
    marginHorizontal: 40,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 28,
  },
  customizeBtn: {
    borderRadius: 10,
    marginVertical: 5,
  },
  loginContainer: {
    marginVertical: 10,
    marginHorizontal: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default SignUpScreen;

import React, { useState } from 'react';
import { Text, Input, Button } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';

const SignUpScreen = ({}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Text h3>Sign Up</Text>
        <Input
          label="Full Name"
          value={name}
          onChangeText={(newName) => {
            setName(newName);
          }}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <Input
          label="Email"
          value={email}
          onChangeText={(newEmail) => {
            setEmail(newEmail);
          }}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <Input
          secureTextEntry
          label="Password"
          value={password}
          onChangeText={(newpassword) => {
            setPassword(newpassword);
          }}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <Input
          secureTextEntry
          label="Confirm Password"
          value={passwordConf}
          onChangeText={(newpassword) => {
            setPasswordConf(newpassword);
          }}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <Button
          titleStyle={{ color: 'white', fontSize: 13 }}
          buttonStyle={[styles.customizeBtn, { backgroundColor: '#F4B400' }]}
          title="Sign Up"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: 'white',
    flex: 1,
  },
  modal: {
    margin: 40,
    borderColor: 'red',
    borderWidth: 1,
  },
});

export default SignUpScreen;

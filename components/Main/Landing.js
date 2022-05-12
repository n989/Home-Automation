import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';

import {Button} from 'react-native-paper';
const Landing = ({navigation}) => {
  return (
    <ImageBackground
      source={{
        uri: 'https://firebasestorage.googleapis.com/v0/b/smart-home-c3cf6.appspot.com/o/WhatsApp%20Image%202022-05-11%20at%2010.55.20%20AM.jpeg?alt=media&token=e44edd93-e172-45f3-9124-b9b478367a2d',
      }}
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      }}>
      <View style={styles.container}>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={{color: '#2a5298', fontSize: 20}}>Sign Up</Text>
        </Button>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => navigation.navigate('Login')}>
          <Text style={{color: '#2a5298', fontSize: 20}}>Login</Text>
        </Button>
      </View>
    </ImageBackground>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  button: {
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    // backgroundColor: 'transparent',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 15,
  },
});

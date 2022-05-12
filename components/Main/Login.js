import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {FormBuilder} from 'react-native-paper-form-builder';
import {useForm} from 'react-hook-form';
import auth from '@react-native-firebase/auth';
import onboard from '../../assets/onboard.png';
const Login = ({navigation}) => {
  const signUp = async ({email, password}) => {
    await auth()
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        console.log(result);
        navigation.navigate('Main');
      })
      .catch(error => {
        console.log(error);
      });
  };
  const {control, setFocus, handleSubmit} = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  return (
    <ImageBackground
      source={{
        uri: 'https://firebasestorage.googleapis.com/v0/b/smart-home-c3cf6.appspot.com/o/pexels-pixabay-276724.jpg?alt=media&token=bfb17a38-7553-487b-b3e1-5261cb6bb5d6',
      }}
      imageStyle={{opacity: 0.7}}
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      }}>
      <View style={styles.containerStyle}>
        <ScrollView contentContainerStyle={styles.scrollViewStyle}>
          <FormBuilder
            control={control}
            setFocus={setFocus}
            formConfigArray={[
              {
                type: 'email',
                name: 'email',

                rules: {
                  required: {
                    value: true,
                    message: 'Email is required',
                  },
                },
                textInputProps: {
                  label: 'Email',
                },
              },
              {
                type: 'password',
                name: 'password',
                rules: {
                  required: {
                    value: true,
                    message: 'Password is required',
                  },
                },
                textInputProps: {
                  label: 'Password',
                },
              },
            ]}
          />
          <Button
            mode={'contained'}
            onPress={handleSubmit(data => {
              signUp(data);
            })}>
            Submit
          </Button>
          <View style={styles.login}>
            <Text style={styles.text1}>New user?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignUp');
              }}>
              <Text style={styles.text2}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  scrollViewStyle: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  headingStyle: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 40,
  },
  login: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
  },
  text1: {
    fontSize: 18,
    marginRight: 5,
  },
  text2: {
    color: 'blue',
    fontSize: 18,
  },
});

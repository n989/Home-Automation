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
import firestore from '@react-native-firebase/firestore';

const SignUp = ({navigation}) => {
  const {control, setFocus, handleSubmit} = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      city: '',
      gender: '',
    },
    mode: 'onChange',
  });
  const onSubmit = async (data, e) => {
    const email = data.email;
    const password = data.password;
    const name = data.name;
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        console.log(result);

        firestore()
          .collection('users')
          .doc(auth().currentUser.uid)
          .set({
            name,
            email,
          })
          .then(() => {
            navigation.navigate(Main);
          });
      })
      .catch(error => {
        console.log(error);
      });
    console.log('submit', data);
  };
  const onError = (errors, e) => console.log(errors, e);

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
        <FormBuilder
          control={control}
          setFocus={setFocus}
          formConfigArray={[
            {
              name: 'name',
              type: 'text',
              textInputProps: {
                label: 'Name',
              },
              rules: {
                required: {
                  value: true,
                  message: 'Name is required',
                },
              },
            },
            {
              name: 'email',
              type: 'email',
              textInputProps: {
                label: 'Email',
              },
              rules: {
                required: {
                  value: true,
                  message: 'Email is required',
                },
                pattern: {
                  // value:
                  //   /[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/,
                  message: 'Email is invalid',
                },
              },
            },
            {
              name: 'password',
              type: 'password',
              textInputProps: {
                label: 'Password',
              },
              rules: {
                required: {
                  value: true,
                  message: 'Password is required',
                },
                minLength: {
                  value: 6,
                  message: 'Password should be atleast 6 characters',
                },
                maxLength: {
                  value: 30,
                  message: 'Password should be between 8 and 30 characters',
                },
              },
            },
          ]}
        />
        <Button mode={'contained'} onPress={handleSubmit(onSubmit, onError)}>
          Sign Up
        </Button>
        <View style={styles.login}>
          <Text style={styles.text1}>Already a user?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={styles.text2}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    margin: 10,
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

import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button} from 'react-native-paper';
import {FormBuilder} from 'react-native-paper-form-builder';
import {useForm} from 'react-hook-form';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {setUser} from '../../redux/actions/user';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {proc} from 'react-native-reanimated';

const SignUp = ({navigation, user, setUser}) => {
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);

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
    setProcessing(true);
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        setProcessing(false);
        setUser(result);
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
        setProcessing(false);
        setError(error);
        console.log(error);
      });
  };
  const onError = (errors, e) => console.log(errors, e);
  // assets\login.jpeg D:\btp\Automation\assets\signup.jpeg
  return (
    <>
      {processing ? (
        <ImageBackground
          source={require('../../assets/signup.jpeg')}
          imageStyle={{opacity: 0.7}}
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
          }}>
          <ActivityIndicator
            size={60}
            color="#00ff00"
            style={{marginTop: 'auto', marginBottom: 'auto'}}
          />
        </ImageBackground>
      ) : (
        <ImageBackground
          source={require('../../assets/login.jpeg')}
          imageStyle={{opacity: 0.7}}
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
          }}>
          <View style={styles.containerStyle}>
            <FormBuilder
              style={styles.form}
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
            {error && <Text style={styles.error}>{error}</Text>}
            <Button
              mode={'contained'}
              onPress={handleSubmit(onSubmit, onError)}>
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
      )}
    </>
  );
};

const mapStatetoProps = store => {
  return {
    user: store.users,
  };
};
const mapDispatchToProps = dispatch => bindActionCreators({setUser}, dispatch);
export default connect(mapStatetoProps, mapDispatchToProps)(SignUp);
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    margin: 10,
  },
  form: {
    backgroundColor: 'red',
    width: 4,
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
  error: {
    color: 'red',
    fontSize: 18,
    paddingBottom: 10,
    marginLeft: 10,
    marginRight: 'auto',
  },
});

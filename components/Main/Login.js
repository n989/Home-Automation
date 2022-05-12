import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {Button} from 'react-native-paper';
import {FormBuilder} from 'react-native-paper-form-builder';
import {useForm} from 'react-hook-form';
import auth from '@react-native-firebase/auth';
import onboard from '../../assets/onboard.png';

import {setUser} from '../../redux/actions/user';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
const Login = ({navigation, user, setUser}) => {
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);

  const signUp = async ({email, password}) => {
    setProcessing(true);
    await auth()
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        console.log(result);
        setUser(result);
        navigation.navigate('Main');
      })
      .catch(error => {
        setProcessing(false);
        setError(error);
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
              {error && <Text style={styles.error}>{error}</Text>}
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
export default connect(mapStatetoProps, mapDispatchToProps)(Login);
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  scrollViewStyle: {
    flex: 1,
    padding: 15,
    // justifyContent: 'center',
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

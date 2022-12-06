import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setDevice} from '../../redux/actions/user';
const AddDevice = ({navigation, setDevice}) => {
  const [deviceName, setDeviceName] = useState('');
  const [roomName, setRoomName] = useState('');
  const [pin, setPin] = useState('');
  const addDevice = () => {
    console.log('a');
    const data = {
      deviceName: deviceName,
      roomName: roomName,
      pin: pin,
    };
    setDevice(data);
    setDeviceName('');
    setRoomName('');
    setPin('');
  };
  return (
    <View style={{padding: 20, backgroundColor: '#062949', height: '100%'}}>
      <Text style={styles.heading}>Add device</Text>
      <TextInput
        style={{
          height: 50,
          color: 'white',
          paddingLeft: 6,
          fontSize: 20,
          marginBottom: 10,
        }}
        placeholder="Enter device name"
        onChangeText={newText => setDeviceName(newText)}
        defaultValue={deviceName}
        placeholderTextColor="#e6f9fa"
        underlineColorAndroid={'#8badbc'}
      />
      <TextInput
        style={{
          height: 50,
          color: 'white',
          paddingLeft: 6,
          fontSize: 20,
          marginBottom: 10,
        }}
        placeholder="Enter room name"
        onChangeText={newText => setRoomName(newText)}
        defaultValue={roomName}
        placeholderTextColor="#e6f9fa"
        underlineColorAndroid={'#8badbc'}
      />
      <TextInput
        style={{
          height: 50,
          color: 'white',
          paddingLeft: 6,
          fontSize: 20,
          marginBottom: 10,
        }}
        placeholder="Enter pin no"
        onChangeText={newText => setPin(newText)}
        defaultValue={pin}
        placeholderTextColor="#e6f9fa"
        underlineColorAndroid={'#8badbc'}
      />
      <Button onPress={addDevice} title="Add" color="#2a5298" />
    </View>
  );
};

const mapStatetoProps = store => {
  return {
    user: store.users,
  };
};
const mapDispatchToProps = dispatch =>
  bindActionCreators({setDevice}, dispatch);
export default connect(mapStatetoProps, mapDispatchToProps)(AddDevice);

const styles = StyleSheet.create({
  heading: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 15,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#e6f9fa',
    paddingBottom: 30,
  },
  item: {
    width: '100%',
    backgroundColor: '#055681',
    marginBottom: 10,
    borderRadius: 40,
    padding: 10,
  },
  largeText: {
    fontSize: 20,
    color: '#8badbc',
    // marginLeft: 'auto',
    marginRight: 'auto',
  },
  smallText: {
    fontSize: 15,
    color: '#8badbc',
  },
  heading1: {},
});

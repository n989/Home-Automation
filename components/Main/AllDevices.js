import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Switch,
} from 'react-native';
import React, {useState} from 'react';
import {Device} from './Device';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {setMessages} from '../../redux/actions/user';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import axios from 'axios';
const AllDevices = ({user}) => {
  const [devices, setDevices] = useState(user.allList);
  const [toggled, setToggled] = useState({
    words: [
      {id: 1, text: 'Notification', toggle: false},
      {id: 2, text: 'Wifi', toggle: false},
      {id: 3, text: 'Bluetooth', toggle: false},
    ],
  });

  const handleDevices = async (value, id) => {
    axios
      .get(
        `https://blynk.cloud/external/api/isHardwareConnected?token=4n0G4lhNjNXKk2ERU1Nv9Z9P1MDlT_Oh`,
      )
      .then(response => {
        if (response.data === true && value === true) {
          axios
            .get(
              `https://blr1.blynk.cloud/external/api/update?token=4n0G4lhNjNXKk2ERU1Nv9Z9P1MDlT_Oh&${devices[id].pin}=1`,
            )
            .then(res => {});
        } else {
          axios
            .get(
              `https://blr1.blynk.cloud/external/api/update?token=4n0G4lhNjNXKk2ERU1Nv9Z9P1MDlT_Oh&${devices[id].pin}=0`,
            )
            .then(res => {});
        }
      })
      .catch(error => console.log(error));
  };
  const renderWordList = () => {
    const wordList = user.allList.map((device, i, deviceArray) => (
      <TouchableOpacity style={styles.card} key={i}>
        <View style={styles.userInfo}>
          <View style={styles.userImgWrapper}>
            <MaterialCommunityIcons name="home" size={26} />
          </View>
          <View style={styles.textSection}>
            <View style={styles.userInfoText}>
              <Text style={styles.userName}>{device.deviceName}</Text>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={device.status ? '#f5dd4b' : '#f4f3f4'}
                onValueChange={toggleValue => {
                  deviceArray[i].status = toggleValue;
                  setToggled({room: deviceArray});
                  handleDevices(toggleValue, i);
                }}
                value={device.status}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    ));
    return wordList;
  };
  return (
    <View style={{padding: 20, backgroundColor: '#062949', height: '100%'}}>
      <View>
        <Text style={styles.heading}>Devices</Text>
        {renderWordList()}
      </View>
    </View>
  );
};
const mapStatetoProps = store => {
  return {
    user: store.users,
  };
};
const mapDispatchToProps = dispatch =>
  bindActionCreators({setMessages}, dispatch);
export default connect(mapStatetoProps, mapDispatchToProps)(AllDevices);

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: '500',
    color: '#e6f9fa',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: 30,
  },

  card: {
    width: '100%',
    backgroundColor: '#055681',
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 40,
  },
  userInfo: {
    flexDirection: 'row',
  },
  userImgWrapper: {
    paddingBottom: 15,
    paddingTop: 25,
    marginRight: 10,
  },
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textSection: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 15,
    paddingLeft: 0,
    marginLeft: 10,
    width: 300,
    // borderBottomWidth: 1,
    // borderBottomColor: '#cccccc',
  },
  userInfoText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  userName: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
    color: '#8badbc',
  },
  postTime: {
    fontSize: 12,
    color: '#8badbc',
    fontFamily: 'Lato-Regular',
  },
  messageText: {
    fontSize: 14,
    color: '#8badbc',
  },
});

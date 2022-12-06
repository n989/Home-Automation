import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Switch,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Container from '../common/Container';
import {hp, wp} from '../common/Dimension/dimension';
import {FlatGrid} from 'react-native-super-grid';
import {Dimensions, PixelRatio} from 'react-native';
import storage from '@react-native-firebase/storage';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SmsAndroid from 'react-native-get-sms-android';
import {setIds} from '../../redux/actions/user';
import {setMessages} from '../../redux/actions/user';
import axios from 'axios';
const rows = 3;
const cols = 2;
const marginHorizontal = 4;
const marginVertical = 4;
const width =
  Dimensions.get('window').width / cols - marginHorizontal * (cols + 1);
const height =
  Dimensions.get('window').height / rows - marginVertical * (rows + 1);
const Home = ({navigation, user, setMessages, setIds}) => {
  const toggleSwitch1 = () => setSwitch1(previousState => !previousState);
  const toggleSwitch2 = () => setSwitch2(previousState => !previousState);
  const toggleSwitch3 = () => setSwitch3(previousState => !previousState);
  const toggleSwitch4 = () => setSwitch4(previousState => !previousState);
  const filter = {
    box: 'inbox',
    read: 0,
    indexFrom: 0,
    maxCount: 1,
  };
  const [messages, setMessage] = useState(user.messages);
  const [ids, setId] = useState(user.ids);
  const [devices, setDevices] = useState(user.devices);
  const onDevices = () => {
    axios
      .get(
        `https://blynk.cloud/external/api/isHardwareConnected?token=4n0G4lhNjNXKk2ERU1Nv9Z9P1MDlT_Oh`,
      )
      .then(response => {
        if (response.data === true) {
          for (let i in devices) {
            axios
              .get(
                `https://blr1.blynk.cloud/external/api/update?token=4n0G4lhNjNXKk2ERU1Nv9Z9P1MDlT_Oh&${devices[i]}=1`,
              )
              .then(res => {});
          }
        }
      });
  };
  const offDevices = () => {
    axios
      .get(
        `https://blynk.cloud/external/api/isHardwareConnected?token=4n0G4lhNjNXKk2ERU1Nv9Z9P1MDlT_Oh`,
      )
      .then(response => {
        if (response.data === true) {
          for (let i in devices) {
            axios
              .get(
                `https://blr1.blynk.cloud/external/api/update?token=4n0G4lhNjNXKk2ERU1Nv9Z9P1MDlT_Oh&${devices[i]}=0`,
              )
              .then(res => {});
          }
        }
      });
  };

  const sendCommand = message => {
    console.log(message);
    if (message == 'tarrif is high') {
      offDevices();
    }
    if (message == 'tarrif is low') {
      onDevices();
    }
  };
  useEffect(() => {
    console.log(user);
    const interval = setInterval(() => {
      if (1) {
        SmsAndroid.list(
          JSON.stringify(filter),
          fail => {
            console.log('Failed with this error: ' + fail);
          },
          (count, smsList) => {
            var arr = JSON.parse(smsList);
            arr.forEach(function (object) {
              if (!user.ids.includes(object._id)) {
                setIds(object._id);
                setMessages(object);
                sendCommand(object.body);
              }
            });
          },
        );
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView>
      <ImageBackground
        source={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/smart-home-c3cf6.appspot.com/o/WhatsApp%20Image%202022-05-11%20at%208.28.38%20PM.jpeg?alt=media&token=8ab54a4f-1bcf-424a-8bac-eadfb1188089',
        }}
        imageStyle={{opacity: 1}}
        style={{
          flex: 1,
          width: null,
          height: '100%',
          resizeMode: 'stretch',
        }}>
        <Container style={{paddingBottom: 80}}>
          <View style={styles.profile}>
            <View style={styles.leftProfile}>
              <Text style={styles.title}>Welcome Home,</Text>
              <Text style={styles.subTitle}>{user?.currentUser?.name}</Text>
            </View>
          </View>

          <View style={styles.grid}>
            <View style={styles.card1}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('RoomDevices', {
                    room: 'Living Room',
                  });
                }}>
                <Image
                  source={require('../../assets/livingRoom.jpg')}
                  style={styles.cardImage}
                />
                <View style={styles.detailSection}>
                  <Text style={styles.cardTitle}>Living Room</Text>
                  <Text style={styles.cardSubTitle}>
                    {user.list['Living Room'].length} Devices
                  </Text>
                </View>
                <View style={styles.switch}></View>
              </TouchableOpacity>
            </View>
            <View style={styles.card2}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('RoomDevices', {
                    room: 'Bathroom',
                  });
                }}>
                <Image
                  source={require('../../assets/bathroom.jpg')}
                  style={styles.cardImage}
                />
                <View style={styles.detailSection}>
                  <Text style={styles.cardTitle}>Bathroom</Text>
                  <Text style={styles.cardSubTitle}>
                    {user.list['Bathroom']?.length
                      ? `${user.list['Bathroom']?.length}`
                      : 'No'} 
                    Device
                  </Text>
                </View>
                <View style={styles.switch}></View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.grid}>
            <View style={styles.card1}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('RoomDevices', {
                    room: 'DiningRoom',
                  });
                }}>
                <Image
                  source={require('../../assets/diningroom.jpg')}
                  style={styles.cardImage}
                />
                <View style={styles.detailSection}>
                  <Text style={styles.cardTitle}>Dining Room</Text>
                  <Text style={styles.cardSubTitle}>
                    {user.list['Dining Room']?.length
                      ? `user.list['Dining Room']?.length`
                      : 'No'}
                    Devices
                  </Text>
                </View>
                <View style={styles.switch}></View>
              </TouchableOpacity>
            </View>
            <View style={styles.card2}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('RoomDevices', {
                    room: 'Bedroom',
                  });
                }}>
                <Image
                  source={require('../../assets/bedroom.jpg')}
                  style={styles.cardImage}
                />
                <View style={styles.detailSection}>
                  <Text style={styles.cardTitle}>Bedroom</Text>
                  <Text style={styles.cardSubTitle}>
                    {user.list['Bedroom']?.length
                      ? `user.list['Bedroom']?.length`
                      : 'No'}{' '}
                    Devices
                  </Text>
                </View>
                <View style={styles.switch}></View>
              </TouchableOpacity>
            </View>
          </View>
        </Container>
      </ImageBackground>
    </ScrollView>
  );
};
const mapStatetoProps = store => {
  return {
    user: store.users,
  };
};
const mapDispatchToProps = dispatch =>
  bindActionCreators({setIds, setMessages}, dispatch);
export default connect(mapStatetoProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  profile: {
    display: 'flex',
    flexDirection: 'row',
  },
  leftProfile: {
    width: wp('60%'),
  },
  rightProfile: {
    width: wp('40%'),
  },
  detailSection: {
    backgroundColor: '#055680',
    padding: 8,
    borderRadius: 15,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  logoImage: {
    height: 150,
    width: 150,
    alignSelf: 'flex-end',
    marginTop: 0,
    marginRight: 0,
  },
  cardImage: {
    width: '100%',
    height: 'auto',
    aspectRatio: 1,
    marginTop: 0,
    marginRight: 0,
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 3,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  title: {
    fontSize: 14,
    paddingTop: 20,
    fontWeight: '500',
    color: 'white',
  },

  subTitle: {
    fontSize: 21,
    paddingVertical: 5,
    fontWeight: '500',
    color: 'white',
  },
  card1: {
    margin: 12,
    marginLeft: 0,
    padding: 5,
    paddingBottom: 40,
    flex: 2,
    borderRadius: 10,
    borderColor: 'white',
  },
  card2: {
    margin: 12,
    marginLeft: 0,
    marginRight: 0,
    padding: 5,
    paddingBottom: 40,
    flex: 2,
    borderRadius: 10,
    borderColor: 'white',
  },
  cardTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardSubTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  switch: {
    alignItems: 'flex-start',
    backgroundColor: '#055680',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },

  grid: {
    flexDirection: 'row',
    margin: 0,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

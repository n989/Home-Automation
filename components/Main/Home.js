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

const rows = 3;
const cols = 2;
const marginHorizontal = 4;
const marginVertical = 4;
const width =
  Dimensions.get('window').width / cols - marginHorizontal * (cols + 1);
const height =
  Dimensions.get('window').height / rows - marginVertical * (rows + 1);
const Home = ({navigation}) => {
  const [switch1, setSwitch1] = useState(true);
  const [switch2, setSwitch2] = useState(true);
  const [switch3, setSwitch3] = useState(true);
  const [switch4, setSwitch4] = useState(true);

  const toggleSwitch1 = () => setSwitch1(previousState => !previousState);
  const toggleSwitch2 = () => setSwitch2(previousState => !previousState);
  const toggleSwitch3 = () => setSwitch3(previousState => !previousState);
  const toggleSwitch4 = () => setSwitch4(previousState => !previousState);

  return (
    <ScrollView>
      <ImageBackground
        source={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/smart-home-c3cf6.appspot.com/o/WhatsApp%20Image%202022-05-11%20at%208.28.38%20PM.jpeg?alt=media&token=8ab54a4f-1bcf-424a-8bac-eadfb1188089',
        }}
        imageStyle={{opacity: 1}}
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          resizeMode: 'cover',
        }}>
        <Container>
          <View style={styles.profile}>
            <View style={styles.leftProfile}>
              <Text style={styles.title}>Welcome Home,</Text>
              <Text style={styles.subTitle}>Naveen Kumar Meena</Text>
            </View>
            <View style={styles.rightProfile}>
              <Image
                height={70}
                width={70}
                // source={require('../../assets/signup.jpeg')}
                style={styles.logoImage}
              />
            </View>
          </View>

          <View style={styles.grid}>
            <View style={styles.card1}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('RoomDevices', {
                    room: 'LivingRoom',
                  });
                }}>
                <Image
                  source={require('../../assets/livingRoom.jpg')}
                  style={styles.cardImage}
                />
                <View style={{backgroundColor: '#055680'}}>
                  <Text style={styles.cardTitle}>Living Room</Text>
                  <Text style={styles.cardSubTitle}>5 Devices</Text>
                </View>
                <View style={styles.switch}>
                  <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={switch1 ? '#f5dd4b' : '#f4f3f4'}
                    onValueChange={toggleSwitch1}
                    value={switch1}
                  />
                </View>
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
                <View style={{backgroundColor: '#055680'}}>
                  <Text style={styles.cardTitle}>Bathroom</Text>
                  <Text style={styles.cardSubTitle}>5 Devices</Text>
                </View>
                <View style={styles.switch}>
                  <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={switch2 ? '#f5dd4b' : '#f4f3f4'}
                    // ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch2}
                    value={switch2}
                  />
                </View>
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
                <View style={{backgroundColor: '#055680'}}>
                  <Text style={styles.cardTitle}>Dining Room</Text>
                  <Text style={styles.cardSubTitle}>5 Devices</Text>
                </View>
                <View style={styles.switch}>
                  <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={switch3 ? '#f5dd4b' : '#f4f3f4'}
                    // ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch3}
                    value={switch3}
                  />
                </View>
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
                <View style={{backgroundColor: '#055680'}}>
                  <Text style={styles.cardTitle}>Bedroom</Text>
                  <Text style={styles.cardSubTitle}>5 Devices</Text>
                </View>
                <View style={styles.switch}>
                  <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={switch4 ? '#f5dd4b' : '#f4f3f4'}
                    // ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch4}
                    value={switch4}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/* <TouchableOpacity
            onPress={() => {
              navigation.navigate('AllRooms');
            }}>
            <View style={{display: 'flex', alignSelf: 'flex-end'}}>
              <Text style={{color: 'blue'}}>See all</Text>
            </View>
          </TouchableOpacity> */}
          {/* </ImageBackground> */}
        </Container>
      </ImageBackground>
    </ScrollView>
  );
};

export default Home;

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

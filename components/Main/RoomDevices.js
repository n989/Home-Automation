import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {Device} from './Device';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RoomDevices = ({route}) => {
  console.log(route.params);
  return (
    <View style={{padding: 20, backgroundColor: '#062949', height: '100%'}}>
      {/* <Text style={styles.heading}>12 Devices</Text>
      <Text style={{color: 'black'}}>Connected</Text> */}
      <View>
        <FlatList
          data={Device}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.card}>
              <View style={styles.userInfo}>
                <View style={styles.userImgWrapper}>
                  <MaterialCommunityIcons name="home" size={26} />

                  {/* <Image style={styles.userImgWrapper} source={''} /> */}
                </View>
                <View style={styles.textSection}>
                  <View style={styles.userInfoText}>
                    <Text style={styles.userName}>{item.deviceName}</Text>
                    <Text style={styles.postTime}>{item.usageTime}</Text>
                  </View>
                  <Text style={styles.messageText}>{item.deviceRoom}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default RoomDevices;

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

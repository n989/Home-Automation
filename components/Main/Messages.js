import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {Message} from './Message';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Messages = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Messages</Text>
      <FlatList
        data={Message}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate('DisplayMessage', {
                userName: item.userName,
                messageTime: item.messageTime,
                messageText: item.messageText,
              })
            }>
            <View style={styles.userInfo}>
              <View style={styles.userImgWrapper}>
                <MaterialCommunityIcons
                  name="account-circle"
                  // color={color}
                  size={46}
                />
              </View>
              <View style={styles.textSection}>
                <View style={styles.userInfoText}>
                  <Text style={styles.userName}>{item.userName}</Text>
                  <Text style={styles.postTime}>{item.messageTime}</Text>
                </View>
                <Text style={styles.messageText}>{item.messageText}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 20,
    // alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  heading: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 15,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  card: {
    width: '100%',
  },
  userInfo: {
    flexDirection: 'row',
  },
  userImgWrapper: {
    // backgroundColor: 'red',
    // paddingBottom: 15,
    paddingTop: 25,
  },

  textSection: {
    // backgroundColor: 'green',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 15,
    paddingLeft: 0,
    marginLeft: 10,
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
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
    color: '#666',
  },
  postTime: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'Lato-Regular',
  },
  messageText: {
    fontSize: 14,
    color: '#333333',
  },
});
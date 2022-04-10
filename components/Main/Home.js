import {StyleSheet, Text, View, ScrollView, Image, Switch} from 'react-native';
import React, {useState} from 'react';
import Container from '../common/Container';
import {hp, wp} from '../common/Dimension/dimension';
import {FlatGrid} from 'react-native-super-grid';
const Home = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
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
            // source={require('../../assets/images/logo.png')}
            style={styles.logoImage}
          />
        </View>
      </View>
      <ScrollView
        scrollEventThrottle={16}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.scrollBox}>
          <Text style={styles.scrollText}>All Room</Text>
        </View>
        <View style={styles.scrollBox}>
          <Text style={styles.scrollText}>Living Room</Text>
        </View>
        <View style={styles.scrollBox}>
          <Text style={styles.scrollText}>Dining Room</Text>
        </View>
        <View style={styles.scrollBox}>
          <Text style={styles.scrollText}>Study Room</Text>
        </View>
      </ScrollView>
      <FlatGrid
        style={styles.flatGrid}
        itemDimension={130}
        data={['Living Room', 'Bathroom', 'Dining Room', 'Bedroom']}
        renderItem={({item}) => (
          <Container style={styles.card}>
            <View>
              <Text style={styles.cardTitle}>{item}</Text>
              <Text>5 Devices</Text>
            </View>
            <View style={styles.switch}>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={true}
              />
            </View>
          </Container>
        )}
      />
    </Container>
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

  title: {
    fontSize: 14,
    paddingTop: 20,
    fontWeight: '500',
    color: 'black',
  },

  subTitle: {
    fontSize: 21,
    paddingVertical: 5,
    fontWeight: '500',
  },

  scrollBox: {
    marginRight: 15,
  },
  scrollText: {
    fontSize: 20,
    color: '#2b2a27',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    marginTop: 10,
    border: '1px solid black',
    borderWidth: 1,
  },
  cardTitle: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  switch: {
    alignItems: 'flex-start',
  },
  flatGrid: {
    marginTop: 40,
  },
});

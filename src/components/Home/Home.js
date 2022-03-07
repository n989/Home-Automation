import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Text, View, ScrollView, Switch} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import styles from './styles';
import {getTheme} from 'react-native-material-kit';
const HomeComponenet = ({}) => {
  const {navigate} = useNavigation();
  const theme = getTheme();
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <ScrollView>
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
              source={require('../../assets/images/logo.png')}
              style={styles.logoImage}
            />
          </View>
        </View>
        <View></View>

        <ScrollView>
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
        </ScrollView>
        <Container style={styles.container}>
          <Container style={styles.card}>
            <View>
              <Text style={styles.cardTitle}>Living Room</Text>
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
          <Container style={styles.card}>
            <View>
              <Text style={styles.cardTitle}>Living Room</Text>
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
          <Container style={styles.card}>
            <View>
              <Text style={styles.cardTitle}>Living Room</Text>
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
          <Container style={styles.card}>
            <View>
              <Text style={styles.cardTitle}>Living Room</Text>
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
        </Container>
      </Container>
    </ScrollView>
  );
};

export default HomeComponenet;

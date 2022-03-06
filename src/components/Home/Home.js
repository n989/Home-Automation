import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Text, View, ScrollView, Switch} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import {REGISTER} from '../../constants/routeNames';
import Message from '../common/Message';
import {FlatListSlider} from 'react-native-flatlist-slider';
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
        <ScrollView>
          <ScrollView
            scrollEventThrottle={16}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <View style={{borderWidth: 1, marginRight: 5}}>
              <Text style={{fontSize: 20}}>1234</Text>
            </View>
            <View style={{borderWidth: 1, marginRight: 5}}>
              <Text style={{fontSize: 20}}>1234</Text>
            </View>
            <View style={{borderWidth: 1, marginRight: 5}}>
              <Text style={{fontSize: 20}}>1234</Text>
            </View>
            <View style={{borderWidth: 1, marginRight: 5}}>
              <Text style={{fontSize: 20}}>1234</Text>
            </View>
            <View style={{borderWidth: 1, marginRight: 5}}>
              <Text style={{fontSize: 20}}>1234</Text>
            </View>
            <View style={{borderWidth: 1, marginRight: 5}}>
              <Text style={{fontSize: 20}}>1234</Text>
            </View>
            <View style={{borderWidth: 1, marginRight: 5}}>
              <Text style={{fontSize: 20}}>1234</Text>
            </View>
            <View style={{borderWidth: 1, marginRight: 5}}>
              <Text style={{fontSize: 20}}>1234</Text>
            </View>
            <View style={{borderWidth: 1, marginRight: 5}}>
              <Text style={{fontSize: 20}}>1234</Text>
            </View>
            <View style={{borderWidth: 1, marginRight: 5}}>
              <Text style={{fontSize: 20}}>1234</Text>
            </View>
            <View style={{borderWidth: 1, marginRight: 5}}>
              <Text style={{fontSize: 20}}>1234</Text>
            </View>
            <View style={{borderWidth: 1, marginRight: 5}}>
              <Text style={{fontSize: 20}}>1234</Text>
            </View>
            <View style={{borderWidth: 1, marginRight: 5}}>
              <Text style={{fontSize: 20}}>1234</Text>
            </View>
          </ScrollView>
        </ScrollView>
        <Container>
          <View style={styles.card}>
            <Text>Living Room</Text>
            <Text>5 Devices</Text>
          </View>
          <View>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={true}
            />
          </View>
        </Container>
        <Container>
          <View style={styles.card}>
            <Text>Living Room</Text>
            <Text>5 Devices</Text>
          </View>
          <View>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={true}
            />
          </View>
        </Container>
        <Container>
          <View style={styles.card}>
            <Text>Living Room</Text>
            <Text>5 Devices</Text>
          </View>
          <View>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={true}
            />
          </View>
        </Container>
        <Container>
          <View style={styles.card}>
            <Text>Living Room</Text>
            <Text>5 Devices</Text>
          </View>
          <View>
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
    </ScrollView>
  );
};

export default HomeComponenet;

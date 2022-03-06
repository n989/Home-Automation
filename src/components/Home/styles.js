import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
import {hp, wp} from '../../constants/dimension';
export default StyleSheet.create({
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
    margin: 15,
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
});

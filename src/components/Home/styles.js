import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
// import colors from '../../../assets/theme/colors';
import {hp, wp} from '../../constants/dimension';
export default StyleSheet.create({
  profile: {
    display: 'flex',
    flexDirection: 'row',
  },
  leftProfile: {
    width: wp('40%'),
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
    fontSize: 21,
    textAlign: 'center',
    paddingTop: 20,
    fontWeight: '500',
  },

  subTitle: {
    fontSize: 14,
    textAlign: 'center',
    paddingVertical: 5,
    fontWeight: '500',
  },
});

import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('screen');
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../Assets/colors/colors';
export default StyleSheet.create({
  backgroundStyle: {
    // flex: 1,
  },
  linearGradient: {
    // flex: 1,
    height:"100%"
  },
  title: {
    fontFamily: 'Axiforma-Regular', 
    fontWeight: '700',
    fontSize: 24,
    color: colors.white,
    marginLeft: 24,
    marginTop: 10,
  },
  image: {
    // flex:1,
    // resizeMode: 'center',
    backgroundColor:'white',
    height: wp(90),
    width:wp(90),
    borderRadius:wp(45)
  },
  subTitle: {
    fontFamily: 'Axiforma-Regular',
    fontWeight: '400',
    fontSize: 16,
    color: colors.white,
    marginLeft: 24,
    marginTop: 13,
  },
  whiteButton: {
    marginHorizontal: 24,
    marginTop: 20,
    borderRadius: 40, 
    backgroundColor: colors.white,
  },
  transparentButton: {
    marginHorizontal: 24,
    marginTop: 18,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.white,
  },
  transparentButton2: {
    marginHorizontal: 24,
    marginTop: 18,
  },
  buttonText: {
    fontFamily: 'Axiforma-Regular',
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
    color: colors.primary,
    paddingVertical: 10,
  },
  whiteText: {
    fontFamily: 'Axiforma-Regular',
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
    color: colors.white,
    paddingVertical: 10,
  },
});

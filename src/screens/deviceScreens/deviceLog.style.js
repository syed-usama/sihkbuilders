import {StyleSheet} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  linearGradient: {
    flex: 1,
  },
  deviceImage: {
    resizeMode: "stretch",
    height: 80,
    width: 80,
  },
  header: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  headerText: {
    fontFamily: 'Axiforma-Regular',
    fontWeight: '900',
    fontSize: 32,
    color: '#FFFFFF',
    marginTop: 20,
    marginBottom: 15,
  },
  headerSubtext: {
    fontFamily: 'Axiforma-Regular',
    fontWeight: '400',
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: 12,
  },
  top: {
    marginTop: 20,
    marginLeft: 15,
  },
  buttons: {
    flex: 3.5,
    marginTop: 20,
  },
  modalImg: {
    height: heightPercentageToDP(40),
    width: widthPercentageToDP(90)
},
imgModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
},
  body: {
    flex: 4,
    backgroundColor: '#F2F2F2',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  bodytext: {
    fontFamily: 'Axiforma-Regular',
    fontWeight: '700',
    fontSize: 20,
    color: '#000000',
    marginTop: 24,
  },
  bodytext2: {
    fontFamily: 'Axiforma-Regular',
    fontWeight: '900',
    fontSize: 16,
    color: '#3A78F3',
    marginTop: 24,
  },
  devices: {
    marginTop: 10,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 6,
  },
  deviceContent: {
    flex: 8,
    marginLeft: 10,
  },
  subTitle: {
    fontFamily: 'Axiforma-Regular',
    fontWeight: '400',
    fontSize: 12,
    color: '#333333',
  },
  title: {
    marginTop: 5,
    fontFamily: 'Axiforma-Regular',
    fontWeight: '700',
    fontSize: 16,
    color: '#333333',
  },
  status: {
    flex: 2,
    fontFamily: 'Axiforma-Regular',
    fontWeight: '400',
    fontSize: 12,
    color: '#333333',
  },
});

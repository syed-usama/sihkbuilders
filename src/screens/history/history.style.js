import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  linearGradient: {
    flex: 1,
  },
  top: {
    marginTop: 20,
    marginLeft: 15,
  },
  body: {
    flex: 4,
    backgroundColor: '#F2F2F2',
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  bodytext: {
    fontFamily: 'Axiforma-Regular',
    fontWeight: '700',
    fontSize: 20,
    color: '#000000',
  },
  bodytext2: {
    fontFamily: 'Axiforma-Regular',
    fontWeight: '900',
    fontSize: 16,
    color: '#3A78F3',
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

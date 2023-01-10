import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  main: {
    height: height - 80,
  },
  body: {
    flex: 1,
    marginHorizontal: 10,
  },
  NotiView: {
    borderRadius: 20,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    marginVertical: 5,
    paddingVertical:10
  },
  title: {
      marginLeft: 10,
    fontFamily: 'Axiforma-Regular',
    fontWeight: '800',
    fontSize: 18,
    color: 'black',
  },
  button: {
    height: 30,
    marginTop: 10,
    flexDirection: 'row',
    textAlign: 'center',
  },
  approve: {
    flex: 1,
    marginLeft:10,
    borderRadius: 10,
    backgroundColor: 'green',
    fontFamily: 'Axiforma-Regular',
    fontWeight: '400',
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },
  reject: {
    textAlign: 'center',
    marginRight:10,
    borderRadius: 10,
    textAlignVertical: 'center',
    flex: 1,
    fontFamily: 'Axiforma-Regular',
    backgroundColor: 'red',
    fontWeight: '400',
    fontSize: 12,
    color: 'white',
  },
  message: {
    fontFamily: 'Axiforma-Regular',
    fontWeight: '400',
    color: '#8a8988',
    fontSize: 14,
    marginTop: 5,
  },
  from: {
    fontFamily: 'Axiforma-Regular',
    fontWeight: '400',
    color: 'blue',
    fontSize: 14,
    marginBottom: -3
  },
  backButton: {
    marginLeft: 10,
    marginTop: 25,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 15,
  },
});

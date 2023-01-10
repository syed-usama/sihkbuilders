import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image:{
    height: 270,
    width: 301
  },
  linearGradient: {
    flex: 2,
    borderTopLeftRadius: 80,
      borderTopRightRadius:80,
  },
  header: {
    flex:2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body:{
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center'
      
  },
  bodytext:{
    fontFamily: 'Axiforma-Regular',
    fontWeight: '900',
    fontSize: 24,
    color: 'white',
    marginTop: 8
  },
});

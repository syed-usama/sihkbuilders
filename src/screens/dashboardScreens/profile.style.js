import {StyleSheet} from 'react-native';
import colors from '../../Assets/colors/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  linearGradient: {
    flex: 1,
  },
  image:{
    height: 80,
    width: 80,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  header: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  headerText:{
    fontFamily: 'Axiforma-Regular',
    fontWeight: '900',
    fontSize: 32,
    color: '#FFFFFF',
    marginTop: 10,
    marginBottom: 15,
  },
  top:{
      marginTop: 50,
      marginLeft:15
  },
  body:{
      flex: 3,
      backgroundColor: "#F2F2F2",
      borderTopLeftRadius: 40,
      borderTopRightRadius:40,
      paddingHorizontal: 20,
  },
  row:{
      flexDirection: 'row',
      justifyContent: "space-between",
      alignItems: 'center',
      marginBottom: 10,
  },
  bodytext:{
    fontFamily: 'Axiforma-Regular',
    fontWeight: '700',
    fontSize: 20,
    color: '#000000',
    marginTop: 24
  },
devices:{
  marginTop: 10,
  flexDirection: "row",
  paddingVertical: 10,
  paddingHorizontal:15,
  backgroundColor: "white",
  alignItems: 'center',
  borderRadius:6,
},
deviceContent:{
  flex:8,
  marginLeft: 5
},
subTitle:{
  fontFamily: 'Axiforma-Regular',
  fontWeight: '400',
  fontSize: 16,
  color: '#333333',
  marginLeft: 15
},
title:{
  marginTop:5,
  fontFamily: 'Axiforma-Regular',
  fontWeight: '700',
  fontSize: 16,
  color: '#333333',
},
status: {
  flex:2,
  fontFamily: 'Axiforma-Regular',
  fontWeight: '400',
  fontSize: 12,
  color: '#333333',
},
modalView: {
  // backgroundColor: "white",
  // paddingTop:15,
  flex: 1,
},
modalMain:{
  marginTop:15,
  flex:1,
  backgroundColor: "white",
  elevation: 5,
},
modalHeader: {
  borderTopLeftRadius:10,
  borderTopRightRadius:10,
  backgroundColor: colors.primary,
  flexDirection:'row',
  justifyContent: 'space-between',
  alignItems:'center',
  paddingVertical:20,
  paddingHorizontal:5,
  paddingTop:30
},
headerTitle:{
  marginRight:20,
  fontFamily: 'Axiforma-Regular',
  fontWeight: '700',
  fontSize: 18,
  color: 'white',
},
modalBody:{
  padding:15,
},
bodyTitle:{
  fontFamily: 'Axiforma-Regular',
  fontWeight: '700',
  fontSize: 18,
  color: '#333333',
},
bodyDescription:{
  marginTop:4,
  fontSize: 12,
  color: '#929496',
},
modalTextInput:{
  borderColor: '#ccc',
  borderWidth:1,
  borderRadius:5,
  marginTop:15,
  fontSize: 14,
  color: 'black',
  paddingLeft:10,
  height:35
},
button:{
  marginTop:20,
  height:40,
  backgroundColor: colors.primary,
  borderRadius:10,
  justifyContent:'center'
},
buttonText:{
  textAlign:'center',
  fontFamily: 'Axiforma-Regular',
  fontWeight: '700',
  fontSize: 16,
  color: 'white',
},
});

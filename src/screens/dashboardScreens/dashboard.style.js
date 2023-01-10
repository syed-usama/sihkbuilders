import {StyleSheet,Dimensions} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import colors from '../../Assets/colors/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  linearGradient: {
    flex: 1,
  },
  header: {
    flex:2,
    justifyContent: "center",
  },
  topbar:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchbar:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  searchbarView:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "white",
    marginHorizontal: 16,
    marginVertical: 20,
    borderRadius: 6,
    paddingRight: 16,
  },
  searchText:{
    marginLeft: 16,
    fontFamily: 'Axiforma-Regular',
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
    color: '#BDBDBD',
  },
  username: {
    flex:3,
    fontFamily: 'Axiforma-Regular',
    fontWeight: '700',
    fontSize: 16,
    color: 'white',
    marginLeft:5,

    },
  leftIcons: {
      flex:1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginRight: 16,
  },
  notification: {
      height: 24,
      width: 24,
      marginRight:10,
  },
  profile: {
    borderRadius: 42/2,
    borderWidth:1,
    borderColor:'white',
    height: 42,
      width:42,
      marginLeft: 18  ,
  },
  body:{
      flex: 6,
      backgroundColor: "#F2F2F2",
      borderTopLeftRadius: 40,
      borderTopRightRadius:40,
      paddingHorizontal: 20,
  },
  emptybody:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
},
emptyimage2:{
    height: 100,
    width: 100
},
  emptybodyText:{
    fontFamily: 'Axiforma-Regular',
    fontWeight: '900',
    fontSize: 24,
    color: '#333333',
  },
  emptybodyText2:{
    fontFamily: 'Axiforma-Regular',
    fontWeight: '400',
    fontSize: 14,
    color: '#828282',
  },
  bodytext:{
    fontFamily: 'Axiforma-Regular',
    fontWeight: '700',
    fontSize: 16,
    color: '#333333',
    marginTop: 5
  },
devices:{
  marginTop: 10,
  flexDirection: "row",
  paddingVertical: 20,
  paddingHorizontal:15,
  backgroundColor: "white",
  alignItems: 'center',
  borderRadius:6,
},
deviceImage:{
  resizeMode: "stretch",
  width: 30,
  height: 25,
},
modalImg: {
  height: heightPercentageToDP(40),
  width: widthPercentageToDP(90)
},
imgModal: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white'
},
deviceContent:{
  flex:6,
  marginLeft: 10
},
deviceName:{
  fontFamily: 'Axiforma-Regular',
  fontWeight: '400',
  fontSize: 12,
  color: '#828282',
},
deviceImie:{
  marginTop:5,
  fontFamily: 'Axiforma-Regular',
  fontWeight: '700',
  fontSize: 16,
  color: '#4F4F4F',
},
status: {
  fontFamily: 'Axiforma-Regular',
  fontWeight: '400',
  fontSize: 12,
  color: 'white',
  textAlign:'center',
  paddingHorizontal:16,
  paddingVertical: 6,
  borderRadius: 40,
},
banner1:{
  flex:1,
  resizeMode: "stretch",
  marginTop:10,
  height: 140
},
footer:{
  justifyContent: "flex-end",
  marginBottom:40
},
badgeIconView:{
  position:'relative',
  padding:6
},
badge:{
  color:'#fff',
  position:'absolute',
  top:1,
  right:1,
  fontSize:12,
},
transfer:{
  backgroundColor: colors.primary,
  borderBottomLeftRadius: 6,
  borderBottomRightRadius: 6,
  alignItems: 'center',
},
transferText:{
  fontFamily: 'Axiforma-Regular',
  fontWeight: '800',
  fontSize: 14,
  color: 'white',
},
cancel:{
  fontFamily: 'Axiforma-Regular',
  fontWeight: '800',
  fontSize: 14,
  color: colors.primary,
  marginTop:3,
  marginBottom:-10,
}
});

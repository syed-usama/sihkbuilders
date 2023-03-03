import {StyleSheet,Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../../Assets/colors/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  linearGradient: {
    flex: 1,
  },
  header: {
    flex:1,
    // justifyContent: "center",
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    flex:3,
    fontFamily: 'Axiforma-Regular',
    fontWeight: '700',
    fontSize: 15,
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
  body:{
      flex: 7,
      backgroundColor: "white",
      borderTopLeftRadius: 40,
      borderTopRightRadius:40,
      paddingHorizontal: 20,
      paddingTop:hp(3)
  },
  row:{
    marginTop:hp(4),
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:wp(2),
  },
  card:{
    paddingHorizontal:wp(2),
    flexDirection:'row',
    alignItems:'center',
    height:wp(34),
    width:wp(40),
    backgroundColor:colors.primary,
    borderRadius:14
  },
  cardText:{
    fontSize:14,
    fontWeight:'500',
    color:'white',
    marginLeft:8,
    textAlign:'center',
  },
  footer:{
    position:'absolute',
    bottom:40,
    alignSelf:'center',
    width:wp(80)
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
});

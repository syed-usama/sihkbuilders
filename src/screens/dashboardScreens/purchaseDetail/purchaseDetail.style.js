import {StyleSheet} from 'react-native';
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
  header: {
    height: hp(10),
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(5),
  },
  textheader: {
    fontSize: 20,
    color: 'white',
    marginLeft: wp(23),
    fontWeight: '600',
  },
  footer: {
    height: hp(90),
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center',
  },
  row:{
    marginTop:10,
    width:wp(90),
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  row2:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  box:{
    marginHorizontal:4,
    paddingHorizontal:4,
    height:hp(4),
    width:wp(18),
    backgroundColor:colors.primary,
    borderRadius:4,
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center'
  },
  boxText:{
    fontSize:13,
    fontWeight:'500',
    color:'white'
  },
  dropdown:{
    top:hp(7),
    zIndex:99999,
    backgroundColor:'rgba(255,255,255,0.8)',
    right:wp(16),
    position:'absolute',
    height:hp(25),
    width:wp(40),
    borderWidth:1,
    borderColor:'grey'
  },
  rowItem:{
    width:wp(40),
    borderBottomWidth:0.5,
    justifyContent:'center',
    alignItems:'center',
    height:20
  },
  rowText:{
    color:'grey',
  },
});

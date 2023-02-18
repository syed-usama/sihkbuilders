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
  card:{
    marginTop:hp(3),
    backgroundColor:'#F2F2F7',
    width:wp(90),
    borderRadius:10
},
cardtextandtillView:{
    marginTop:hp(2),
    width:wp(90),
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:10
},
textdate:{
    fontSize:15,
    color:'black'
},
texttillid:{
    fontSize:15,
    color:'black'
},
projectnameView:{
    marginTop:10,
    width:wp(90),
    flexDirection:'row',
    paddingHorizontal:10,
    justifyContent:'space-between'
},
textprojectname:{
    fontSize:17,
    fontWeight:'bold',
    color:'black'
},
iconsView:{
    marginTop:hp(1.5),
    width:wp(90),
    flexDirection:'row',
},
expandablecardView:{
    width:wp(90),
    paddingHorizontal:10,
    marginBottom:10,
    marginTop:5
},
textexpensetype:{
    fontSize:15,
    color:'black',
},
textexpensepaytype:{
    fontSize:15,
    color:'black',
},
textexpensepayref:{
    fontSize:15,
    color:'black',
},
textexpensenote:{
    fontSize:15,
    color:'black',
},
});

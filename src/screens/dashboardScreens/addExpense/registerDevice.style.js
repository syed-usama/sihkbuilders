import {StyleSheet} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import colors from '../../../Assets/colors/colors';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    main:{
        backgroundColor: 'white',
        marginTop:-hp(5),
        height:hp(90),
        borderTopLeftRadius: 40,
      borderTopRightRadius:40,
      paddingTop:hp(2),
      paddingHorizontal:wp(3),
    },
    mainx:{},
    backButton:{
        marginLeft: 10,
        marginTop: 25,
    },
    header: {
        height:hp(15),
        backgroundColor:colors.primary,
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingTop:hp(3),
      },
      headerText:{
        marginLeft:-wp(10),
        fontWeight:'600',
        fontSize:22,
        color : "white",
        fontWeight:'600'
      },
    footer: {
        justifyContent: 'flex-end',
        marginVertical: 20,
    },
    sheetContainer:{
        paddingBottom:20,
        borderWidth:1,
        borderColor:'grey',
        borderRadius:10
    },
    checkIcon:{
        position:'absolute',
        right:30,
        top:15,
        paddingTop:1,
        backgroundColor:'#3ce630',
     borderRadius:10,
     borderWidth:1,
    borderColor:'grey'
},
    line:{
        marginTop:5,
        backgroundColor:'grey',
        height:8,
        width:80,
        alignSelf:'center',
        borderRadius:5,
    },
    title:{
        textAlign:'center',
        paddingVertical:20,
        fontFamily:'Axiforma-Regular',
        fontSize:22,
        color : "black"
    },
    sheet1:{
        justifyContent:'space-evenly',
    },
    itemWrapper:{
        alignItems:'center',
        paddingVertical:15,
    },
    sheetItem:{
        fontFamily:'Axiforma-Regular',
        fontSize:18,
        color : "black"
    },
});

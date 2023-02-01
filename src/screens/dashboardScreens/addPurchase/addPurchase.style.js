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
        backgroundColor:colors.secondary,
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

      card:{
        marginTop:20,
        borderRadius:15,
        paddingBottom:20,
        backgroundColor:colors.secondary
      },
      label: {
        fontFamily: 'Axiforma-Regular',
        fontWeight: '400',
        fontSize: 14,
        marginLeft: 18,
        marginTop: 20,
        color: 'white',
      },
      label1: {
        fontFamily: 'Axiforma-Regular',
        fontWeight: '400',
        fontSize: 14,
        marginTop: 10,
        color: 'white',
      },
      textfield: {
        flexDirection: 'row',
        paddingHorizontal:15,
        backgroundColor: '#F2F2F2',
        height: 45,
        width:wp(25),
        borderRadius: 6,
        marginTop: 5,
      },
      textfield1: {
        flexDirection: 'row',
        paddingHorizontal:15,
        backgroundColor: '#F2F2F2',
        height: 45,
        width:wp(50),
        borderRadius: 6,
        marginTop: 5,
      },
      row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:wp(5)
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
    table:{
      marginTop:20,
      borderWidth:4,
      borderRadius:10,
      borderColor:colors.secondary,
    },
headerRow:{
  backgroundColor:colors.secondary,
  flexDirection:'row',
  height:hp(6),
  alignItems:'center',
  paddingHorizontal:10
},
tableText0:{
  width:wp(5),
  color:'white',
  fontSize:14,
  fontWeight:'500'
},
tableText1:{
  width:wp(40),
  color:'white',
  fontSize:14,
  fontWeight:'500'
},
tableText2:{
  width:wp(20),
  color:'white',
  textAlign:'center',
  fontSize:14,
  fontWeight:'500'
},
tableText3:{
  width:wp(25),
  color:'white',
  textAlign:'center',
  fontSize:14,
  fontWeight:'500'
},
tableRow:{
  flexDirection:'row',
  height:hp(4),
  alignItems:'center',
  paddingHorizontal:10
},
rowText0:{
  height:hp(4),
  width:wp(5),
  color:'grey',
  fontWeight:'500',
  textAlignVertical:'center',
  fontSize:13,
  borderRightWidth:2,
  borderColor:colors.secondary,
},
rowText1:{
  paddingLeft:5,
  height:hp(4),
  width:wp(43),
  color:'grey',
  fontWeight:'500',
  textAlignVertical:'center',
  fontSize:13,
  borderRightWidth:2,
  borderColor:colors.secondary,
},
rowText2:{
  height:hp(4),
  width:wp(15),
  color:'grey',
  fontWeight:'500',
  textAlignVertical:'center',
  textAlign:'center',
  fontSize:13,
  borderRightWidth:2,
  borderColor:colors.secondary,
},
rowText3:{
  height:hp(4),
  width:wp(28),
  color:'grey',
  fontWeight:'500',
  textAlignVertical:'center',
  textAlign:'center',
  fontSize:13,
},
button:{
  marginTop:20,
  alignSelf:'center',
  height:hp(4.5),
  backgroundColor:'white',
  borderRadius:10,
  width:wp(35),
  alignItems:'center',
  justifyContent:'center'
},
buttonText:{
  fontSize:14,
  fontWeight:'600',
  color:'black'
},
});

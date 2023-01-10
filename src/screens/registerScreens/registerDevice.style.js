import {StyleSheet} from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    main:{
    },
    backButton:{
        marginLeft: 10,
        marginTop: 25,

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

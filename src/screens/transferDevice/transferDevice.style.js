import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
    container: {
        flex: 1,
    },
    main:{
        height: height - 80,
    },
    backButton:{
        marginLeft: 10,
        marginTop: 25,

    },
    record:{
        marginTop: 20,
        flexDirection: "row",
        paddingVertical: 20,
        paddingHorizontal:15,
        backgroundColor: "white",
        alignItems: 'center',
        borderRadius:6,
        marginHorizontal: 18,
      },
      profile:{
        flex:1,
        height: 40,
        width: 40,
      },
      deviceContent:{
        flex:6,
        marginLeft: 10,
      },
      username:{
        fontFamily: 'Axiforma-Regular',
        fontWeight: '700',
        fontSize: 16,
        color: '#333333',
      },
      email:{
        marginTop:5,
        fontFamily: 'Axiforma-Regular',
        fontWeight: '400',
        fontSize: 12,
        color: '#828282',
      },
      note:{
          flexDirection: 'row',
          backgroundColor: 'rgba(235, 87, 87, 0.1)',
          marginHorizontal: 16,
          paddingVertical: 8,
          paddingLeft: 40,
          marginTop: 10,
          alignItems: 'center'
      },
      noteText:{
        fontFamily: 'Axiforma-Regular',
        fontWeight: '400',
        fontSize: 14,
        color: '#EB5757',
        marginLeft:10
      },
    footer: {
        flex:1,
        justifyContent: 'flex-end',
        marginBottom: 15,
    },
});

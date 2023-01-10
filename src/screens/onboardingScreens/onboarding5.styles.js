import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../Assets/colors/colors';
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    main:{
        height: height - 80,
    },
    backButton:{
        marginLeft: 10,
        marginTop: 25,

    }, 
    biometrics:{
        flex:3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        height:50,
        width:50
    },
    biometricsText:{
        marginTop: 20,
        fontFamily: 'Axiforma-Regular',
    fontWeight: '400',
    fontSize: 16,
    color: "#000000",
    },
    remember:{
     fontFamily: 'Axiforma-Regular',
     fontWeight: '400',
     fontSize: 14,
     color: "#000000",
     marginLeft:5
    },
    forgot:{
    fontFamily: 'Axiforma-Regular',
    fontWeight: '400',
    fontSize: 14,
    color: colors.primary,
    },
    footer: {
        flex:1,
        justifyContent: 'flex-end',
        marginBottom: 15,
    },
});

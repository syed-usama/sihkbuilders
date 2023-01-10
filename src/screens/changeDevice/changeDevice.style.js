import {StyleSheet, Dimensions} from 'react-native';
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
    footer: {
        flex:1,
        justifyContent: 'flex-end',
        marginBottom: 15,
    },
});

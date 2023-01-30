import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Image,
  ImageBackground,
} from 'react-native';
import { widthPercentageToDP ,heightPercentageToDP} from 'react-native-responsive-screen';
import colors from '../../Assets/colors/colors';
import styles from './splashScreen.style';
const SplashScreen = () => {
    const [flag,setFlag] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setFlag(true);
        }, 1200);
      }, []);
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor= {colors.primary} />
        <ImageBackground
        source={require('../../Assets/Images/splashImage.jpg')}  
        style={{width: widthPercentageToDP(100), height: heightPercentageToDP(100) }}>
        {flag ||
        <Image
        source={require('../../Assets/Images/verivault_splash.gif')}  
        style={{width: widthPercentageToDP(100), height: heightPercentageToDP(100) }}
    />}
    </ImageBackground>
    </SafeAreaView>
  );
};

export default SplashScreen;

import React from 'react';
import styles from './confirmation.style';
import LinearGradient from 'react-native-linear-gradient';
import style from '../../styles/globle.style';
import {SafeAreaView, Text, View, Image, TouchableOpacity} from 'react-native';
import colors from '../../Assets/colors/colors';

const Confirmation = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
        <Image
            style={styles.image}
            source={require('../../Assets/Images/frame.png')}
          />
        </View>
        <LinearGradient
        start={{x: 0.0, y: 0.3}}
        end={{x: 0.5, y: 0.5}}
        locations={[0, 1.0]}
        colors={[colors.primary,colors.primary]}
        style={styles.linearGradient}>
        <View style={styles.body}>
            <Text style={styles.bodytext}>Your Request to Transfer</Text>
            <Text style={styles.bodytext}>Successfully Completed</Text>
        </View>
        <View style={{marginBottom:10}}>
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Dashboard')}>
        <View style={style.whiteButton}>
          <Text style={style.blueButtonText}>Done</Text>
          </View>
          </TouchableOpacity>
          </View>
          </LinearGradient>
    </SafeAreaView>
  );
};
export default Confirmation;

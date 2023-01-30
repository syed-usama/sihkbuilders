import React, { useEffect, useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import styles from "./home.styles";
import colors from "../../Assets/colors/colors";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";

const Home = ({ navigation }) => {
  return (
    <View style={styles.backgroundStyle}>
      <LinearGradient
        start={{ x: 0.0, y: 0.3 }}
        end={{ x: 0.5, y: 0.5 }}
        locations={[0, 1.0]}
        colors={[colors.primary, colors.primary]}
        style={styles.linearGradient}
      >
        <View style={{ flexDirection: "row",paddingTop:heightPercentageToDP(12) ,justifyContent:"center", paddingBottom:65}}>
          <Image
            style={styles.image}
            source={require("../../Assets/Images/logo1.png")}
            resizeMode='center'
          />
        </View>
        <View style={{ marginTop:heightPercentageToDP(1)}}>
          
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              navigation.navigate("Onboarding5")}
          >
            <View style={styles.transparentButton}>
              <Text style={styles.whiteText}>Login</Text>
            </View>
          </TouchableOpacity>

        </View>
      </LinearGradient>
    </View>
  );
};
export default Home;

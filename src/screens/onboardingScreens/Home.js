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
        <View style={{ flexDirection: "row",paddingTop:60 ,justifyContent:"center", paddingBottom:65}}>
          <Image
            style={styles.image}
            source={require("../../Assets/Images/newCover.png")}
          />
        </View>
        <View style={{ }}>
          
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

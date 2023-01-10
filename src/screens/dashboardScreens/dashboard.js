import React, { useContext, useEffect, useState } from "react";
import styles from "./dashboard.style";
import style from "../../styles/globle.style";
import Ionicons from "react-native-vector-icons/Ionicons";
import Ant from "react-native-vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LinearGradient from "react-native-linear-gradient";
import colors from "../../Assets/colors/colors";
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  ActivityIndicator,
} from "react-native";
import { AuthContext } from "../../services/firebase/authProvider";

const Dashboard = ({ navigation }) => {
  const [isLoading, setLoading] = useState(false);
  const { user, logout } = useContext(AuthContext);
  useEffect(() => {
    session();
  }, []);
  const session = async () => {
    const jsonValue = await AsyncStorage.getItem("lastTime");
    if (jsonValue != null) {
      const lastTime1 = JSON.parse(jsonValue);
      var lastTime = new Date(lastTime1);
      var newtime = new Date();
      lastTime.setMinutes(lastTime.getMinutes() + 30);
      if (lastTime.getTime() < newtime.getTime()) {
        logout();
      } else {
        const jsonValue = JSON.stringify(new Date());
        await AsyncStorage.setItem("lastTime", jsonValue);
      }
    } else {
      const jsonValue = JSON.stringify(new Date());
      await AsyncStorage.setItem("lastTime", jsonValue);
    }
  };
  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={style.loader}>
          <ActivityIndicator size={50} color={colors.primary} />
        </View>
      ) : null}
      <LinearGradient
        start={{ x: 0.0, y: 0.3 }}
        end={{ x: 0.5, y: 0.5 }}
        locations={[0, 1.0]}
        colors={[colors.primary, colors.primary]}
        style={styles.linearGradient}
      >
        <View style={styles.header}>
          <View style={{ flex: 1 }}></View>
          <View style={styles.topbar}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{ flex: 1 }}
              onPress={() =>
                navigation.openDrawer()
              }
            >
                <Image
                  style={styles.profile}
                  source={require("../../Assets/Images/userDefault.png")}
                />
            </TouchableOpacity>
            <Text style={styles.username}>Hi , {user.name}</Text>
            <View style={styles.leftIcons}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() =>
                  navigation.navigate("Notifications")
                }
                style={styles.badgeIconView}
              >
                <Text style={styles.badge}> ● </Text>
                <Ionicons name="notifications-sharp" size={25} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.body}>
        <View style={styles.footer}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() =>
                navigation.navigate("RegisterDevice")
              }
            >
              <View style={style.blueButton}>
                <Text style={style.whiteButtonText}>Add a new product</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};
export default Dashboard;

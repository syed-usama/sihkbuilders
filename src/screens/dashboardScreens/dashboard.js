import React, {useContext, useEffect, useState} from 'react';
import styles from './dashboard.style';
import style from '../../styles/globle.style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../Assets/colors/colors';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import {AuthContext} from '../../services/firebase/authProvider';

const Dashboard = ({navigation}) => {
  const [isLoading, setLoading] = useState(false);
  const {user, logout} = useContext(AuthContext);
  useEffect(() => {
    session();
  }, []);
  const session = async () => {
    const jsonValue = await AsyncStorage.getItem('lastTime');
    if (jsonValue != null) {
      const lastTime1 = JSON.parse(jsonValue);
      var lastTime = new Date(lastTime1);
      var newtime = new Date();
      lastTime.setMinutes(lastTime.getMinutes() + 30);
      if (lastTime.getTime() < newtime.getTime()) {
        logout();
      } else {
        const jsonValue = JSON.stringify(new Date());
        await AsyncStorage.setItem('lastTime', jsonValue);
      }
    } else {
      const jsonValue = JSON.stringify(new Date());
      await AsyncStorage.setItem('lastTime', jsonValue);
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
        start={{x: 0.0, y: 0.3}}
        end={{x: 0.5, y: 0.5}}
        locations={[0, 1.0]}
        colors={[colors.primary, colors.primary]}
        style={styles.linearGradient}>
        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{flex: 1}}
            onPress={() => navigation.openDrawer()}>
            <FontAwesome
              name="bars"
              size={27}
              style={{marginLeft: 25}}
              color={'white'}
            />
          </TouchableOpacity>
          <Text style={styles.username}>Hi , {user.name}</Text>
          <View style={styles.leftIcons}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate('Notifications')}
              style={styles.badgeIconView}>
              <Text style={styles.badge}> ● </Text>
              <Ionicons name="notifications-sharp" size={25} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.card}>
              <AntDesign name="addusergroup" size={50} color="white" />
              <View>
                <Text style={styles.cardText}>Suppliers</Text>
                <Text style={styles.cardText}>9</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <MaterialCommunityIcons
                name="office-building"
                size={50}
                color="white"
              />
              <View>
                <Text style={styles.cardText}>Projects</Text>
                <Text style={styles.cardText}>15</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.card}>
              <AntDesign name="piechart" size={45} color="white" />
              <View>
                <Text style={styles.cardText}>Expenses</Text>
                <Text style={styles.cardText}>6,142,414</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <Ionicons name="md-people-sharp" size={45} color="white" />
              <View>
                <Text style={styles.cardText}>Employees</Text>
                <Text style={styles.cardText}>12</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('AddPurchase')}>
              <View
                style={[style.blueButton, {backgroundColor: colors.secondary}]}>
                <Text style={style.whiteButtonText}>Add Purchase</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('RegisterDevice')}>
              <View style={style.blueButton}>
                <Text style={style.whiteButtonText}>Add Expense</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};
export default Dashboard;

import React, {useContext, useEffect, useState} from 'react';
import styles from './dashboard.style';
import style from '../../../styles/globle.style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../../Assets/colors/colors';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import {AuthContext} from '../../../services/firebase/authProvider';
import { get_dashboard_data, get_expense_types, get_items_list, get_projects_list, get_suppliers_list } from '../../../services/endPoints';
import { useDispatch, useSelector } from 'react-redux';
import { addExpenseTypes, addItems, addProjects, addStats, addSuppliers } from '../../../redux/actions/userAction';

const Dashboard = ({navigation}) => {
  const dispatch = useDispatch();
  const Stats = useSelector(state => state.user.stats);
  const [isLoading, setLoading] = useState(false);
  const {user, logout} = useContext(AuthContext);
  
  useEffect(() => {
    // console.log('Stats',Stats)
    session();
    if(Stats == null || Stats == undefined || Stats == [] || Stats == ''){
      getData()
    }
  }, []);
  const getData =async () =>{
    console.log('getData')
    const stat = await get_dashboard_data();
    dispatch(addStats(stat));
    // const items = await get_items_list();
    // dispatch(addItems(items));
    // const projects = await get_projects_list();
    // dispatch(addProjects(projects));
    // const etypes = await get_expense_types();
    // dispatch(addExpenseTypes(etypes));
    // const suppliers = await get_suppliers_list();
    // dispatch(addSuppliers(suppliers));
  }
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
          <Text style={styles.username}>Hi , {user.use_name}</Text>
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
                <Text style={styles.cardText}>{Stats?.suppliers}</Text>
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
                <Text style={styles.cardText}>{Stats?.projects}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.card}>
              <AntDesign name="piechart" size={45} color="white" />
              <View>
                <Text style={styles.cardText}>Expenses</Text>
                <Text style={styles.cardText}>{Stats?.expenses}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <Ionicons name="md-people-sharp" size={45} color="white" />
              <View>
                <Text style={styles.cardText}>Employees</Text>
                <Text style={styles.cardText}>{Stats?.employees}</Text>
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
              onPress={() => navigation.navigate('AddExpense')}>
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

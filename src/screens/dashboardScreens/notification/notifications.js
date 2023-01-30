import React, {useState, useEffect, useContext} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import style from '../../../styles/globle.style';
import styles from './notifications.style';
import {AuthContext} from '../../../services/firebase/authProvider';
import colors from '../../../Assets/colors/colors';
FontAwesome.loadFont();
const Notifications = ({navigation,route}) => {
  const [isLoading, setLoading] = useState(false);
  const {user} = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <View style={style.loader}> 
          <ActivityIndicator size={50} color={colors.primary} />
        </View>
      ) : null}
        <View style={styles.main}>
          <View style={styles.top}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.goBack()}>
              <FontAwesome
                style={styles.backButton}
                name="chevron-left"
                size={22}
                color="black"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.title}>
            <Text style={style.titleText}>Notification</Text> 
          </View>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.message}>There are no notifications</Text>
            </View>
        </View>
    </SafeAreaView>
  );
};

export default Notifications;

import React, { useState, useEffect, useContext } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {
  ActivityIndicator,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import CheckBox from '@react-native-community/checkbox';
import { Authenticate, checkBiometricSupportednEnrolled } from '../../services/biometricService/biometricService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from '../../styles/globle.style';
import styles from './onboarding5.styles';
import { AuthContext } from '../../services/firebase/authProvider';
import colors from '../../Assets/colors/colors';
import { showToast } from '../../services/toast/shortToast';
//FontAwesome.loadFont();
const Onboarding5 = ({ navigation }) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [useremail, setuseremail] = useState('');
  const [userpassword, setuserpassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [isSupported, setissupported] = useState(false);
  const [remember, setremember] = useState(false);
  const [touchid, settouchid] = useState(false);
  const [biometric, setbiometric] = useState(false);
  const [visible, setVisible] = useState(true);
  const [fingerprint, setfingerprint] = useState(false);


  const { login } = useContext(AuthContext);
  const validate = () => {
    if (isLoading) {
      showToast("Wait..")
    } else {
      setLoading(true);
      if (email == '' || password == '') {
        showToast("Email and Password Required")
        setLoading(false);
      } else {
        login(email, password, changeLoader);
      }
    }
  };
  const changeLoader = (res) => {
    if(res){
      StoreDate();
      storeDetails();
      setLoading(false);
    }else{
      setLoading(false);
    }
  };
  const changetouchid = () => {
    settouchid(true);
  };
  const StoreDate = async () => {
    const jsonValue = JSON.stringify(new Date());
    await AsyncStorage.setItem('lastTime', jsonValue);
    if (remember) {
      await AsyncStorage.setItem('remember', '0');
    } else {
      await AsyncStorage.setItem('remember', '1');
    }
    if (biometric) {
      await AsyncStorage.setItem('biometric', '1');
    } else {
      await AsyncStorage.setItem('biometric', '0');
    }
  };
  const storeDetails = async () => {
    if (remember || biometric) {
      try {
        await AsyncStorage.setItem('useremail', email);
        await AsyncStorage.setItem('userpassword', password);
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        await AsyncStorage.setItem('useremail', '');
        await AsyncStorage.setItem('userpassword', '');
      } catch (e) {
        console.log(e);
      }
    }
  };
  const checkDetails = async () => {
    try {
      const remember = await AsyncStorage.getItem('remember');
      const biometric = await AsyncStorage.getItem('biometric');
      const useremail = await AsyncStorage.getItem('useremail');
      const userpassword = await AsyncStorage.getItem('userpassword');
      if (biometric !== null) {
        if (biometric == '1') {
          setbiometric(true);
          setfingerprint(true);
          setuseremail(useremail);
          setuserpassword(userpassword);
          touchlogin();
        } else {
          setfingerprint(false);
          setbiometric(false);
        }
      }
      if (remember !== null) {
        if (remember == '1') {
          setremember(false);
        } else {
          setremember(true);
          setemail(useremail);
          setpassword(userpassword);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  const touchlogin = async () => {
    Authenticate(changetouchid);
  }
  const changeissupported = (value) => {
    setissupported(value);
    console.log('value', value)
  }
  useEffect(() => {
    checkDetails();
    if (Platform.OS === 'android'){
      checkBiometricSupportednEnrolled(changeissupported);
    }
  }, []);
  useEffect(() => {
    if (touchid) {
      setLoading(true);
      login(useremail, userpassword, changeLoader);
    }
  }, [touchid])
  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <View style={style.loader}>
          <ActivityIndicator size={50} color={colors.primary} />
        </View>
      ) : null}
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.top}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate('Home')}>
              <FontAwesome
                style={styles.backButton}
                name="chevron-left"
                size={22}
                color="black"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.title}>
            <Text style={style.titleText}>Welcome Back,</Text>
            <Text style={style.subtitleText}>
              Enter your login details to continue
            </Text>
          </View>
          <View style={styles.email}>
            <Text style={style.label}>Email</Text>
            <View style={style.textfield1}>
              <TextInput
                placeholder="Enter your email"
                placeholderTextColor={'#949693'}
                autoCapitalize='none'
                style={style.textfieldText}
                value={email}
                keyboardType="email-address"
                onChangeText={email => setemail(email)}
              />
              {email != '' ? (
                <AntDesign
                  style={{ flex: 1 }}
                  name="checkcircleo"
                  size={22}
                  color="green"
                />
              ) : null}
            </View>
          </View>
          <View style={styles.password}>
            <Text style={style.label}>Password</Text>
            <View style={style.textfield2}>
              <TextInput
                placeholder="Enter password"
                placeholderTextColor={'#949693'}
                autoCapitalize='none'
                style={style.textfieldText}
                secureTextEntry={visible}
                value={password}
                onChangeText={password => setpassword(password)}
              />
              {visible ? (
                <Feather
                  style={{ flex: 1 }}
                  name="eye-off"
                  size={22}
                  color="black"
                  onPress={() => setVisible(false)}
                />
              ) : (
              <Feather
                  style={{ flex: 1 }}
                  name="eye"
                  size={22}
                  color="black"
                  onPress={() => setVisible(true)}
                />
                )}
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 15,
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <CheckBox
                disabled={false}
                value={remember}
                boxType={'square'}
                tintColors={{ true: colors.primary, false: colors.primary }}
                tintColor={colors.primary}
                onFillColor={colors.primary}
                onCheckColor={colors.white}
                onValueChange={newValue => setremember(newValue)}
              />
              <Text style={styles.remember}>Remember Me</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.forgot}>Forgot Password</Text>
            </TouchableOpacity>
          </View>
          {isSupported &&
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 15,
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CheckBox
                  disabled={false}
                  value={biometric}
                  tintColors={{ true: colors.primary, false: colors.primary }}
                  onValueChange={newValue => setbiometric(newValue)}
                />
                <Text style={styles.remember}>Biometric Login</Text>
              </View>
            </View>}
          {biometric && fingerprint ?
          <View style={styles.biometrics}>
            <TouchableOpacity onPress={() => touchlogin()}>
            <Image
              style={styles.image}
              source={require('../../Assets/Images/Fingerprint.png')}
            /></TouchableOpacity>
            <TouchableOpacity onPress={() => touchlogin()}><Text style={styles.biometricsText}>Sign in with Biometrics</Text></TouchableOpacity>
          </View>:null}
          <View style={styles.footer}>
            <TouchableOpacity activeOpacity={0.7} onPress={() => validate()}>
              <View style={style.blueButton}>
                <Text style={style.whiteButtonText}>Next</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Onboarding5;

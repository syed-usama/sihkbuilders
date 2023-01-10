import React, {useState, useRef, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import style from '../../styles/globle.style';
import styles from './transferDevice.style';
import firestore from '@react-native-firebase/firestore';
import PhoneInput from 'react-native-phone-number-input';
import { useSelector } from 'react-redux';
import { sendNotification } from '../../services/notifications/sendNotification';
import { showToast } from '../../services/toast/shortToast';
FontAwesome.loadFont();
const TransferDevice = ({navigation, route}) => {
  const userDetail = useSelector((state) => state.user.user);
  const device = route.params.device;
  const [flag, setflag] = useState('2');
  const phoneInput = useRef(null);
  const [phoneNumber , setPhoneNumber] = useState("");
  const validate = () => {
    let phoneNo1 = phoneNumber.replace("+2340", "+234");
    let phoneNo = phoneNo1.replace("+920", "+92");
    setflag('2');
    if(phoneNo == ''){
      showToast("Enter a valid Phone Number")
    }else if(phoneNo == userDetail.phoneNo){
      showToast("You Can't transfer to your own Phone Number")
    }else{
      var userEmail;
    firestore()
      .collection('users')
      // Filter results 
      .where('phoneNo', '==', phoneNo)
      .get()
      .then(querySnapshot => {
        setflag(querySnapshot.size);
        querySnapshot.forEach(documentSnapshot => {
          let result = documentSnapshot.data();
          userEmail=result.email;
          var to = userEmail;
          var title='Transfer Request'
          var notiMessage=userDetail.phoneNo+" wants to transfer a device to you. Open app to check details.";
          sendNotification(to,title,notiMessage);
          firestore()
            .collection('devices')
            .doc(device.did)
            .update({
              transferPending: userEmail,
              phoneNo : userDetail.phoneNo,
            })
            .then(() => {
              console.log('Device updated!');
              navigation.navigate('TransferConfirmation');
            })
            .catch(error => {
              console.log('error', error);
            });
        });
      });
  }
  };
  // const updateDate =() =>{
  //   firestore()
  //   .collection('ProductStatus')
  //   .get()
  //   .then(querySnapshot => {
  //     querySnapshot.forEach(documentSnapshot => {
  //       firestore()
  //           .collection('ProductStatus')
  //           .doc(documentSnapshot.id)
  //           .update({
  //             dateAdded : firestore.Timestamp.fromDate(new Date()),
  //           })
  //           .then(() => {
  //             console.log('Device updated!');
  //           })
  //           .catch(error => {
  //             console.log('error', error);
  //           });
  //     })
  //   })
  // }
  // useEffect(()=>{
  //   //updateDate();
  // });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
          <View>
            <Text style={style.titleText2}>Transfer Device</Text>
            <Text style={style.subtitleText2}>
              Enter the Phone Number of the person
            </Text>
            <Text style={style.subtitleText}>
              you are transferring your device to.
            </Text>
          </View>

          <View>
            <Text style={style.label}>Phone Number</Text>
            <View>
            <PhoneInput
                ref={phoneInput}
                color={'#949693'}
                defaultValue={phoneNumber}
                defaultCode="NG"
                withShadow
                placeholder="Enter Phone Number"
                placeholderTextColor={'black'}
                containerStyle={style.phoneInput}
                textContainerStyle={{paddingVertical: 0}}
                onChangeFormattedText={value => {
                  setPhoneNumber(value);
                }}
              />
            </View>
          </View>
          {flag != '0' ? null : (
            <View style={styles.note}>
              <AntDesign name="closecircle" size={24} color="red" />
              <Text style={styles.noteText}>This user doesn't exist.</Text>
            </View>
          )}
          <View style={styles.footer}>
            <TouchableOpacity activeOpacity={0.7} onPress={() => validate()}>
              <View style={style.blueButton}>
                <Text style={style.whiteButtonText}>Proceed</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TransferDevice;

import React, { useState,useEffect } from 'react';
import styles from './deviceLog.style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ant from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import style from '../../styles/globle.style';
import {SafeAreaView, Text, View, Image, TouchableOpacity, Modal, TouchableWithoutFeedback, ImageBackground} from 'react-native';
import colors from '../../Assets/colors/colors';
import firestore from '@react-native-firebase/firestore';
import { showToast } from '../../services/toast/shortToast';
import { constants } from '../../global/constants';
import PinchableBox from '../../components/pinchableBox';

const DeviceLog = ({navigation, route}) => {
  const[history , setHistory] = useState([]);
  const[profileModal , setProfileModal] = useState(false);
  const monthNames = ["","January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

  const device = route.params.device;
  
  function formatAMPM(mdate) {
    //var date = new Date(mdate)
    var date = new Date(mdate.seconds*1000);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  const formatDate =(mdate) => {
    var date = new Date(mdate.seconds*1000);
    var day = date.getDate(); //To get the Current Date
    var month = date.getMonth() + 1; //To get the Current Month
    var year = date.getFullYear(); //To get the Current Year
    let result = '';
    if (day == 1){
      result = day + "st of " + monthNames[month] + " "+year;
    }else if(day == 2){
      result = day + "nd of " + monthNames[month] + " "+year;
    }else if(day == 3){
      result = day + "rd of " + monthNames[month] + " "+year;
    }else{
      result = day + "th of " + monthNames[month] + " "+year;
    }
    return result;
  }
  useEffect(() => {
    firestore()
    .collection('history')
    // Filter results
    .where('deviceId', '==', device.did)
    .limit(2)
    .get()
    .then(querySnapshot => {
      //console.log('Total History: ', querySnapshot.size);
      let result = [];
    querySnapshot.forEach(documentSnapshot => {
      //console.log('history Id: ', documentSnapshot.id, documentSnapshot.data());
      result.push(documentSnapshot.data());
    });
    setHistory(result);
    });
  },[]);
  const checkTransfer = () =>{
    if(device.transferPending == ''){
      navigation.navigate('TransferDevice',{device:device})
    }else{
      showToast("One Transfer Request is Already Pending")
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        start={{x: 0.0, y: 0.3}}
        end={{x: 0.5, y: 0.5}}
        locations={[0, 1.0]}
        colors={[colors.primary,colors.primary]}
        style={styles.linearGradient}>
        <View style={styles.top}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}>
            <FontAwesome
              style={styles.backButton}
              name="chevron-left"
                size={22}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <Image
          style={styles.deviceImage}
          source={{uri: device.url}}
        />
          <Text style={styles.headerText}>{device.deviceModel}</Text>
          {device.deviceType == constants.vehicle ?
          <Text style={styles.headerSubtext}>Vehicle Brand: {device.deviceBrand}</Text>
          :
          <Text style={styles.headerSubtext}>Device Brand: {device.deviceBrand}</Text>
          }
          {device.deviceType == constants.vehicle ?
          <Text style={styles.headerSubtext}>Vin NUMBER: {device.deviceVinNo}</Text>
          :device.deviceType == constants.mobile ?
          <View style={{alignItems: 'center'}}>
          <Text style={styles.headerSubtext}>IMIE NUMBER: {device.deviceImeiNo}</Text>
          <Text style={styles.headerSubtext}>Serial NUMBER: {device.deviceSerialNo}</Text>
          </View>
          :
          <Text style={styles.headerSubtext}>Serial NUMBER: {device.deviceSerialNo}</Text>
          }
          {device.deviceType == constants.vehicle ?
          <Text style={styles.headerSubtext}>Vehicle Status: {device.deviceStatus}</Text>:
          <Text style={styles.headerSubtext}>Device Status: {device.deviceStatus}</Text>}
        </View>
        <View style={styles.buttons}>
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('ChangeDevice',{device:device})}>
        <View style={style.whiteButton}>
          <Text style={style.blueButtonText}>Change Device Status</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{flex:1,marginTop:10}}
            onPress={() => checkTransfer()}>
          <View style={{flex:1,justifyContent:'center'}}>
          <Text style={style.whiteButtonText}>Transfer Device Ownership</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{flex:1,marginBottom:10}}
            onPress={() => {device.receiptImage ? setProfileModal(true) : showToast('No receipt available')}}>
          <View style={{flex:1,justifyContent:'center'}}>
          <Text style={style.whiteButtonText}>View Purchase Receipt</Text>
          </View>
          </TouchableOpacity>
          </View>
        <View style={styles.body}>
          <View style={styles.row}>
            <Text style={styles.bodytext}>Device History</Text>
            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('History',{device:device})}>
              <Text style={styles.bodytext2}>See More</Text>
            </TouchableOpacity>
          </View>
          {history.map((item) => 
            <View style={styles.devices} key={item.status}>
            <View style={styles.deviceContent}>
              <Text style={styles.title}>Device {item.status}</Text>
              <Text style={styles.subTitle}>{formatDate(item.date)}</Text>
            </View>
            <Text style={styles.status}>{formatAMPM(item.date)}</Text>
          </View>
          )}
        </View>
        <Modal
                visible={profileModal}
                animationType='slide'
            >
                <View style={styles.imgModal}>
                    <TouchableOpacity
                    onPress={()=> setProfileModal(false)}
                     style={{position:'absolute',top:1,right:1,padding:30}}>
                <Ant name='close' size={25} color='white'/>
                </TouchableOpacity>
                    <TouchableWithoutFeedback style={styles.imgModal}>
                    <PinchableBox imageUri={device.receiptImage} />
                        {/* <ImageBackground source={{uri:device.receiptImage}} style={styles.modalImg} >
                        </ImageBackground> */}
                    </TouchableWithoutFeedback>
                </View>
            </Modal>
      </LinearGradient>
    </SafeAreaView>
  );
};
export default DeviceLog;

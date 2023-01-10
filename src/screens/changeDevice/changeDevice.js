import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import Feather from "react-native-vector-icons/Feather";
import style from '../../styles/globle.style';
import styles from './changeDevice.style';
import {Picker} from '@react-native-picker/picker';
import { showToast } from '../../services/toast/shortToast';
FontAwesome.loadFont();
const ChangeDevice = ({navigation,route}) => {
  const device = route.params.device;
  const [deviceStatus, setdeviceStatus] = useState({name:"Select"});
  const [AllStatus, setAllStatus] = useState([]);
  const validate = () => {
    if (
      deviceStatus.name == 'Select' 
    ) {
        showToast("Choose a status")
    } else {
    firestore()
  .collection('devices')
  .doc(device.did)
  .update({
    deviceStatus: deviceStatus.id,
  })
  .then(() => {
    console.log('Device updated!');
    firestore()
        .collection('history')
        .add({
          deviceId: device.did,
          date: firestore.Timestamp.fromDate(new Date()),
          status: deviceStatus.name,
        })
        .then((DocumentReference) => {
          var did = DocumentReference.id;
          firestore()
          .collection('history')
          .doc(did)
          .update({
            id: did
          })
          .then(() => {
            console.log("id updated")
          })
          .catch((error) => {
            console.log('error', error);
          });
          console.log("History Added");
          navigation.navigate('StatusConfirmation');
        })
        .catch(error => {
          console.log('error', error);
        });
  })
  .catch((error) => {
    console.log("error", error);
  });
}
  };
  const getDeviceData = () =>{
  firestore()
  .collection("ProductStatus")
  // Filter results
  .get()
  .then((querySnapshot) => {
    console.log("Total Status: ", querySnapshot.size);
    let result = [];
    querySnapshot.forEach((documentSnapshot) => {
      result.push(documentSnapshot.data());
    });
    setAllStatus(result);
  });
}
useEffect(() => {
getDeviceData();
}, []);
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
            <Text style={style.titleText2}>Change Device Status</Text>
            <Text style={style.subtitleText2}>
              Choose the status of device
            </Text>
            <Text style={style.subtitleText}>you want to set</Text>
          </View>
          <View>
            <Text style={style.label}>Product Status</Text>
            <TouchableOpacity
              style={style.textfield2}
              onPress={() => {
                SheetManager.show("sheet4");
              }}>
              <Text style={style.picker}>{deviceStatus.name}</Text>
              <MaterialIcons name="arrow-drop-down" size={24} color={'black'}/>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity activeOpacity={0.7}
            onPress={() => validate()}>
              <View style={style.blueButton}>
                <Text style={style.whiteButtonText}>Save</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <ActionSheet id="sheet4">
        <View style={style.sheetContainer}>
        <View style={style.line}></View>
          <Text style={style.title}>Select Product Type</Text>
        <View style={style.sheet1}>
          {AllStatus.map(item =>
          <TouchableOpacity
          key={item.id}
          style={style.itemWrapper}
            onPress={() => {
              setdeviceStatus(item);
              SheetManager.hide("sheet4");
            }}>
            <Text style={style.sheetItem}>{item.name}</Text>
            {deviceStatus.name == item.name ?
            <Feather name="check" size={14} style={style.checkIcon} color={'white'} />
            :null
            }
          </TouchableOpacity>
          )}
        </View>
        </View>
      </ActionSheet>
    </SafeAreaView>
  );
};

export default ChangeDevice;

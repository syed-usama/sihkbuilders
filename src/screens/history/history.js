import React, { useState,useEffect } from 'react';
import styles from './history.style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {SafeAreaView, Text, View, TouchableOpacity,ScrollView} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const History = ({navigation, route}) => {
  const[history , setHistory] = useState([]);
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
  return (
    <SafeAreaView style={styles.container}>
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
        <View style={styles.body}>
          <View style={styles.row}>
            <Text style={styles.bodytext}>Device History</Text>
          </View>
          <ScrollView>
          {history.map((item) => 
            <View style={styles.devices} key={item.id}>
            <View style={styles.deviceContent}>
              <Text style={styles.title}>Device {item.status}</Text>
              <Text style={styles.subTitle}>{formatDate(item.date)}</Text>
            </View>
            <Text style={styles.status}>{formatAMPM(item.date)}</Text>
          </View>
          )}
          </ScrollView>
        </View>
    </SafeAreaView>
  );
};
export default History;

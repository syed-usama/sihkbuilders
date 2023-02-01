import { View, Text, TouchableOpacity,ScrollView } from "react-native";
import React,{useState,useEffect} from "react";
import styles from "./purchaseDetail.style";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import PurchaseCard from "../../../components/purchaseCard/purchaseCard";
import { FlatList } from "react-native";

function PurchaseDetail({navigation}){

    useEffect(()=>{
        //console.log('DATA',dummyData)
    })

  //Data
  const dummyData = [
    {
      project_name: "THQ HOSPITAL",
      project_date:"8 January 2012",
      project_amount: "Rs 305,564",
      id: 1,
      project_purchase_supplier:"RAJA",
      project_purchase_billid:"55919",
      project_purchase_supplierid:"#2",
      project_purchase_no_of_items:"1 Items",
      project_purchase_totalamount:"305,564",
      project_purchase_paidamount:"305,564",
      project_purchase_pendingamount:"0",
    },
      
    
    {
      project_name: "THQ HOSPITAL",
      project_date:"4 January 2013",
      project_amount: "Rs 475600",
      id: 2,
      project_purchase_supplier:"Sageer",
      project_purchase_billid:"55919",
      project_purchase_supplierid:"#1",
      project_purchase_no_of_items:"1 Items",
      project_purchase_totalamount:"475600",
      project_purchase_paidamount:"475,000",
      project_purchase_pendingamount:"600",
    },
    {
      project_name: "THQ HOSPITAL",
      project_date:"28 December 2014",
      project_amount: "Rs 34100",
      id: 3,
      project_purchase_supplier:"Fiaz Bharat",
      project_purchase_billid:"55919",
      project_purchase_supplierid:"#2",
      project_purchase_no_of_items:"1 Items",
      project_purchase_totalamount:"34100",
      project_purchase_paidamount:"34000",
      project_purchase_pendingamount:"100",
    },
    {
      project_name: "THQ HOSPITAL",
      project_date:"23 December 2014",
      project_amount: "Rs 110,050",
      id: 4,
      project_purchase_supplier:"Mushtaq",
      project_purchase_billid:"55919",
      project_purchase_supplierid:"#3",
      project_purchase_no_of_items:"1 Items",
      project_purchase_totalamount:"110,050",
      project_purchase_paidamount:"110,050",
      project_purchase_pendingamount:"0",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
        <FontAwesome name="chevron-left" size={22} color={"white"} />
        </TouchableOpacity>
        <Text style={styles.textheader}> Purchase Detail </Text>
      </View>
      <View style={styles.footer}>
      <FlatList
        data={dummyData}
        showsVerticalScrollIndicator={false}
    renderItem={({item,index})=> (
          <PurchaseCard item={item} index={index} key={index}/>    
    )}/>
      </View>
    </View>
  );
};

export default PurchaseDetail;

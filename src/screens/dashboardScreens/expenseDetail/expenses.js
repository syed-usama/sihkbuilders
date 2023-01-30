import { View, Text, TouchableOpacity,ScrollView } from "react-native";
import React,{useState,useEffect} from "react";
import styles from "./expenses.style";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import ExpandableCard from '../../../components/expandable card/expandablecard';

function Expenses({navigation}){

    useEffect(()=>{
        //console.log('DATA',dummyData)
    })

  //Data
  const dummyData = [
    {
      project_name: "THQ HOSPITAL",
      project_date:"23 january 2012",
      project_amount: "Rs 1000",
      id: 1,
      project_type: "Labour cost",
      project_pay_type: "Cash",
      project_pay_ref: "Nazeer",
      project_note: "EASYPAISA",
      project_purchase_supplier:"RAJA",
      project_purchase_billid:"55919",
      project_purchase_supplierid:"1",
      project_purchase_no_of_items:"1 Items",
      project_purchase_totalamount:"305,564",
      project_purchase_paidamount:"305,564",
      project_purchase_pendingamount:"0",
    },
      
    
    {
      project_name: "THQ HOSPITAL",
      project_date:"23 january 2013",
      project_amount: "Rs 2000",
      id: 2,
      project_type: "Fuel",
      project_pay_type: "Online",
      project_pay_ref: "Usama Khalid",
      project_note: "JAZZCASH"
    },
    {
      project_name: "THQ HOSPITAL",
      project_date:"23 january 2014",
      project_amount: "Rs 3000",
      id: 3,
      project_type: "Ajustment",
      project_pay_type: "Cash",
      project_pay_ref: "Khalid",
      project_note: "MEEZAN BANK"
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
      <ScrollView>
      <View style={styles.footer}>
    {dummyData.map((item,index)=>{
        return (
          <ExpandableCard item={item} index={index}/>
        )    
    })}
      </View>
      </ScrollView>
    </View>
  );
};

export default Expenses;

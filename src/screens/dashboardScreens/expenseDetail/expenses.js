import { View, Text, TouchableOpacity,ScrollView } from "react-native";
import React,{useState,useEffect} from "react";
import styles from "./expenses.style";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import ExpenseCard from "../../../components/expenseCard/expenseCard";
import { FlatList } from "react-native";

function Expenses({navigation}){

    useEffect(()=>{
        //console.log('DATA',dummyData)
    })

  //Data
  const dummyData = [
    {
      project_name: "THQ HOSPITAL",
      project_date:"5 January 2012",
      project_amount: "Rs 15000",
      id: 1,
      project_type: "Labour cost",
      project_pay_type: "Pay Order",
      project_pay_ref: "Nazeer",
      project_note: "EASYPAISA",
    },
      
    
    {
      project_name: "THQ HOSPITAL",
      project_date:"26 December 2013",
      project_amount: "Rs 5000",
      id: 2,
      project_type: "Fuel",
      project_pay_type: "Online",
      project_pay_ref: "Ghafoor",
      project_note: "JAZZCASH"
    },
    {
      project_name: "THQ HOSPITAL",
      project_date:"24 December 2014",
      project_amount: "Rs 12000",
      id: 3,
      project_type: "Ajustment",
      project_pay_type: "Cash",
      project_pay_ref: "Nazeer",
      project_note: "MEEZAN BANK"
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
        <FontAwesome name="chevron-left" size={22} color={"white"} />
        </TouchableOpacity>
        <Text style={styles.textheader}> Expense Detail </Text>
      </View>
      <View style={styles.footer}>
        <FlatList
        data={dummyData}
        showsVerticalScrollIndicator={false}
    renderItem={({item,index})=> (
          <ExpenseCard item={item} index={index} key={index}/>    
    )}/>
      </View>
    </View>
  );
};

export default Expenses;

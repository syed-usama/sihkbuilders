import { View, Text, TouchableOpacity } from "react-native";
import React,{useState} from "react";
import styles from "./purchaseCard.style"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../../Assets/colors/colors";

function PurchaseCard({ navigation,item, index }) {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
    const [visible,setvisible] = useState(false);
    // console.log('items>> ',item.items)
    const getTotal = (list)=>{
      var total = 0;
      list.map(ite => total=total+ (parseInt(ite.ite_amount)*parseInt(ite.ite_qty)))
      return total;
    }
    const getDate = (mdate) =>{
      const myArray = mdate.split("-");
      var mont = parseInt(myArray[1])
      const newDate = myArray[2]+' '+monthNames[mont-1]+' '+myArray[0];
      return newDate;
    }


  return (
    <TouchableOpacity style={styles.card} onPress={()=> navigation.navigate('PurDetailScreen',{detail:item})} >

        <View style={styles.cardtextandtillView}>
          <Text style={styles.textdate}># {item?.pur_no}</Text>
          <Text style={styles.texttillid}>{getDate(item?.pur_date)}</Text>
        </View>

        <View style={styles.projectnameView}>
          <Text style={styles.textprojectname}>{item?.project_name}</Text>
          {/* <TouchableOpacity style={{ right: wp(2) }}>
            <MaterialCommunityIcons
              name="delete"
              size={25}
              color={colors.primary}
              style={{ alignSelf: "center" }}
            />
          </TouchableOpacity> */}
        </View>


    
      <View style={styles.expandablecardView}>
        <Text style={{flexDirection:'row',marginTop:5}}>
        <Text style={{fontWeight:'bold',fontSize:15,color:'black'}}>Supplier: </Text>
        <Text style={styles.textexpensetype}>{item?.suplier_name}</Text>
        </Text>

        <Text style={{flexDirection:'row',marginTop:5}}>
        <Text style={{fontWeight:'bold',fontSize:15,color:'black'}}>Supplier Bill NO:  </Text> 
        <Text style={styles.textexpensepayref}>{item?.pur_bill_no}</Text>
        </Text>

        <Text style={{flexDirection:'row',marginTop:5}}>
        <Text style={{fontWeight:'bold',fontSize:15,color:'black'}}>Total Amount: </Text>
        <Text style={styles.textexpensetype}>{getTotal(item?.items)}</Text>
        </Text>

        {/* <Text style={{flexDirection:'row',marginTop:5}}>
        <Text style={{fontWeight:'bold',fontSize:15,color:'black'}}>No. of items: </Text>
        <Text style={styles.textexpensenote}>{item?.items?.length}</Text>
        </Text> */}

      </View>
    
      

    {/* <View style={{left: wp(2.5), alignItems:'flex-end'}} >
            <MaterialIcons
              name={visible? "keyboard-arrow-up" : "keyboard-arrow-down"} 
              size={25}
              color={"black"}
              style={{ alignSelf: "center" }}
            />
    </View> */}
  
    </TouchableOpacity>
  );
}

export default PurchaseCard;

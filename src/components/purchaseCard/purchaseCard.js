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

function PurchaseCard({ item, index }) {

    const [visible,setvisible] = useState(false);

  return (
    <TouchableOpacity style={styles.card} onPress={()=> setvisible(!visible)} >

        <View style={styles.cardtextandtillView}>
          <Text style={styles.textdate}>{item.project_date}</Text>
          <Text style={styles.texttillid}>{item.project_amount}</Text>
        </View>

        <View style={styles.projectnameView}>
          <Text style={styles.textprojectname}>{item.project_name}</Text>
          <TouchableOpacity style={{ right: wp(2) }}>
            <MaterialCommunityIcons
              name="delete"
              size={25}
              color={colors.primary}
              style={{ alignSelf: "center" }}
            />
          </TouchableOpacity>
        </View>


    {visible &&
      <View style={styles.expandablecardView}>
        <Text style={{flexDirection:'row',marginTop:5}}>
        <Text style={{fontWeight:'bold',fontSize:15,color:'black'}}>Supplier: </Text>
        <Text style={styles.textexpensetype}>{item.project_purchase_supplier}</Text>
        </Text>

        <Text style={{flexDirection:'row',marginTop:5}}>
        <Text style={{fontWeight:'bold',fontSize:15,color:'black'}}>Bill ID: </Text>
        <Text style={styles.textexpensepaytype}>{item.project_purchase_billid}</Text>
        </Text>

        <Text style={{flexDirection:'row',marginTop:5}}>
        <Text style={{fontWeight:'bold',fontSize:15,color:'black'}}>Supplier Bill NO:  </Text> 
        <Text style={styles.textexpensepayref}>{item.project_purchase_supplierid}</Text>
        </Text>

        <Text style={{flexDirection:'row',marginTop:5}}>
        <Text style={{fontWeight:'bold',fontSize:15,color:'black'}}>No. of items: </Text>
        <Text style={styles.textexpensenote}>{item.project_purchase_no_of_items}</Text>
        </Text>

        <Text style={{flexDirection:'row',marginTop:5}}>
        <Text style={{fontWeight:'bold',fontSize:15,color:'black'}}>Total Amount: </Text>
        <Text style={styles.textexpensetype}>{item.project_purchase_totalamount}</Text>
        </Text>

        <Text style={{flexDirection:'row',marginTop:5}}>
        <Text style={{fontWeight:'bold',fontSize:15,color:'black'}}>Paid Amount: </Text>
        <Text style={styles.textexpensepaytype}>{item.project_purchase_paidamount}</Text>
        </Text>

        <Text style={{flexDirection:'row',marginTop:5}}>
        <Text style={{fontWeight:'bold',fontSize:15,color:'black'}}>Pending Amount: </Text>
        <Text style={styles.textexpensepayref}>{item.project_purchase_pendingamount}</Text>
        </Text>
      </View>
    }
      

    <View style={{left: wp(2.5), alignItems:'flex-end'}} >
            <MaterialIcons
              name={visible? "keyboard-arrow-up" : "keyboard-arrow-down"} 
              size={25}
              color={"black"}
              style={{ alignSelf: "center" }}
            />
    </View>
  
    </TouchableOpacity>
  );
}

export default PurchaseCard;

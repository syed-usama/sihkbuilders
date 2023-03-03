import React, {useState,  useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import style from '../../styles/globle.style';
import styles from './addPurchaseComp.style';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../Assets/colors/colors';

import { useSelector} from 'react-redux';
//FontAwesome.loadFont();
const AddPurchaseComp = ({navigation,citem,index,removeItem,updateValues,totalAmount}) => {
  const {items} = useSelector(state => state.user);
  const [pitem, setItem] = useState({ite_name: citem.ite_name ? citem.ite_name:'-- Select --',ite_unit: citem?.ite_unit});
  const [amount, setAmount] = useState(citem?.ite_amount);
  const [quantity, setQuantity] = useState(citem?.ite_qty);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        {index ?
        <TouchableOpacity 
        onPress={()=> removeItem(citem.id)}
        style={{position:'absolute' ,right:2,top:1,padding:10}}>
          <MaterialIcons name='close' size={20} color={'white'}/>
        </TouchableOpacity>
        :null}
        <View>
          <Text style={styles.label}>Item *</Text>
          <TouchableOpacity
            style={style.textfield2}
            onPress={() => {
              SheetManager.show(citem.id);
            }}>
            <Text style={style.picker}>{pitem.ite_name}</Text>
            <MaterialIcons name="arrow-drop-down" size={24} color={'black'} />
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <View style={styles.email}>
            <Text style={styles.label1}>Unit Qty *</Text>
            <View style={[styles.textfield,{width:wp(15)}]}>
              <TextInput
                placeholder="0"
                placeholderTextColor={'#949693'}
                keyboardType="number-pad"
                style={[style.textfieldText,{textAlign:'center'}]}
                value={quantity}
                onChangeText={value => {
                  setQuantity(value)
                  updateValues(citem.id,'qty',value,'0','0')
                  }}
              />
            </View>
          </View>

          <View style={styles.email}>
            <Text style={styles.label1}>Unit Amount *</Text>
            <View style={[styles.textfield,{width:wp(25)}]}>
              <TextInput
                placeholder="0"
                placeholderTextColor={'#949693'}
                keyboardType="number-pad"
                style={[style.textfieldText,{textAlign:'center'}]}
                value={amount}
                onChangeText={value => {
                  setAmount(value)
                  updateValues(citem.id,'amount',value,'0','0')
                }}
              />
            </View>
          </View>

          <View style={styles.email}>
            <Text style={styles.label1}>Total Amount *</Text>
            <View opacity={0.5} style={[styles.textfield,{width:wp(25)}]}>
              <Text style={[style.textfieldText,{textAlign:'center'}]}>{amount*quantity}</Text>
            </View>
          </View>

        </View>
      </View>
      <ActionSheet id={citem.id}>
        <View style={styles.sheetContainer}>
          <View style={styles.line}></View>
          <Text style={styles.title}>Select Item</Text>
          <ScrollView style={styles.sheet}>
            {items.map(item => (
              <TouchableOpacity
                key={item.ite_id}
                style={styles.itemWrapper}
                onPress={() => {
                  setItem(item);
                  updateValues(citem.id,'name',item.ite_name,item.ite_unit,item.ite_id)
                  SheetManager.hide(citem.id);
                }}>
                <Text style={styles.sheetItem}>{item.ite_name}</Text>
                {pitem.ite_name == item.ite_name ? (
                  <Feather
                    name="check"
                    size={14}
                    style={styles.checkIcon}
                    color={'white'}
                  />
                ) : null}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ActionSheet>
    </SafeAreaView>
  );
};

export default AddPurchaseComp;

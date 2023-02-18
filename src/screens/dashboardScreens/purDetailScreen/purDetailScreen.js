import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './purDetailScreen.style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FlatList} from 'react-native';
import {get_expense_list} from '../../../services/endPoints';
import globleStyle from '../../../styles/globle.style';
import {ActivityIndicator} from 'react-native';
import colors from '../../../Assets/colors/colors';
import ExpenseCard from '../../../components/expenseCard/expenseCard';

function PurDetailScreen({navigation, route}) {
  const detail = route.params.detail;
  const [expenseList, setExpenseList] = useState([]);
  const [isLoading, setLoading] = useState(false);
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
  const getTotal = (list)=>{
    var total = 0;
    list.map(ite => total=total+ (parseInt(ite.ite_amount)*parseInt(ite.ite_qty)))
    return total;
  }
  const getDate = mdate => {
    const myArray = mdate.split('-');
    var mont = parseInt(myArray[1]);
    const newDate = myArray[2] + ' ' + monthNames[mont - 1] + ' ' + myArray[0];
    return newDate;
  };

  useEffect(() => {
    // console.log('DATA',detail.items)
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={globleStyle.loader}>
          <ActivityIndicator size={50} color={colors.primary} />
        </View>
      ) : null}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="chevron-left" size={22} color={'white'} />
        </TouchableOpacity>
        <Text style={styles.textheader}> Expense Detail </Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.cardtextandtillView}>
        <Text style={styles.texttillid}>#{detail.pur_no}</Text>
          <Text style={styles.textdate}>{getDate(detail.pur_date)}</Text>
        </View>

        <View style={styles.projectnameView}>
          <Text style={styles.textprojectname}>{detail.project_name}</Text>
        </View>
        <View style={styles.expandablecardView}>
            
            <Text style={{flexDirection: 'row', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>
                Supplier Name:{' '}
              </Text>
              <Text style={styles.textexpensetype}>{detail.suplier_name}</Text>
            </Text>

            <Text style={{flexDirection: 'row', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>
                Purchase Bill No:{' '}
              </Text>
              <Text style={styles.textexpensetype}>{detail.pur_bill_no}</Text>
            </Text>

            <Text style={{flexDirection: 'row', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>
                Total Amount:{' '}
              </Text>
              <Text style={styles.textexpensetype}>{getTotal(detail.items)}</Text>
            </Text>
            <Text style={{flexDirection: 'row', marginTop: 10}}>
              <Text style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>
                Items:{' '}
              </Text>
              
            </Text>
            {detail.items.map((item)=>(

            
            <View style={{paddingHorizontal:15,paddingVertical:5}} key={item}>
            <Text style={{flexDirection: 'row', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 14, color: 'black'}}>
                Item Name:{' '}
              </Text>
              <Text style={styles.textexpensetype}>{item.ite_name} ({item.ite_unit})</Text>
            </Text>

            <Text style={{flexDirection: 'row', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 14, color: 'black'}}>
                Unit Amount:{' '}
              </Text>
              <Text style={styles.textexpensetype}>{item.ite_amount}</Text>
            </Text>

            <Text style={{flexDirection: 'row', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 14, color: 'black'}}>
                Quantity:{' '}
              </Text>
              <Text style={styles.textexpensetype}>{item.ite_qty}</Text>
            </Text>

            <Text style={{flexDirection: 'row', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 10, color: 'black'}}>
                ------------------------------------------------
              </Text>
            </Text>
            </View>
            ))}

        </View>
      </View>
    </View>
  );
}

export default PurDetailScreen;

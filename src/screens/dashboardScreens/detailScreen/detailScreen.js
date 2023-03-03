import {View, Text, TouchableOpacity, ScrollView, SafeAreaView, Platform} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './detailScreen.style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FlatList} from 'react-native';
import {get_expense_list} from '../../../services/endPoints';
import globleStyle from '../../../styles/globle.style';
import {ActivityIndicator} from 'react-native';
import colors from '../../../Assets/colors/colors';
import ExpenseCard from '../../../components/expenseCard/expenseCard';

function DetailScreen({navigation, route}) {
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
  const getDate = mdate => {
    const myArray = mdate.split('-');
    var mont = parseInt(myArray[1]);
    const newDate = myArray[2] + ' ' + monthNames[mont - 1] + ' ' + myArray[0];
    return newDate;
  };

  useEffect(() => {
    //console.log('DATA',dummyData)
  }, []);

  return (
    <SafeAreaView style={[styles.container,{marginTop:Platform.OS == 'ios' ? -20 : 0}]}>
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
          <Text style={styles.textdate}>{getDate(detail.exp_date)}</Text>
          <Text style={styles.texttillid}>{' '}</Text>
        </View>

        <View style={styles.projectnameView}>
          <Text style={styles.textprojectname}>{detail.project_name}</Text>
        </View>
        <View style={styles.expandablecardView}>
          {detail.expense_type && 
            <Text style={{flexDirection: 'row', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>
                Expense Type:{' '}
              </Text>
              <Text style={styles.textexpensetype}>{detail.expense_type}</Text>
            </Text>
          }
          {detail.employee_name && (
            <Text style={{flexDirection: 'row', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>
                Employee Name:{' '}
              </Text>
              <Text style={styles.textexpensetype}>{detail.employee_name}</Text>
            </Text>
          )}
          {detail.suplier_name && (
            <Text style={{flexDirection: 'row', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>
                Supplier Name:{' '}
              </Text>
              <Text style={styles.textexpensetype}>{detail.suplier_name}</Text>
            </Text>
          )}
          {detail.bill_no && (
            <Text style={{flexDirection: 'row', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>
                Bill No:{' '}
              </Text>
              <Text style={styles.textexpensetype}>{detail.bill_no}</Text>
            </Text>
          )}
          {detail.exp_amount && (
            <Text style={{flexDirection: 'row', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>
                Expense Amount:{' '}
              </Text>
              <Text style={styles.textexpensetype}>{detail.exp_amount}</Text>
            </Text>
          )}
          {detail.pay_type && (
            <Text style={{flexDirection: 'row', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>
                Pay Type:{' '}
              </Text>
              <Text style={styles.textexpensetype}>{detail.pay_type}</Text>
            </Text>
          )}
          {detail.pay_ref && (
            <Text style={{flexDirection: 'row', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>
                Pay Ref:{' '}
              </Text>
              <Text style={styles.textexpensetype}>{detail.pay_ref}</Text>
            </Text>
          )}
          {detail.exp_note != '' && detail.exp_note != null && (
            <Text style={{flexDirection: 'row', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>
                Expense Note:{' '}
              </Text>
              <Text style={styles.textexpensetype}>{detail.exp_note}</Text>
            </Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

export default DetailScreen;

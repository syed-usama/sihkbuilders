import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './expenseCard.style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../Assets/colors/colors';

function ExpenseCard({navigation, item, index}) {
  const [visible, setvisible] = useState(false);
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
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('DetailScreen', {detail: item})}>
      <View style={styles.cardtextandtillView}>
        <Text style={styles.texttillid}></Text>
        <Text style={styles.textdate}>{getDate(item.exp_date)}</Text>
      </View>

      <View style={styles.projectnameView}>
        <Text style={styles.textprojectname}>{item.project_name}</Text>
      </View>
      <View style={styles.expandablecardView}>
        <Text style={{flexDirection: 'row', marginTop: 5}}>
          <Text style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>
            Expense Type:{' '}
          </Text>
          <Text style={styles.textexpensetype}>{item.expense_type}</Text>
        </Text>

        <Text style={{flexDirection: 'row', marginTop: 5}}>
          <Text style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>
            Expense Amount:{' '}
          </Text>
          <Text style={styles.textexpensetype}>{item.exp_amount}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default ExpenseCard;

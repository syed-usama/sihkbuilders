import { View, Text, TouchableOpacity,ScrollView, SafeAreaView, StatusBar, Platform } from "react-native";
import React,{useState,useEffect} from "react";
import styles from "./expenses.style";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import { FlatList } from "react-native";
import { get_expense_list} from "../../../services/endPoints";
import globleStyle from "../../../styles/globle.style";
import { ActivityIndicator } from "react-native";
import colors from "../../../Assets/colors/colors";
import ExpenseCard from "../../../components/expenseCard/expenseCard";

function Expenses({navigation}){
  const [expenseList , setExpenseList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [day, setDay] = useState('0');
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState('2023');
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
  const [yearList, setYearList] = useState([
    '2023',
    '2022',
    '2021',
    '2020',
    '2019',
    '2018',
    '2017',
    '2016',
    '2015',
    '2014',
    '2013',
    '2012',
    '2011',
    '2010',
    '2009',
    '2008',
  ]);
  const [dayList, setDayList] = useState([
    'All',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '29',
    '30',
    '31',
  ]);
  const [selectedArray,setSelectedArray]= useState([]);
  const [selectedType,setSelectedType]= useState('');
  

    useEffect(()=>{
      const mdate = new Date();
      setMonth(mdate.getMonth())
      let mon = mdate.getMonth();
      getData(day,mon,year);
        //console.log('DATA',dummyData)
    },[])
    const getData = async (p_day,p_month,p_year)=>{
      setLoading(true)
      const montht=p_month+1;
      const expenseType='0';
      console.log(day,montht,year)
      const data = await get_expense_list(p_day,montht,p_year,expenseType)
      setExpenseList(data);
      setLoading(false)
    }
  return (
    <SafeAreaView style={{backgroundColor:colors.primary,marginTop:Platform.OS == 'ios' ? -20 : 0}}>
      {/* <StatusBar backgroundColor= {colors.primary} /> */}
    <TouchableOpacity style={styles.container} activeOpacity={1} onPress={()=> setVisible(false)}>
      {isLoading ? (
        <View style={globleStyle.loader}>
          <ActivityIndicator size={50} color={colors.primary} />
        </View>
      ) : null}
      <View style={styles.header}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
        <FontAwesome name="chevron-left" size={22} color={"white"} />
        </TouchableOpacity>
        <Text style={styles.textheader}> Expenses </Text>
      </View>
      <View style={styles.footer}>
        {visible &&
        <View style={styles.dropdown}>
        <FlatList
        data={selectedArray}
        style={{marginTop:0}}
        showsVerticalScrollIndicator={false}
        renderItem={({item,index})=> (
          <TouchableOpacity 
          onPress={()=>{
            setVisible(false);
            if(selectedType == 'day'){
              setDay(index);
              getData(index,month,year);
            }else if(selectedType == 'month'){
              setMonth(index);
              getData(day,index,year);
            }else if(selectedType == 'year'){
              setYear(item);
              getData(day,month,item);
            }
            
            
          }}
          style={styles.rowItem}>
            <Text style={styles.rowText}>{item}</Text>
          </TouchableOpacity>   
    )}/>
        </View>
}
        <View style={styles.row}>
          <TouchableOpacity style={styles.box}>
            <Text style={styles.boxText}>
              All
            </Text>
            <AntDesign name="caretdown" size={10} color={"white"} />
          </TouchableOpacity>
          <View style={styles.row2}>
          <TouchableOpacity
           onPress={()=>{
            if(selectedType == 'day'){
              setVisible(false);
              setSelectedType('')
            }else{
            setVisible(true);
            setSelectedType('day')
            setSelectedArray(dayList)
            }
           }}
           style={styles.box}>
            <Text style={styles.boxText}>
              {day != '0'?day:'All'}
            </Text>
            <AntDesign name="caretdown" size={10} color={"white"} />
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={()=>{
            if(selectedType == 'month'){
              setVisible(false);
              setSelectedType('')
            }else{
              setVisible(true);
            setSelectedType('month')
            setSelectedArray(monthNames)
            }
            
           }}
          style={styles.box}>
            <Text style={styles.boxText} numberOfLines={1}>
              {monthNames[month]}
            </Text>
            <AntDesign name="caretdown" size={10} color={"white"} />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>{
            if(selectedType == 'year'){
              setVisible(false);
              setSelectedType('')
            }else{
            setVisible(true);
            setSelectedType('year')
            setSelectedArray(yearList)
            }
           }}
           style={styles.box}>
            <Text style={styles.boxText}>
              {year}
            </Text>
            <AntDesign name="caretdown" size={10} color={"white"} />
          </TouchableOpacity>
          </View>
        </View>
      <FlatList
        data={expenseList}
        style={{marginTop:5,marginBottom:5}}
        showsVerticalScrollIndicator={false}
    renderItem={({item,index})=> (
          <ExpenseCard navigation={navigation} item={item} index={index} key={index}/>    
    )}/>
      </View>
    </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Expenses;

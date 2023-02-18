import React, {useState, useContext, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  Platform,
  Image,
  Alert,
  FlatList,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import style from '../../../styles/globle.style';
import styles from './addExpense.style';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {AuthContext} from '../../../services/firebase/authProvider';
import colors from '../../../Assets/colors/colors';
import ImagePicker from 'react-native-image-crop-picker';
import {useDispatch, useSelector} from 'react-redux';
import {
  add_Expense,
  get_employees_list,
  get_expense_bills,
  get_expense_types,
  get_projects_list,
  get_suppliers_list,
} from '../../../services/endPoints';
import {
  addEmployees,
  addExpenseTypes,
  addProjects,
  addSuppliers,
} from '../../../redux/actions/userAction';
import {showToast} from '../../../services/toast/shortToast';
import { heightPercentageToDP } from 'react-native-responsive-screen';
FontAwesome.loadFont();
const AddExpense = ({navigation, route}) => {
  const {projects, expenseTypes, suppliers, employees} = useSelector(
    state => state.user,
  );
  const dispatch = useDispatch();
  const [project, setProject] = useState({pro_name: '-- Select --'});
  const [expenseT, setExpenseT] = useState({ext_name: '-- Select --'});
  const [supplier, setSupplier] = useState({
    sup_name: '-- Select --',
    sup_id: '0',
  });
  const [employee, setEmployee] = useState({
    emp_name: '-- Select --',
    emp_id: '0',
  });
  const [bill, setBill] = useState({pur_no: '-- Select --',});
  const [payT, setPayT] = useState({name: '-- Select --'});
  const [bills, setBills] = useState([]);

  const [payType, setPayType] = useState([
    {
      id: 1,
      name: 'Cash',
    },
    {
      id: 2,
      name: 'Cheque',
    },
    {
      id: 3,
      name: 'Payorder',
    },
    {
      id: 4,
      name: 'Online -IBFT',
    },
  ]);
  const [receiptImage, setReceiptImage] = useState('');
  const [serialNo, setserialNo] = useState('');
  const [payRef, setPayRef] = useState('');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [dateString, setDateString] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [flag, setFlag] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState('');
  const [loader, setLoader] = useState(false);
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
    'December',
  ];
  const {user} = useContext(AuthContext);
  useEffect(() => {
    //console.log('exp')
    const mdate = new Date();
    handleConfirm(mdate);
    getData();
  }, []);
  const getData = async () => {
    console.log('getData');
    if (expenseTypes == '' || expenseTypes == undefined || expenseTypes == []) {
      const etypes = await get_expense_types();
      dispatch(addExpenseTypes(etypes));
    }
    if (projects == '' || projects == undefined || projects == []) {
      const projects = await get_projects_list();
      dispatch(addProjects(projects));
    }
    if (suppliers == '' || suppliers == undefined || suppliers == []) {
      const suppliers = await get_suppliers_list();
      dispatch(addSuppliers(suppliers));
    }
    if (employees == '' || employees == undefined || employees == []) {
      const employes = await get_employees_list();
      dispatch(addEmployees(employes));
    }
  };
  const getDate = mdate => {
    const myArray = mdate.split('-');
    var mont = parseInt(myArray[1]);
    const newDate = myArray[2] + ' ' + monthNames[mont - 1] + ' ' + myArray[0];
    return newDate;
  };
  const getBills = async sup_id => {
    // console.log('getBills');
    const ebills = await get_expense_bills(sup_id);
    // console.log('bills',ebills)
    setBills(ebills);
  };
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    hideDatePicker();
    let seleDate =
      date.getDate() +
      ' ' +
      monthNames[date.getMonth()] +
      ' ' +
      date.getFullYear();
    var selMonth = date.getMonth() + 1;
    let seleDate2 = date.getFullYear() + '-' + selMonth + '-' + date.getDate();
    setDate(seleDate);
    setDateString(seleDate2);
  };
  const openGallery = () => {
    ImagePicker.openPicker({})
      .then(image => {
        console.log(image);
        const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
        setReceiptImage(imageUri);
        SheetManager.hide('sheet5');
      })
      .catch(e => {
        console.log(e);
      });
  };
  const openCamera = () => {
    ImagePicker.openCamera({})
      .then(image => {
        console.log(image);
        const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
        setReceiptImage(imageUri);
        SheetManager.hide('sheet5');
      })
      .catch(e => {
        console.log(e);
      });
  };
  const changeLoader = () => {
    setLoader(false);
    Alert.alert('Alert..!', 'Data uploaded successfully');
  };
  const save = () => {
    if (
      project.pro_name != '-- Select --' &&
      expenseT.ext_name != '-- Select --' &&
      amount != '' &&
      payRef != ''
    ) {
      if (
        (expenseT.ext_name == 'Supplier Payment' &&
          supplier.sup_name == '-- Select --') ||
        bill.pur_no == '-- Select --'
      ) {
        showToast("Required fields can't be empty");
      } else if (
        expenseT.ext_name == 'Salaries' &&
        employee.emp_name == '-- Select --'
      ) {
        showToast("Required fields can't be empty");
      } else {
        // showToast('Passed');
        uploadData()
      }
    } else {
      showToast("Required fields can't be empty");
    }
  };
  const uploadData = () => {
    setLoader(true);
    var xdata = JSON.stringify({
      expense_type_id: expenseT.ext_id,
      project_id: project.pro_id,
      suplier_id: supplier.sup_id,
      bill_no: bill.pur_no,
      employee_id: employee.emp_id,
      exp_amount: amount,
      exp_date: dateString,
      pay_type: payT.id,
      pay_ref: payRef,
      exp_note: note,
    });
    add_Expense(xdata, changeLoader);
  };
  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <View style={style.loader}>
          <ActivityIndicator size={50} color={colors.primary} />
        </View>
      ) : null}
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}>
          <FontAwesome
            name="chevron-left"
            size={22}
            style={{marginLeft: 25}}
            color={'white'}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Add Expense</Text>
        <Text />
      </View>

      <View style={styles.mainx}></View>
        <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
          <View>
            <Text style={[style.label,{marginTop:2}]}>Project *</Text>
            <TouchableOpacity
              style={style.textfield2}
              onPress={() => {
                SheetManager.show('sheet1');
              }}>
              <Text style={style.picker}>{project.pro_name}</Text>
              <MaterialIcons name="arrow-drop-down" size={24} color={'black'} />
            </TouchableOpacity>
          </View>

          <View>
            <Text style={style.label}>Expense Type *</Text>
            <TouchableOpacity
              style={style.textfield2}
              onPress={() => {
                SheetManager.show('sheet2');
              }}>
              <Text style={style.picker}>{expenseT.ext_name}</Text>
              <MaterialIcons name="arrow-drop-down" size={24} color={'black'} />
            </TouchableOpacity>
          </View>
          {expenseT.ext_name == 'Supplier Payment' && (
            <View>
              <Text style={style.label}>Supplier *</Text>
              <TouchableOpacity
                style={style.textfield2}
                onPress={() => {
                  SheetManager.show('sheet6');
                }}>
                <Text style={style.picker}>{supplier.sup_name}</Text>
                <MaterialIcons
                  name="arrow-drop-down"
                  size={24}
                  color={'black'}
                />
              </TouchableOpacity>
            </View>
          )}
          {expenseT.ext_name == 'Supplier Payment' &&
            supplier.sup_name != '-- Select --' && (
              <View>
                <Text style={style.label}>Bill No *</Text>
                <TouchableOpacity
                  style={style.textfield2}
                  onPress={() => {
                    SheetManager.show('sheet7');
                  }}>
                  <Text style={style.picker}>{bill.pur_no}</Text>
                  <MaterialIcons
                    name="arrow-drop-down"
                    size={24}
                    color={'black'}
                  />
                </TouchableOpacity>
              </View>
            )}
          {expenseT.ext_name == 'Salaries' && (
            <View>
              <Text style={style.label}>Employee *</Text>
              <TouchableOpacity
                style={style.textfield2}
                onPress={() => {
                  SheetManager.show('sheet8');
                }}>
                <Text style={style.picker}>{employee.emp_name}</Text>
                <MaterialIcons
                  name="arrow-drop-down"
                  size={24}
                  color={'black'}
                />
              </TouchableOpacity>
            </View>
          )}

          <View style={styles.email}>
            <Text style={style.label}>Amount *</Text>
            <View style={[style.textfield2]}>
              <TextInput
                placeholder={expenseT.ext_name == 'Supplier Payment' && bill.due_amount ? "0 - "+bill.due_amount : "Enter amount"}
                placeholderTextColor={'#949693'}
                style={[style.textfieldText]}
                keyboardType="number-pad"
                value={amount}
                onChangeText={value => {
                  if(expenseT.ext_name != 'Supplier Payment' || bill.pur_no == '-- Select --'){
                    setAmount(value)
                    setFlag(false) 
                  }else{
                    if(value <= bill.due_amount){
                      setAmount(value)
                      setFlag(false) 
                    }else {
                      setFlag(true)
                    }
                  }
                }}
              />
            </View>
            {flag &&
            <Text style={styles.error}>Amount cannot be greater then due amount !</Text>
              }
          </View>

          <View>
            <Text style={style.label}>Date *</Text>
            <TouchableOpacity
              onPress={() => showDatePicker()}
              style={[style.textfield2, {justifyContent: 'center'}]}>
              <Text style={style.picker}>{date ? date : 'Select Date'}</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={style.label}>Pay type *</Text>
            <TouchableOpacity
              style={style.textfield2}
              onPress={() => {
                SheetManager.show('sheet4');
              }}>
              <Text style={style.picker}>{payT.name}</Text>
              <MaterialIcons name="arrow-drop-down" size={24} color={'black'} />
            </TouchableOpacity>
          </View>

          <View style={styles.email}>
            <Text style={style.label}>Pay Ref *</Text>
            <View style={[style.textfield2]}>
              <TextInput
                placeholder="Enter ref no. of expense"
                placeholderTextColor={'#949693'}
                style={[style.textfieldText]}
                value={payRef}
                onChangeText={value => setPayRef(value)}
              />
            </View>
          </View>

          <View>
            <Text style={style.label}>Upload receipt</Text>
            <TouchableOpacity
              style={[style.textfield2, {justifyContent: 'center'}]}
              onPress={() => {
                SheetManager.show('sheet5');
              }}>
              <Text style={style.picker}>Upload Image</Text>
            </TouchableOpacity>
            {receiptImage ? (
              <Image
                source={{uri: receiptImage}}
                style={{
                  height: 60,
                  width: 60,
                  alignSelf: 'center',
                  marginTop: 10,
                  borderRadius: 5,
                }}
              />
            ) : null}
          </View>
          <View style={styles.email}>
            <Text style={style.label}>Note </Text>
            <View style={[style.textfield2]}>
              <TextInput
                placeholder="Enter note"
                placeholderTextColor={'#949693'}
                style={[style.textfieldText]}
                value={note}
                onChangeText={value => setNote(value)}
              />
            </View>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity onPress={() => save()} disabled={loader}>
              <View
                style={[
                  style.blueButton,
                  {backgroundColor: colors.primary, alignItems: 'center'},
                ]}>
                {loader ? (
                  <ActivityIndicator size={24} color={'white'} />
                ) : (
                  <Text style={style.whiteButtonText}>Save</Text>
                )}
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      <ActionSheet id="sheet1">
        <View style={styles.sheetContainer}>
          <View style={styles.line}></View>
          <Text style={styles.title}>Select Project</Text>
          <View style={styles.sheet1}>
            {projects.map(item => (
              <TouchableOpacity
                key={item.id}
                style={styles.itemWrapper}
                onPress={() => {
                  setProject(item);
                  SheetManager.hide('sheet1');
                }}>
                <Text style={styles.sheetItem}>{item.pro_name}</Text>
                {project.pro_name == item.pro_name ? (
                  <Feather
                    name="check"
                    size={14}
                    style={styles.checkIcon}
                    color={'white'}
                  />
                ) : null}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ActionSheet>
      <ActionSheet id="sheet2">
        <View style={styles.sheetContainer}>
          <View style={styles.line}></View>
          <Text style={styles.title}>Select Expense Type</Text>
          <View style={styles.sheet1}>
            <FlatList
            data={expenseTypes}
             renderItem={({item,index}) => (
              <TouchableOpacity
                key={item.ext_id}
                style={styles.itemWrapper}
                onPress={() => {
                  setExpenseT(item);
                  SheetManager.hide('sheet2');
                }}>
                <Text style={styles.sheetItem}>{item.ext_name}</Text>
                {expenseT.ext_name == item.ext_name ? (
                  <Feather
                    name="check"
                    size={14}
                    style={styles.checkIcon}
                    color={'white'}
                  />
                ) : null}
              </TouchableOpacity>
            )}
            />
          </View>
        </View>
      </ActionSheet>
      <ActionSheet id="sheet4">
        <View style={styles.sheetContainer}>
          <View style={styles.line}></View>
          <Text style={styles.title}>Select Pay Type</Text>
          <View style={styles.sheet1}>
            {payType.map(item => (
              <TouchableOpacity
                key={item.id}
                style={styles.itemWrapper}
                onPress={() => {
                  setPayT(item);
                  SheetManager.hide('sheet4');
                }}>
                <Text style={styles.sheetItem}>{item.name}</Text>
                {payT.name == item.name ? (
                  <Feather
                    name="check"
                    size={14}
                    style={styles.checkIcon}
                    color={'white'}
                  />
                ) : null}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ActionSheet>
      <ActionSheet id="sheet5">
        <View style={styles.sheetContainer}>
          <View style={styles.line}></View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 20,
              paddingHorizontal: 20,
            }}>
            <TouchableOpacity
              onPress={() => openCamera()}
              style={{alignItems: 'center'}}>
              <FontAwesome name="camera" size={28} color="black" />
              <Text style={{color: 'black'}}>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => openGallery()}
              style={{alignItems: 'center', marginLeft: 20}}>
              <FontAwesome name="image" size={28} color="black" />
              <Text style={{color: 'black'}}>Gallery</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ActionSheet>
      <ActionSheet id="sheet6">
        <View style={styles.sheetContainer}>
          <View style={styles.line}></View>
          <Text style={styles.title}>Select Supplier</Text>
          <View style={styles.sheet1}>
            {suppliers.map(item => (
              <TouchableOpacity
                key={item.sup_id}
                style={styles.itemWrapper}
                onPress={() => {
                  setSupplier(item);
                  setBill({pur_no: '-- Select --'});
                  setBills([]);
                  getBills(item.sup_id);
                  SheetManager.hide('sheet6');
                }}>
                <Text style={styles.sheetItem}>{item.sup_name}</Text>
                {supplier.sup_name == item.sup_name ? (
                  <Feather
                    name="check"
                    size={14}
                    style={styles.checkIcon}
                    color={'white'}
                  />
                ) : null}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ActionSheet>
      <ActionSheet id="sheet7">
        <View style={styles.sheetContainer}>
          <View style={styles.line}></View>
          <Text style={styles.title}>Select Bill</Text>
          <View style={styles.sheet1}>
            <FlatList
            data={bills}
            numColumns={2}
            renderItem={({item,index})=> (
              <TouchableOpacity
                key={item.pur_no}
                style={styles.itemWrapper1}
                onPress={() => {
                  setBill(item);
                  setAmount('');
                  SheetManager.hide('sheet7');
                }}>
                <Text style={styles.sheetItem1}>{item.pur_no}</Text>
                <Text style={styles.sheetItem2}>Bill Date : </Text>
                <Text style={styles.sheetItem3}>{getDate(item.bill_date)}</Text>
                <Text style={styles.sheetItem2}>Total Amount : </Text>
                <Text style={styles.sheetItem3}>{item.total_amount}</Text>
                <Text style={styles.sheetItem2}>Received Amount : </Text>
                <Text style={styles.sheetItem3}>{item.receive_amount}</Text>
                <Text style={styles.sheetItem2}>Pending Amount : </Text>
                <Text style={styles.sheetItem3}>{item.due_amount}</Text>
                {bill.pur_no == item.pur_no ? (
                  <Feather
                    name="check"
                    size={14}
                    style={styles.checkIcon1}
                    color={'white'}
                  />
                 ) : null} 
              </TouchableOpacity>
            )}
            ListFooterComponentStyle={{height:heightPercentageToDP(20)}}
            ListFooterComponent={()=> 
            <View></View>
          }
            />
          </View>
        </View>
      </ActionSheet>
      <ActionSheet id="sheet8">
        <View style={styles.sheetContainer}>
          <View style={styles.line}></View>
          <Text style={styles.title}>Select Employee</Text>
          <View style={styles.sheet1}>
            {employees.map(item => (
              <TouchableOpacity
                key={item.emp_id}
                style={styles.itemWrapper}
                onPress={() => {
                  setEmployee(item);
                  SheetManager.hide('sheet8');
                }}>
                <Text style={styles.sheetItem}>{item.emp_name}</Text>
                {employee.emp_name == item.emp_name ? (
                  <Feather
                    name="check"
                    size={14}
                    style={styles.checkIcon}
                    color={'white'}
                  />
                ) : null}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ActionSheet>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </SafeAreaView>
  );
};

export default AddExpense;

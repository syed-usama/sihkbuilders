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
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import style from '../../../styles/globle.style';
import styles from './addPurchase.style';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {AuthContext} from '../../../services/firebase/authProvider';
import colors from '../../../Assets/colors/colors';
import ImagePicker from 'react-native-image-crop-picker';
import {FlatList} from 'react-native';
import {KeyboardAvoidingView} from 'native-base';
import {
  add_Purchase,
  get_expense_types,
  get_items_list,
  get_projects_list,
  get_suppliers_list,
} from '../../../services/endPoints';
import {
  addExpenseTypes,
  addItems,
  addProjects,
  addSuppliers,
} from '../../../redux/actions/userAction';
import {useDispatch, useSelector} from 'react-redux';
import AddPurchaseComp from '../../../components/addPurchaseComp/addPurchaseComp';
import {showToast} from '../../../services/toast/shortToast';
import { widthPercentageToDP } from 'react-native-responsive-screen';
FontAwesome.loadFont();
const AddPurchase = ({navigation, route}) => {
  const {stats, projects, items, expenseTypes, suppliers} = useSelector(
    state => state.user,
  );
  const dispatch = useDispatch();
  const [project, setProject] = useState({pro_name: '-- Select --'});
  const [supplier, setSupplier] = useState({sup_name: '-- Select --'});
  const [receiptImage, setReceiptImage] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const [billNo, setBillNo] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState('');
  const [dateString, setDateString] = useState('');
  const [itemsArray, setItemsArray] = useState([
    {id: 1, ite_name: '', ite_amount: '', ite_qty: '', ite_unit: ''},
  ]);
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
  const [isLoading, setLoading] = useState(false);
  const [loader, setLoader] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [count, setCount] = useState(2);
  const {user} = useContext(AuthContext);
  useEffect(() => {
    //console.log('pur')
    const mdate = new Date();
    handleConfirm(mdate);
    if (
      projects == null ||
      projects == undefined ||
      projects == [] ||
      projects == ''
    ) {
      getData();
    }
  }, []);
  const getData = async () => {
    console.log('getData');
    const items = await get_items_list();
    dispatch(addItems(items));
    const projects = await get_projects_list();
    dispatch(addProjects(projects));
    // const etypes = await get_expense_types();
    // dispatch(addExpenseTypes(etypes));
    const suppliers = await get_suppliers_list();
    dispatch(addSuppliers(suppliers));
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
      var selMonth = date.getMonth()+1;
    let seleDate2 =
      date.getFullYear() + '-' + selMonth + '-' + date.getDate();
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
  const removeItem = id => {
    console.log('call', id);
    const newarr = itemsArray.filter((item, index) => {
      if (item.id == id) {
      } else {
        return item;
      }
    });
    setItemsArray(newarr);
    setRefresh(!refresh);
  };
  const updateAmount = () => {
    var total = 0;
    var updated = itemsArray.filter((item, index) => {
      console.log(item);
      var amountt = item.ite_amount ? parseInt(item.ite_amount) : 0;
      var qty = item.ite_qty ? parseInt(item.ite_qty) : 0;
      total = total + amountt * qty;
    });
    console.log('total', total);
    setTotalAmount(total);
  };
  const updateValues = (id, key, value, unit, ite_id) => {
    var updated = itemsArray.filter((item, index) => {
      if (item.id == id) {
        if (key == 'name') {
          item.ite_name = value;
          item.ite_unit = unit;
          item.ite_id = ite_id;
        } else if (key == 'amount') {
          item.ite_amount = value;
        } else if (key == 'qty') {
          item.ite_qty = value;
        }
      }
      return item;
    });
    setItemsArray(updated);
    updateAmount();
  };
  const changeLoader = () => {
    setLoader(false);
    Alert.alert(
      'Alert..!',
      'Data uploaded successfully',
    );
  };
  const save = () => {
    // console.log('array:', itemsArray);
    var newARR = [];
    if (supplier.sup_id && project.pro_id && billNo) {
      var flag1 = 0;
      var updated = itemsArray.filter((item, index) => {
        // console.log(';;;',item)
        var obj = {
          item_id: item.ite_id,
          item_qty: item.ite_qty,
          item_amount: item.ite_amount,
        };
        newARR.push(obj);
        if (item.ite_id && item.ite_amount && item.ite_qty) {
        } else {
          flag1 = 1;
        }
      });
      if (flag1 == 1) {
        showToast('All fields are required,');
      } else {
        setLoader(true);
        add_Purchase(
          project.pro_id,
          supplier.sup_id,
          dateString,
          billNo,
          newARR,
          changeLoader,
        );
        showToast('passed');
      }
    } else {
      showToast('All fields are required');
    }
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
        <Text style={styles.headerText}>Add Purchase</Text>
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
          <Text style={style.label}>Supplier *</Text>
          <TouchableOpacity
            style={style.textfield2}
            onPress={() => {
              SheetManager.show('sheet2');
            }}>
            <Text style={style.picker}>{supplier.sup_name}</Text>
            <MaterialIcons name="arrow-drop-down" size={24} color={'black'} />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={style.label}>Date *</Text>
          <TouchableOpacity
            onPress={() => showDatePicker()}
            style={[style.textfield2, {justifyContent: 'center'}]}>
            <Text style={style.picker}>{date ? date : 'Select Date'}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.email}>
          <Text style={style.label}>Supplier Bill No *</Text>
          <View style={[style.textfield2]}>
            <TextInput
              placeholder="Enter supplier bill no"
              placeholderTextColor={'#949693'}
              keyboardType="number-pad"
              style={[style.textfieldText]}
              value={billNo}
              onChangeText={value => setBillNo(value)}
            />
          </View>
        </View>

        <FlatList
          // nestedScrollEnabled={true}
          refreshing={refresh}
          data={itemsArray}
          renderItem={({item, index}) => (
            <AddPurchaseComp
              citem={item}
              index={index}
              removeItem={removeItem}
              updateValues={updateValues}
              totalAmount={totalAmount}
            />
          )}
        />

        <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between'}}>
        <TouchableOpacity
          onPress={() => {
            // var newArray = itemsArray;
            itemsArray.push({
              id: count,
              ite_name: '',
              ite_amount: '',
              ite_qty: '',
              ite_unit: '',
            });
            setItemsArray(itemsArray);
            setRefresh(!refresh);
            setCount(count + 1);
          }}
          style={{
            marginLeft:10,
            justifyContent: 'center',
            alignItems: 'center',
            height:40,
            width:40,
            borderRadius:20,
            backgroundColor:colors.secondary
          }}>
          <Entypo name="plus" size={24} color={'white'} />
        </TouchableOpacity>
        <Text
          style={{
            width:widthPercentageToDP(45),
            fontSize: 24,
            fontWeight: '600',
            color: 'black',
          }}
          numberOfLines={1}>
          Total: {''}
          <Text style={{textDecorationLine: 'underline',fontSize:20}}>{totalAmount}</Text>
        </Text>
        </View>
        {/* <View>
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
          </View> */}

        <View style={styles.footer}>
          <TouchableOpacity onPress={() => save()} disabled={loader}>
            <View
              style={[
                style.blueButton,
                {backgroundColor: colors.secondary, alignItems: 'center'},
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
                key={item.pro_id}
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
          <Text style={styles.title}>Select Supplier</Text>
          <View style={styles.sheet1}>
            {suppliers.map(item => (
              <TouchableOpacity
                key={item.sup_id}
                style={styles.itemWrapper}
                onPress={() => {
                  setSupplier(item);
                  SheetManager.hide('sheet2');
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
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </SafeAreaView>
  );
};

export default AddPurchase;

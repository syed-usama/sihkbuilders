import React, {useState, useContext} from 'react';
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
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import style from '../../styles/globle.style';
import styles from './addPurchase.style';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import {AuthContext} from '../../services/firebase/authProvider';
import colors from '../../Assets/colors/colors';
import ImagePicker from 'react-native-image-crop-picker';
import {constants} from '../../global/constants';
FontAwesome.loadFont();
const AddPurchase = ({navigation, route}) => {
  const [project, setProject] = useState({name: '-- Select --'});
  const [supplier, setSupplier] = useState({name: '-- Select --'});
  const [pitem, setItem] = useState({name: '-- Select --'});
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'THQ Hospital',
    },
  ]);
  const [supplierList, setSupplierList] = useState([
    {
      id: 1,
      name: 'Fiaz',
    },
    {
      id: 2,
      name: 'Mushtaq',
    },
    {
      id: 3,
      name: 'Rait Wala',
    },
    {
      id: 4,
      name: 'Qismat Khan',
    },
  ]);
  const [itemsList, setitemsList] = useState([
    {
      id: 1,
      name: 'Bajri (sft)',
    },
    {
      id: 2,
      name: 'Paint (gallon)',
    },
    {
      id: 3,
      name: 'Steel (Kg)',
    },
    {
      id: 4,
      name: 'Tiles (per sft)',
    },
  ]);
  const [receiptImage, setReceiptImage] = useState('');
  const [serialNo, setserialNo] = useState('');
  const [isLoading, setLoading] = useState(false);
  const {user} = useContext(AuthContext);

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

      <View style={styles.main}>
        <ScrollView style={styles.mainx} showsVerticalScrollIndicator={false}>
          <View>
            <Text style={style.label}>Project *</Text>
            <TouchableOpacity
              style={style.textfield2}
              onPress={() => {
                SheetManager.show('sheet1');
              }}>
              <Text style={style.picker}>{project.name}</Text>
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
              <Text style={style.picker}>{supplier.name}</Text>
              <MaterialIcons name="arrow-drop-down" size={24} color={'black'} />
            </TouchableOpacity>
          </View>

          <View>
            <Text style={style.label}>Date *</Text>
            <TouchableOpacity
              style={[style.textfield2, {justifyContent: 'center'}]}>
              <Text style={style.picker}>Select Date</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.email}>
            <Text style={style.label}>Supplier Bill No *</Text>
            <View style={[style.textfield2]}>
              <TextInput
                placeholder="Enter supplier bill no"
                placeholderTextColor={'#949693'}
                keyboardType='number-pad'
                style={[style.textfieldText]}
                value={serialNo}
                onChangeText={value => setserialNo(value)}
              />
            </View>
          </View>

          <View style={styles.card}>
            <View>
              <Text style={styles.label}>Item *</Text>
              <TouchableOpacity
                style={style.textfield2}
                onPress={() => {
                  SheetManager.show('sheet4');
                }}>
                <Text style={style.picker}>{pitem.name}</Text>
                <MaterialIcons
                  name="arrow-drop-down"
                  size={24}
                  color={'black'}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.row}>

              <View style={styles.email}>
                <Text style={styles.label1}>Unit Quantity *</Text>
                <View style={[styles.textfield]}>
                  <TextInput
                    placeholder="0"
                    placeholderTextColor={'#949693'}
                    keyboardType='number-pad'
                    style={[style.textfieldText]}
                    value={serialNo}
                    onChangeText={value => setserialNo(value)}
                  />
                </View>
              </View>

              <View style={styles.email}>
                <Text style={styles.label1}>Unit Amount *</Text>
                <View style={[styles.textfield1]}>
                  <TextInput
                    placeholder="0"
                    placeholderTextColor={'#949693'}
                    keyboardType='number-pad'
                    style={[style.textfieldText]}
                    value={serialNo}
                    onChangeText={value => setserialNo(value)}
                  />
                </View>
              </View>


            </View>
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
            <TouchableOpacity activeOpacity={0.7}>
              <View style={[style.blueButton,{backgroundColor:colors.secondary}]}>
                <Text style={style.whiteButtonText}>Save</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
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
                <Text style={styles.sheetItem}>{item.name}</Text>
                {project.name == item.name ? (
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
            {supplierList.map(item => (
              <TouchableOpacity
                key={item.name}
                style={styles.itemWrapper}
                onPress={() => {
                  setSupplier(item);
                  SheetManager.hide('sheet2');
                }}>
                <Text style={styles.sheetItem}>{item.name}</Text>
                {supplier.name == item.name ? (
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
      <ActionSheet id="sheet4">
        <View style={styles.sheetContainer}>
          <View style={styles.line}></View>
          <Text style={styles.title}>Select Item</Text>
          <View style={styles.sheet1}>
            {itemsList.map(item => (
              <TouchableOpacity
                key={item.id}
                style={styles.itemWrapper}
                onPress={() => {
                  setItem(item);
                  SheetManager.hide('sheet4');
                }}>
                <Text style={styles.sheetItem}>{item.name}</Text>
                {pitem.name == item.name ? (
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
    </SafeAreaView>
  );
};

export default AddPurchase;

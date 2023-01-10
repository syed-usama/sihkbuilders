import React, { useState, useContext } from "react";
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
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import style from "../../styles/globle.style";
import styles from "./registerDevice.style";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import { AuthContext } from "../../services/firebase/authProvider";
import colors from "../../Assets/colors/colors";
import ImagePicker from 'react-native-image-crop-picker';
import { constants } from "../../global/constants";
FontAwesome.loadFont();
const RegisterDevice = ({ navigation, route }) => {
  const [deviceType, setDeviceType] = useState({name: "Select"});
  const [brand, setbrand] = useState({name: "Select"});
  const [model, setmodel] = useState({name: "Select"});
  const [AllStatus, setAllStatus] = useState([]);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [products, setProducts] = useState([]);
  const [imei, setimei] = useState("");
  const [receiptImage, setReceiptImage] = useState("");
  const [vinNo, setvinNo] = useState("");
  const [serialNo, setserialNo] = useState("");
  const [status, setstatus] = useState({id: 123,name: "Select", color: "white"});
  const [isLoading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);

  const openGallery = () =>{
    ImagePicker.openPicker({
    }).then(image => {
      console.log(image);
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setReceiptImage(imageUri);
      SheetManager.hide("sheet5");
    }).catch(e =>{
      console.log(e)
    });
  }
  const openCamera = () =>{
    ImagePicker.openCamera({
    }).then(image => {
      console.log(image);
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setReceiptImage(imageUri);
      SheetManager.hide("sheet5");
    }).catch(e =>{
      console.log(e)
    });
  }
  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <View style={style.loader}>
          <ActivityIndicator size={50} color={colors.primary} />
        </View>
      ) : null}
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.top}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.goBack()}
            >
              <FontAwesome
                style={styles.backButton}
                name="chevron-left"
                size={22}
                color="black"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.title}>
            <Text style={style.titleText2}>Register Your Device</Text>
            <Text style={style.subtitleText2}>
              Select the type of device you would
            </Text>
            <Text style={style.subtitleText}>like to register</Text>
          </View>
          <View>
            <Text style={style.label}>Product Type</Text>
            <TouchableOpacity
              style={style.textfield2}
              onPress={() => {
                SheetManager.show("sheet1");
              }}>
              <Text style={style.picker}>{deviceType.name}</Text>
              <MaterialIcons name="arrow-drop-down" size={24} color={'black'}/>
            </TouchableOpacity>
          </View>
          {deviceType.name != "Select" ? (
            <View>
            <Text style={style.label}>Product Brand</Text>
            <TouchableOpacity
              style={style.textfield2}
              onPress={() => {
                SheetManager.show("sheet2");
              }}>
              <Text style={style.picker}>{brand.name}</Text>
              <MaterialIcons name="arrow-drop-down" size={24} color={'black'}/>
            </TouchableOpacity>
          </View>
          ) : null}
          {deviceType.name != "Select" ? (
            <View>
            <Text style={style.label}>Product Model</Text>
            <TouchableOpacity
              style={style.textfield2}
              onPress={() => {
                SheetManager.show("sheet3");
              }}>
              <Text style={style.picker}>{model.name}</Text>
              <MaterialIcons name="arrow-drop-down" size={24} color={'black'}/>
            </TouchableOpacity>
          </View>
          ) : null}
          {deviceType.id == constants.mobile ? (
            <View>
              <View>
                <Text style={style.label}>IMEI Number</Text>
                <View style={style.textfield2}>
                  <TextInput
                    placeholder="Enter IMEI Number"
                    placeholderTextColor={"#949693"}
                    style={style.textfieldText}
                    value={imei}
                    onChangeText={(value) => setimei(value)}
                  />
                </View>
              </View>
              <View style={styles.email}>
                <Text style={style.label}>Serial Number</Text>
                <View style={[style.textfield2]}>
                  <TextInput
                    placeholder="Enter Serial Number"
                    placeholderTextColor={"#949693"}
                    style={[style.textfieldText]}
                    value={serialNo}
                    onChangeText={(value) => setserialNo(value)}
                  />
                </View>
              </View>
            </View>
          ) : deviceType.id == constants.vehicle ? (
            <View style={styles.email}>
              <Text style={style.label}>Vin Number</Text>
              <View style={[style.textfield2]}>
                <TextInput
                  placeholder="Enter Vin Number"
                  placeholderTextColor={"#949693"}
                  style={[style.textfieldText]}
                  value={vinNo}
                  onChangeText={(value) => setvinNo(value)}
                />
              </View>
            </View>
          ) : deviceType.name != "Select" && (
            <View style={styles.email}>
              <Text style={style.label}>Serial Number</Text>
              <View style={[style.textfield2]}>
                <TextInput
                  placeholder="Enter Serial Number"
                  placeholderTextColor={"#949693"}
                  style={[style.textfieldText]}
                  value={serialNo}
                  onChangeText={(value) => setserialNo(value)}
                />
              </View>
            </View>
          )}
          {deviceType.name != "Select" ? (
            <View>
            <Text style={style.label}>Purchase Receipt</Text>
            <TouchableOpacity
              style={[style.textfield2,{justifyContent:'center'}]}
              onPress={() => {
                SheetManager.show("sheet5");
              }}>
              <Text style={style.picker}>Upload purchase receipt</Text>
            </TouchableOpacity>
            {receiptImage ? <Image source={{uri:receiptImage}} style={{height:60,width:60,alignSelf:'center',marginTop:10,borderRadius:5}}/>:null}
          </View>
          ) : null}
          {deviceType.name != "Select" ? (
            <View>
            <Text style={style.label}>Product Status</Text>
            <TouchableOpacity
              style={style.textfield2}
              onPress={() => {
                SheetManager.show("sheet4");
              }}>
              <Text style={style.picker}>{status.name}</Text>
              <MaterialIcons name="arrow-drop-down" size={24} color={'black'}/>
            </TouchableOpacity>
          </View>
          ) : null}
          {deviceType.name != "Select" ? (
            <View style={styles.footer}>
              <TouchableOpacity activeOpacity={0.7}>
                <View style={style.blueButton}>
                  <Text style={style.whiteButtonText}>Done</Text>
                </View>
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </ScrollView>
      <ActionSheet id="sheet1">
        <View style={styles.sheetContainer}>
        <View style={styles.line}></View>
          <Text style={styles.title}>Select Product Type</Text>
        <View style={styles.sheet1}>
          {products.map(item =>
          <TouchableOpacity
          key={item.id}
          style={styles.itemWrapper}
            onPress={() => {
              setDeviceType(item);
              SheetManager.hide("sheet1");
            }}>
            <Text style={styles.sheetItem}>{item.name}</Text>
            {deviceType.name ==item.name ?
            <Feather name="check" size={14} style={styles.checkIcon} color={'white'} />
            :null
            }
          </TouchableOpacity>
          )}
        </View>
        </View>
      </ActionSheet>
      <ActionSheet id="sheet2">
        
        <View style={styles.sheetContainer}>
        <View style={styles.line}></View>
          <Text style={styles.title}>Select Product Brand</Text>
        <View style={styles.sheet1}>
          {brands.map(item =>
          item.productid == deviceType.id ? (
          <TouchableOpacity
          key={item.name}
          style={styles.itemWrapper}
            onPress={() => {
              setbrand(item);
              SheetManager.hide("sheet2");
            }}>
            <Text style={styles.sheetItem}>{item.name}</Text>
            {brand.name==item.name ?
            <Feather name="check" size={14} style={styles.checkIcon} color={'white'} />
            :null
            }
          </TouchableOpacity>
          ) :null
          )}
        </View>
        </View>
      </ActionSheet>
      <ActionSheet id="sheet3">
        
        <View style={styles.sheetContainer}>
        <View style={styles.line}></View>
          <Text style={styles.title}>Select Product Model</Text>
        <View style={styles.sheet1}>
          {models.map(item =>
          item.brandid == brand.id ? (
          <TouchableOpacity
          key={item.name}
          style={styles.itemWrapper}
            onPress={() => {
              setmodel(item);
              SheetManager.hide("sheet3");
            }}>
            <Text style={styles.sheetItem}>{item.name}</Text>
            {model.name==item.name ?
            <Feather name="check" size={14} style={styles.checkIcon} color={'white'} />
            :null
            }
          </TouchableOpacity>
          ): null
          )}
        </View>
        </View>
      </ActionSheet>
      <ActionSheet id="sheet4">
        <View style={styles.sheetContainer}>
        <View style={styles.line}></View>
          <Text style={styles.title}>Select Product Status</Text>
        <View style={styles.sheet1}>
          {AllStatus.map(item =>
          <TouchableOpacity
          key={item.id}
          style={styles.itemWrapper}
            onPress={() => {
              setstatus(item);
              SheetManager.hide("sheet4");
            }}>
            <Text style={styles.sheetItem}>{item.name}</Text>
            {status.name==item.name ?
            <Feather name="check" size={14} style={styles.checkIcon} color={'white'} />
            :null
            }
          </TouchableOpacity>
          )}
        </View>
        </View>
      </ActionSheet>
      <ActionSheet id="sheet5">
        <View style={styles.sheetContainer}>
        <View style={styles.line}></View>
        <View style={{flexDirection:'row',paddingVertical:20,paddingHorizontal:20}}>
          <TouchableOpacity 
          onPress={()=> openCamera()}
          style={{alignItems:'center'}}>
          <FontAwesome name="camera" size={28} color='black' />
          <Text style={{color:'black'}}>Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={()=> openGallery()}
          style={{alignItems:'center',marginLeft:20}}>
          <FontAwesome name="image" size={28} color='black' />
          <Text style={{color:'black'}}>Gallery</Text>
          </TouchableOpacity>
          </View>
        </View>
      </ActionSheet>
    </SafeAreaView>
  );
};

export default RegisterDevice;

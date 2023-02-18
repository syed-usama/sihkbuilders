import React, {useContext, useEffect, useState} from 'react';
import styles from './profile.style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-crop-picker';
import style from '../../../styles/globle.style';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import colors from '../../../Assets/colors/colors';
import {AuthContext} from '../../../services/firebase/authProvider';
const Profile = ({navigation}) => {
  const [image, setImage] = useState(null);
  const [dummy, setDummy] = useState(null);
  const {user, logout} = useContext(AuthContext);
  const [isLoading, setLoading] = useState(false);
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 1200,
      height: 780,
      cropping: true,
    }).then(image => {
      console.log(image);
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setImage(imageUri);
    });
  };
  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 1200,
      height: 780,
      cropping: true,
    }).then(image => {
      console.log(image);
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setImage(imageUri);
      setDummy({uri: imageUri});
    });
  };
  const closeImage = () => {
    if (user.image) {
      setDummy({uri: user.image});
    } else {
      setDummy(require('../../../Assets/Images/dashboard/profile.png'));
    }
    setImage(null);
  };
  useEffect(() => {
    if (user.image) {
      setDummy({uri: user.image});
    } else {
      setDummy(require('../../../Assets/Images/userDefault.png'));
    }
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={style.loader}>
          <ActivityIndicator size={50} color={colors.primary} />
        </View>
      ) : null}
      <LinearGradient
        start={{x: 0.0, y: 0.3}}
        end={{x: 0.5, y: 0.5}}
        locations={[0, 1.0]}
        colors={[colors.primary, colors.primary]}
        style={styles.linearGradient}>
        <View style={styles.top}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}>
            <FontAwesome
              style={styles.backButton}
              name="chevron-left"
                size={22}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          {dummy && (
            <ImageBackground
              style={styles.image}
              imageStyle={{borderRadius: 80 / 2,borderWidth:1,borderColor:'white'}}
              source={dummy}>
              {image ? (
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={{flex: 1, justifyContent: 'space-between'}}>
                  <FontAwesome
                    name="close"
                    size={25}
                    color="white"
                    onPress={() => closeImage()}
                  />
                  <FontAwesome
                    name="check"
                    size={25}
                    color="white"
                    onPress={() => closeImage()}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={{}}
                  onPress={() => choosePhotoFromLibrary()}>
                  <FontAwesome name="camera" size={20} color="white" />
                </TouchableOpacity>
              )}
            </ImageBackground>
          )}
          <Text style={styles.headerText}>
            {user.use_name} 
          </Text>
        </View>
        <View style={styles.body}>
          <View style={styles.row}>
            <Text style={styles.bodytext}>Personal Information</Text>
          </View>
          <View style={styles.devices}>
            <View style={styles.deviceContent}>
              <Text style={styles.title}>Mobile Number</Text>
              <Text style={styles.subTitle}>{user.use_phone}</Text>
            </View>
          </View>
          <View style={styles.devices}>
            <View style={styles.deviceContent}>
              <Text style={styles.title}>Email Address</Text>
              <Text style={styles.subTitle}>{user.use_email}</Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.7} onPress={() => logout()}>
            <Text style={[styles.bodytext, {color: colors.primary}]}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};
export default Profile;

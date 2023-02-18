import React, { useContext } from 'react';
import { View } from 'react-native';
import {
    Title,
    Caption,
    Drawer,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './drawerContent.style';
import { AuthContext } from '../../services/firebase/authProvider';
import colors from '../../Assets/colors/colors';
  
export function DrawerContent(props) {
    const {user, login, register, logout} = useContext(AuthContext);
    return(
        <View style={{flex:1}}>
            <View style={{flex:10}}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flex:1,marginTop: 15 }}>
                            <MaterialCommunityIcons 
                                name="account-outline" 
                                size={50}
                                color={colors.white}
                            />
                            <View style={{flex:1, justifyContent:"flex-end"}}>
                                <Title style={styles.title}> {user?.use_name ? user?.use_name : '@Username'}</Title>
                                {user?.use_email ?<Caption style={styles.caption}>{user?.use_email}</Caption>:
                                <Caption style={styles.caption}>user_email@mail.com</Caption>}
                            </View>
                        </View>
                    </View>
                    <View style={{flex:3}}>
                        <DrawerContentScrollView {...props}>
                        <Drawer.Section style={styles.drawerSection}>
                            <DrawerItem 
                                icon={({color, size}) => (
                                    <MaterialCommunityIcons 
                                    name="home-outline" 
                                    color={color}
                                    size={size}
                                    />
                                )}
                                label="Home"
                                // onPress={() => {props.navigation.navigate('StoreScreen')}}
                            />
                            <DrawerItem 
                                icon={({color, size}) => (
                                    <MaterialCommunityIcons 
                                    name="account-outline" 
                                    color={color}
                                    size={size}
                                    />
                                )}
                                label="Profile"
                                onPress={() => {props.navigation.navigate('Profile')}}
                            />
                            <DrawerItem 
                                icon={({color, size}) => (
                                    <FontAwesome5 
                                    name="file-invoice-dollar" 
                                    color={color}
                                    style={{marginRight:5,}}
                                    size={size}
                                    />
                                )}
                                label="Purchase"
                                onPress={() => {props.navigation.navigate('PurchaseDetail')}}
                            />
                            <DrawerItem 
                                icon={({color, size}) => (
                                    <AntDesign 
                                    name="piechart" 
                                    color={color}
                                    size={size}
                                    />
                                )}
                                label="Expense"
                                onPress={() => {props.navigation.navigate('Expenses')}}
                            />
                        </Drawer.Section>
                        </DrawerContentScrollView>
                    </View>
                </View>
            </View>
            <View style={{flex:1,backgroundColor:colors.primary}}>
                <Drawer.Section style={styles.bottomDrawerSection}>
                    <DrawerItem 
                        icon={({color, size}) => (
                            <MaterialCommunityIcons 
                            name="exit-to-app" 
                            color={colors.white}
                            size={size}
                            />
                        )}
                        label="Sign Out"
                        labelStyle={{color:colors.white}}
                        onPress={() => logout()}
                    />
                </Drawer.Section>
            </View>
        </View>
    );
}



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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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
                            <Icon 
                                name="account-outline" 
                                size={50}
                                color={colors.white}
                            />
                            <View style={{flex:1, justifyContent:"flex-end"}}>
                                <Title style={styles.title}> {user?.name ? user?.name : '@Username'}</Title>
                                {user?.email ?<Caption style={styles.caption}>{user?.email}</Caption>:
                                <Caption style={styles.caption}>user_email@mail.com</Caption>}
                            </View>
                        </View>
                    </View>
                    <View style={{flex:3}}>
                        <DrawerContentScrollView {...props}>
                        <Drawer.Section style={styles.drawerSection}>
                            <DrawerItem 
                                icon={({color, size}) => (
                                    <Icon 
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
                                    <Icon 
                                    name="account-outline" 
                                    color={color}
                                    size={size}
                                    />
                                )}
                                label="Profile"
                                // onPress={() => {props.navigation.navigate('ComingSoon')}}
                            />
                            <DrawerItem 
                                icon={({color, size}) => (
                                    <Icon 
                                    name="account-check-outline" 
                                    color={color}
                                    size={size}
                                    />
                                )}
                                label="Purchase"
                                // onPress={() => {props.navigation.navigate('StoreSupport')}}
                            />
                            <DrawerItem 
                                icon={({color, size}) => (
                                    <Icon 
                                    name="account-check-outline" 
                                    color={color}
                                    size={size}
                                    />
                                )}
                                label="Expense"
                                // onPress={() => {props.navigation.navigate('StoreSupport')}}
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
                            <Icon 
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



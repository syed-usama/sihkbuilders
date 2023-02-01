import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DashboardDrawer } from "./drawerNavigator";
import Profile from "../screens/dashboardScreens/profile/profile";
import RegisterDevice from "../screens/dashboardScreens/addExpense/registerDevice";
import Home from "../screens/onboardingScreens/Home";
import Onboarding5 from "../screens/onboardingScreens/Onboarding5";
import ForgotPassword from "../screens/forgotPassword/forgotPassword";
import AddPurchase from "../screens/dashboardScreens/addPurchase/addPurchase";
import Notifications from "../screens/dashboardScreens/notification/notifications";
import Expenses from "../screens/dashboardScreens/expenseDetail/expenses";
import PurchaseDetail from "../screens/dashboardScreens/purchaseDetail/purchaseDetail";


const Stack = createStackNavigator();

const OnBoardStackNavigator = ({initial}) => {
  return (
    <Stack.Navigator
      initialRouteName={initial}
      screenOptions={{headerShown: false}}>
      <Stack.Screen component={Home} name="Home" />
      <Stack.Screen component={Onboarding5} name="Onboarding5" />
      <Stack.Screen component={ForgotPassword} name="ForgotPassword" />
        </Stack.Navigator> 
  );
}
const DashboardStackNavigator = () => {
  return (
    <Stack.Navigator
        initialRouteName="Dashboard"
        screenOptions={{headerShown: false}}>
        <Stack.Screen component={DashboardDrawer} name="Dashboard" />
        <Stack.Screen component={Profile} name="Profile" />
        <Stack.Screen component={Notifications} name="Notifications" />
        <Stack.Screen component={RegisterDevice} name="RegisterDevice" />
        <Stack.Screen component={AddPurchase} name="AddPurchase" />
        <Stack.Screen component={PurchaseDetail} name="PurchaseDetail" />
        <Stack.Screen component={Expenses} name="Expenses" />
      </Stack.Navigator>
  );
}

export { OnBoardStackNavigator,DashboardStackNavigator };
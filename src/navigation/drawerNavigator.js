import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "./drawerContent/drawerContent";
import Dashboard from "../screens/dashboardScreens/dashboard";

const Drawer = createDrawerNavigator();

const DashboardDrawer = () => {
  return (
    <Drawer.Navigator
       screenOptions={{ headerShown: false }}
       drawerContent={(props) => <DrawerContent {...props} />}
     >
       <Drawer.Screen name="FoodScreen" component={Dashboard} />
     </Drawer.Navigator>
  );
}
const StoreDrawer = () => {
  return (
    <Drawer.Navigator
       screenOptions={{ headerShown: false }}
       drawerContent={(props) => <DrawerContent {...props} />}
     >
       <Drawer.Screen name="StoreScreen" component={Dashboard} />
     </Drawer.Navigator>
  );
}
const CourierDrawer = () => {
  return (
    <Drawer.Navigator
       screenOptions={{ headerShown: false }}
       drawerContent={(props) => <DrawerContent {...props} />}
     >
       <Drawer.Screen name="CourierScreen" component={Dashboard} />
     </Drawer.Navigator>
  );
}

export { DashboardDrawer,StoreDrawer,CourierDrawer };
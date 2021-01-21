import React from 'react'
import {createDrawerNavigator}from '@react-navigation/drawer';
import DrawerContent from "./DrawerContent"
import StackNavigation from "./StackNavigation";


const Drawer = createDrawerNavigator();
//Aquí se manda a llamar el DrawerContent
export default function navigation() {
    return (
        <Drawer.Navigator initialRouteName="app" drawerContent={(props) => <DrawerContent {...props}/>}>
            <Drawer.Screen name="app" component={StackNavigation}/>
        </Drawer.Navigator>
    )
}



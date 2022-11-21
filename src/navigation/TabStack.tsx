import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import React, { FC, useLayoutEffect } from 'react';
import { Customer, Order } from '../screens';




export type TabStackParentList = {
    Customers: undefined;
    Orders: undefined;
}
const Tab = createBottomTabNavigator<TabStackParentList>();
 const TabStack: FC = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarActiveTintColor: "#59C1CC", tabBarInactiveTintColor: "gray",
            tabBarIcon: ({ focused, color, size }) => {
                if (route.name === 'Customers') {
                    return (<Icon name="people" type='entype' color={focused ? "#59C1CC" : "gray"} />)
                } else {
                    return (<Icon name='outbox' type='entype' color={focused ? "#EB6A7C" : "gray"} />)
                }
            }
        })}>
            <Tab.Screen name='Customers' component={Customer} />
            <Tab.Screen name="Orders" component={Order} />
        </Tab.Navigator>
    )
}
export default TabStack;
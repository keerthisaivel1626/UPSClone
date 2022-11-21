import { View, Text } from 'react-native';
import React, { useLayoutEffect } from 'react';

import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import {
    CompositeNavigationProp,
    RouteProp,
    useNavigation,
    useRoute,
} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import tw from 'twrnc';
import { AppStackParamList } from '../../navigation/AppStack';
import { TabStackParentList } from '../../navigation/TabStack';
import DeliveryCard from '../../components/App/DeliveryCard';
type OrderScreenRouteProp = RouteProp<AppStackParamList, 'Order'>;

export type OrderScreenNavigationProp = CompositeNavigationProp<
    BottomTabNavigationProp<TabStackParentList, 'Orders'>,
    NativeStackNavigationProp<AppStackParamList>
>;

const OrderScreen = () => {
   
    const navigation = useNavigation<OrderScreenNavigationProp>();
    const {
        params: { order },
    } = useRoute<OrderScreenRouteProp>();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: order.trackingItems.customer.name,
            headerTintColor: '#625B1F',
            headerTitleStyle: { color: 'black' },
            headerBackTitle: 'Deliveries',
        });
    }, [order]);

    return (
        <View style={tw`-mt-2`}>
            <DeliveryCard order={order} fullWidth />
        </View>
    );
};

export default OrderScreen;
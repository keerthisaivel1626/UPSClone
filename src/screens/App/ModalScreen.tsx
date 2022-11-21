import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { Icon } from '@rneui/themed';
import tw from 'twrnc';
import {
  CompositeNavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import useCustomerOrders from '../../components/hooks/useCustomerOrder';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import DeliveryCard from '../../components/App/DeliveryCard';
import { AppStackParamList } from '../../navigation/AppStack';
import { TabStackParentList } from '../../navigation/TabStack';


export type ModalScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParentList>,
  NativeStackNavigationProp<AppStackParamList, 'Modal'>
>;

type ModalScreenRouteProp = RouteProp<AppStackParamList, 'Modal'>;

const ModalScreen = () => {
 
  const navigation = useNavigation();
  const {
    params: { name, userId },
  } = useRoute<ModalScreenRouteProp>();

  const { loading, error, orders } = useCustomerOrders(userId);

  return (
    <View>
      <TouchableOpacity
        onPress={navigation.goBack}
        style={tw`absolute right-5 top-5 z-10`}
      >
        <Icon name='closecircle' type='antdesign' />
      </TouchableOpacity>

      <View style={tw`mt-2`}>
        <View style={[tw`py-5 border-b`, { borderColor: '#59C1CC' }]}>
          <Text style={tw`text-center text-xl font-bold`}>{name}</Text>
          <Text style={tw`text-center italic text-sm`}>Deliveries</Text>
        </View>
      </View>

      <FlatList
        contentContainerStyle={tw`pb-20`}
        data={orders}
        keyExtractor={(order) => order.trackingId}
        renderItem={({ item: order }) => <DeliveryCard order={order} />}
      />
    </View>
  );
};

export default ModalScreen;

import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import useCustomerOrders from '../hooks/useCustomerOrder';
import { CustomerScreenNavigationProps } from '../../screens/App/CustomerScreen';
import { useNavigation } from '@react-navigation/native';
import { Card, Icon } from '@rneui/base';
import tw from 'twrnc';
type Props = {
    userId: string;
    name: string;
    email: string;
};
const CustomerCard = ({ userId, name, email }: Props) => {
    const { loading, error, orders } = useCustomerOrders(userId);
    const navigation = useNavigation<CustomerScreenNavigationProps>();
    const handleNavigation = () => {
        return (
            navigation.navigate('Modal', { userId, name }));
    }
  
    return (
        <TouchableOpacity onPress={handleNavigation}>
            <Card containerStyle={[tw`p-5 border-r-8 border-b-8 border-l-2 border-t-2 border-black rounded-xl`]}>
                <View>
                    <View style={tw`flex-row justify-between`}>
                        <View>
                            <Text style={tw`text-2xl font-bold`}>{name}</Text>
                            <Text style={[tw`text-sm`, { color: '#59C1CC' }]}>
                                ID: {userId}
                            </Text>
                        </View>
                        <View style={tw`flex-row items-center justify-end`}>
                            <Text style={{ color: '#59C1CC' }}>
                                {loading ? 'loading...' : `${orders.length} x `}
                            </Text>
                            <Icon style={tw`mb-5 ml-auto`}
                                name='box'
                                type='entypo'
                                color='#59C1CC'
                                size={50} />
                        </View>
                    </View>
                </View>
                <Card.Divider />
                <Text>{email}</Text>
            </Card>
        </TouchableOpacity>
    )
}

export default CustomerCard
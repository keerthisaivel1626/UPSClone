import React, { FC, useLayoutEffect, useState,useEffect } from 'react'
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { ScrollView, ActivityIndicator } from 'react-native'
import tw from 'twrnc';
import { TabStackParentList } from '../../navigation/TabStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { AppStackParamList } from '../../navigation/AppStack';
import { Image, Input } from '@rneui/themed';
import { useQuery } from '@apollo/client';
import { GET_CUSTOMERS } from '../../graphql/queries';
import CustomerCard from '../../components/App/CustomerCard';

export type CustomerScreenNavigationProps = CompositeNavigationProp<
    BottomTabNavigationProp<TabStackParentList, "Customers">, NativeStackNavigationProp<AppStackParamList>>;

const Customer: FC = () => {
    const navigation = useNavigation<CustomerScreenNavigationProps>();
    const [input, setInput] = useState<string>('');
    const { loading, error, data }=useQuery(GET_CUSTOMERS);

   
   
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [navigation])
    // render
    return (
        <ScrollView style={{ backgroundColor: '#59C1CC' }} showsVerticalScrollIndicator={false}>

            <Image source={{ uri: 'https://links.papareact.com/3jc' }}
                containerStyle={tw`w-full h-64`} PlaceholderContent={<ActivityIndicator />} />
            <Input value={input} onChangeText={setInput} containerStyle={tw`bg-white pt-5 pb-0 px-10 mx-3 w-11/12 rounded-2xl self-center`} placeholder="Search by Customer" />
         
            {data?.getCustomers
                ?.filter((customer: CustomerList) =>
                    customer.value.name.includes(input)
                )
                .map(({ name: ID, value: { email, name } }: CustomerResponse) => (
                    <CustomerCard key={ID} email={email} name={name} userId={ID} />
                ))

        }
    
        </ScrollView>
    )
}

export default Customer

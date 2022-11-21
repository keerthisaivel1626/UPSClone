import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const { Navigator, Screen } = createNativeStackNavigator();
import { Login, SignUp } from '../screens';
export const AuthStack: FC = () => {
    return (
        <Navigator>
            <Screen name='SignUp' component={SignUp} />
            <Screen name='Login' component={Login} />
        </Navigator>
    )
};


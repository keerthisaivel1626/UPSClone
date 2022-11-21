import React, { FC } from 'react';
import { AppStack } from './AppStack';
import { NavigationContainer } from '@react-navigation/native';




export const RootStack: FC = () => {
    return (
        <NavigationContainer>
            <AppStack />
        </NavigationContainer>
    )
};


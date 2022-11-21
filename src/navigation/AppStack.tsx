import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabStack from './TabStack';
import { Home, DasBoard, Order } from '../screens';
import Modal from '../screens/App/ModalScreen';


export type AppStackParamList = {
  Main: undefined;
  Modal: { userId: string; name: string };
  Order: { order: Order };
};

export const AppStack: FC = () => {
  const { Navigator, Screen, Group } = createNativeStackNavigator();

  return (
    <Navigator>
      <Group>
       <Screen name='Main' component={TabStack} />
      </Group>
      <Screen name='Home' component={Home} />
      <Screen name='DasBoard' component={DasBoard} />
      <Group screenOptions={{ presentation: 'modal' }}>
      <Screen
        options={{ headerShown: false }}
        name='Modal'
        component={Modal}
      />
      </Group>
      <Screen name='Order' component={Order} />
    </Navigator>
  )
};


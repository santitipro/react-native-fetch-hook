import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Dashboard} from '@Screens';

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}

export default Navigator;

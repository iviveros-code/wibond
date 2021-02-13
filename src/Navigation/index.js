import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Search from '../screens/Search';

const BottomTab = createMaterialBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        activeColor={'red'}
        inactiveColor={'black'}
        barStyle={{
          height: 70,
          backgroundColor: '#b2bec3',
        }}>
        <BottomTab.Screen
          name="Home"
          component={Search}
          options={{
            tabBarLabel: 'Home',
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;

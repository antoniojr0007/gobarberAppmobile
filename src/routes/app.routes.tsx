import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Dashboard from '../pages/Dashboard';

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <App.Navigator
        screenOptions={{
          // headerShown: false,
          cardStyle: { backgroundColor: '#312E38' },
        }}
      >
        <App.Screen name="Dashboard" component={Dashboard} />
      </App.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;

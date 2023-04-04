import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import BottomTabRoutes from './src/routes/BottomTabs';

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabRoutes />
    </NavigationContainer>
  );
};

export default App;

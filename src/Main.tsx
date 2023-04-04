import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import BottomTabRoutes from './routes/BottomTabs';
import { usePreferences } from './stores/preferences';

const Main = () => {
  const { themeComponent } = usePreferences();

  return (
    <PaperProvider theme={themeComponent}>
      <NavigationContainer theme={themeComponent}>
        <BottomTabRoutes />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default Main;

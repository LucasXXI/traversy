import React from 'react';

import Main from './Main';
import { PreferencesProvider } from './stores/preferences';
import { LocationsProvider } from './stores/locations';

const App = () => {
  return (
    <LocationsProvider>
      <PreferencesProvider>
        <Main />
      </PreferencesProvider>
    </LocationsProvider>
  );
};

export default App;

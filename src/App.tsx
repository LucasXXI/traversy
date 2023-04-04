import React from 'react';

import Main from './Main';
import { PreferencesProvider } from './stores/preferences';

const App = () => {
  return (
    <PreferencesProvider>
      <Main />
    </PreferencesProvider>
  );
};

export default App;

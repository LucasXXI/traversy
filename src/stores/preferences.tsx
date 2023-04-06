import React, { createContext, useContext, useMemo, useState } from 'react';
import { useColorScheme } from 'react-native';

import { CombinedDarkTheme, CombinedLightTheme } from '../theme';

type Theme = 'light' | 'dark';

type Preferences = {
  theme: Theme;
  themeComponent: typeof CombinedLightTheme | typeof CombinedDarkTheme;
  toggleTheme: () => void;
};

const PreferencesContext = createContext<Preferences>({
  theme: 'light',
  themeComponent: CombinedLightTheme,
  toggleTheme: () => {},
});

export const PreferencesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState<Theme>(
    colorScheme === 'dark' ? 'dark' : 'light'
  );

  const themeComponent = useMemo(
    () => (theme === 'light' ? CombinedLightTheme : CombinedDarkTheme),
    [theme]
  );

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <PreferencesContext.Provider
      value={{
        theme,
        themeComponent,
        toggleTheme,
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
};

export const usePreferences = () => useContext(PreferencesContext);

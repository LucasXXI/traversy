import React, { createContext, useMemo, useState, useContext } from 'react';
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
  const [theme, setTheme] = useState<Theme>('light');
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

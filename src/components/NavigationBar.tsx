import { getHeaderTitle } from '@react-navigation/elements';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React from 'react';
import { Appbar } from 'react-native-paper';

import { usePreferences } from '../stores/preferences';

const NavigationBar = ({
  navigation,
  options,
  route,
  back,
}: NativeStackHeaderProps) => {
  const { theme, toggleTheme } = usePreferences();
  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header elevated>
      {back && <Appbar.BackAction onPress={navigation.goBack} />}
      <Appbar.Content title={title} />
      <Appbar.Action
        icon={theme === 'light' ? 'weather-night' : 'white-balance-sunny'}
        onPress={toggleTheme}
      />
    </Appbar.Header>
  );
};

export default NavigationBar;

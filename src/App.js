/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import Navigator from '@Navigation';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.app}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Navigator />
    </SafeAreaView>
  );
};

const styles = {
  app: {
    flex: 1,
  },
};

export default App;

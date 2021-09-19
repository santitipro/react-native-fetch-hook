import React from 'react';
import {View} from 'react-native';

const Container = ({children}) => (
  <View style={styles.container}>{children}</View>
);

const styles = {
  container: {
    marginHorizontal: 20,
    marginVertical: 15,
  },
};

export default Container;

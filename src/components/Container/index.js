import React from 'react';
import {View} from 'react-native';

const Container = ({children}) => (
  <View style={styles.wrapper}>{children}</View>
);

const styles = {
  wrapper: {
    marginHorizontal: 20,
    marginVertical: 15,
  },
};

export default Container;

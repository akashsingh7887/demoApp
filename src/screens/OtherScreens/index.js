import React from 'react';
import {View, Text} from 'react-native';

const OtherScreen = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{props?.route?.name || ''}</Text>
    </View>
  );
};

export default OtherScreen;

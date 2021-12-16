import React from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';
import colors from '../../constants/colors';
import labels from '../../constants/labels';
import {normalize} from '../../libs/normalize';
import {profileUrl, profileUrl1} from '../../constants/data';

const Header = props => {
  return (
    <SafeAreaView style={styles.outerView}>
      <View style={styles.flexDir}>
        <Image style={styles.imageView} source={{uri: profileUrl}} />
        <View>
          <Text style={styles.boldFont}>{labels.fontendUs}</Text>
          <Text style={styles.whiteFont}>{labels.code}</Text>
        </View>
      </View>
      <View style={styles.flexDir}>
        <View>
          <Text style={styles.whiteFont}>{labels.faceCom}</Text>
        </View>
        <Image style={styles.imageView} source={{uri: profileUrl1}} />
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  outerView: {
    backgroundColor: colors.blue,
    paddingVertical: normalize(12),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  imageView: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginHorizontal: normalize(12),
  },
  flexDir: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boldFont: {fontWeight: 'bold', color: colors.white},
  whiteFont: {color: colors.white},
});

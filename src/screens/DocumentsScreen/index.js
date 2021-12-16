import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import colors from '../../constants/colors';
import {normalize} from '../../libs/normalize';
import request from '../../libs/api';
import labels from '../../constants/labels';

const DocumentsScreen = props => {
  const [state, setState] = useState([]);
  const [loader, setLoader] = useState(true);

  const fetchDate = async () => {
    setLoader(true);
    const res = await request();
    setLoader(false);
    if (res?.data?.length > 0) {
      setState(res?.data);
    }
  };

  useEffect(() => {
    fetchDate();
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={styles.renderItem}>
        <Image style={styles.imageRender} source={{uri: item.avatar}} />
        <View style={styles.renderinnerView}>
          <Text style={styles.renderText1}>{`${item.first_name} ${
            item.last_name
          }`}</Text>
          <Text style={styles.renderText}>{item.email}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.outerView}>
      {loader && (
        <ActivityIndicator
          animating={loader}
          size="large"
          color={colors.blue}
        />
      )}
      {state.length == 0 ? (
        <View style={styles.flexAlignCent}>
          <Text style={styles.boldText}>{labels.noContents}</Text>
        </View>
      ) : (
        <View style={styles.belowView}>
          <View style={styles.innerView}>
            <FlatList
              data={state}
              renderItem={renderItem}
              keyExtractor={item => item?.id}
              contentContainerStyle={styles.flatlistConatiner}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default DocumentsScreen;

const styles = StyleSheet.create({
  outerView: {flex: 1},

  belowView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  innerView: {
    flex: 1,
    padding: normalize(10),
  },
  boldText: {fontWeight: 'bold'},
  renderItem: {
    margin: normalize(10),
    flexDirection: 'row',
    borderRadius: normalize(10),
    borderWidth: 0.5,
    borderColor: colors.blue,
  },
  imageRender: {
    height: normalize(80),
    width: normalize(80),
    marginRight: normalize(20),
    borderRadius: normalize(10),
  },
  renderText: {color: colors.grey},
  renderText1: {color: colors.grey, fontWeight: 'bold'},
  flatlistConatiner: {},
  renderinnerView: {
    flex: 1,
    justifyContent: 'center',
  },
  flexAlignCent: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

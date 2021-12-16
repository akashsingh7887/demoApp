import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import colors from '../../constants/colors';
import labels from '../../constants/labels';
import {normalize} from '../../libs/normalize';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {profileUrl, DATA} from '../../constants/data';
const width = Dimensions.get('window').width - 40;

const Home = props => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.renderItem}>
        <Image style={styles.imageRender} source={{uri: item.url}} />
        <Text style={styles.renderText}>{item.name}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.outerView}>
      <View style={styles.blueView}>
        <Text style={styles.topText}>{labels.welcome}</Text>
        <Text style={styles.topText2}>
          {labels.d}
          <Text style={styles.topText3}> {labels.oo} </Text>
          {labels.t}
        </Text>
        <TouchableOpacity onPress={() => {}} style={styles.myProf}>
          <AntDesign name="pluscircle" color={colors.white} size={15} />
          <Text style={styles.proftext}> {labels.myProf} </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.belowView}>
        <View style={styles.innerView}>
          <Text style={styles.boldText}>{labels.myFavrites}</Text>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item}
            numColumns={3}
            contentContainerStyle={styles.flatlistConatiner}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  outerView: {flex: 1},
  blueView: {
    flex: 1,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  topText: {color: colors.white, fontSize: normalize(35)},
  topText2: {
    color: colors.white,
    fontSize: normalize(35),
    fontStyle: 'italic',
    letterSpacing: 3,
  },
  topText3: {
    color: colors.darkblue,
    fontSize: normalize(35),
    fontStyle: 'italic',
    letterSpacing: -6,
  },
  myProf: {
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: colors.white,
    padding: 5,
    borderRadius: 5,
    marginTop: normalize(20),
  },
  proftext: {
    color: colors.white,
    marginLeft: 5,
  },
  belowView: {
    flex: 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    backgroundColor: colors.white,
  },
  innerView: {
    flex: 1,
    paddingHorizontal: normalize(30),
    padding: normalize(15),
  },
  boldText: {fontWeight: 'bold'},
  renderItem: {margin: 10, justifyContent: 'center', alignItems: 'center'},
  imageRender: {height: width / 4, width: width / 4, borderRadius: width / 8},
  renderText: {color: colors.grey, fontWeight: 'bold'},
  flatlistConatiner: {
    alignSelf: 'center',
  },
});

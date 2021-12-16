import 'react-native-gesture-handler';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
import OtherScreen from '../screens/OtherScreens';
import DocumentsScreen from '../screens/DocumentsScreen';

import Header from '../components/Header';
import colors from '../constants/colors';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: props => <Header {...props} />,
        }}>
        <Stack.Screen name="My Vendors" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: colors.blue,
        style: styles.styleTabbar,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Entypo name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Documents"
        component={DocumentsScreen}
        options={{
          tabBarLabel: 'Documents',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="newspaper-variant-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Send"
        component={OtherScreen}
        options={{
          tabBarLabel: 'Send',
          tabBarIcon: ({color, size}) => (
            <View style={styles.centreTabStyle}>
              <Entypo name="infinity" color={color} size={size * 1.6} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={OtherScreen}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="history" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={OtherScreen}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({color, size}) => (
            <Ionicons
              name="ellipsis-horizontal-circle"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default App;

const styles = StyleSheet.create({
  centreTabStyle: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  styleTabbar: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
});

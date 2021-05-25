import React from 'react';
import { StyleSheet, Text, View , Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReadStory from './screens/ReadStory';
import WriteStory from './screens/WriteStory';

export default function App() {
  return (
    <View>
      <AppContainer/>
    </View>
  );
}

const navTabs = createBottomTabNavigator({
  Write : {screen: WriteStory},
  Read : {screen: ReadStory}
  },

  {defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ()=> {
      const route = navigation.state.routeName;
      if(route === "Write") {
        return(
          <Image source={require("./assets/write.png")} style={{width: 40, height: 40}}/>
        )
        } else if(route === "Read") {
          <Image source={require("./assets/read.png")} style={{width: 40, height: 40}}/>
        }
      }
    })
  }
)

const AppContainer = createAppContainer(navTabs)

const styles = StyleSheet.create({
  text: {
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold'
  }
});
import * as React from 'react';
import { StyleSheet, Text, View , Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReadStory from './screens/ReadStory';
import WriteStory from './screens/WriteStory';

export default class App extends React.Component {
  render() {
    return (
        <AppContainer/>
    )
  }
}

const tabNavigator = createBottomTabNavigator({
  Write: {screen: WriteStory},
  Read : {screen: ReadStory}
}, 

  {defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: () => {
      const nameRoot = navigation.state.routeName;
      if(nameRoot === "Write") {
        return(
          <Image source = {require("./assets/write.png")} style={{width: 40, height: 40}}/>
        )
      } else if(nameRoot === 'Read') {
        return(
          <Image source={require("./assets/read.png")} style={{width: 40, height: 40}}/>
        )
      }
    }
  })
  }
)

const AppContainer = createAppContainer(tabNavigator)

const styles = StyleSheet.create({
  text: {
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold'
  }
});
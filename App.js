import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import WriteStory from './screens/WriteStory'
import ReadStory from './screens/ReadStory'

const image1 = { uri: "https://wallpapercave.com/wp/wp2297884.jpg" };

const TabNavigator = createBottomTabNavigator({
  WriteStory:{screen:WriteStory},
  ReadStory:{screen:ReadStory},
},{
  defaultNavigationOptions: ({navigation}) => {
    tabBarIcon: ({ tintColor })=>{
      const routeName = navigation.state.routeName;
      if(routeName === 'WriteStory'){ 
        //return (<Image style={{ width: 30, height: 30 }} source={{ uri: "https://wallpapercave.com/wp/wp2297884.jpg" }}/>)
        return(<Image style={{ width: 30, height: 30 }}  source={require('./assets/write.png')} />)
      } else if(routeName === 'ReadStory'){ 
        return(<Image style={{ width: 30, height: 30 }}  source={require('./assets/read.png')} />)
      }
    }
  }
});

const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
  render(){
    return (
      <AppContainer />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

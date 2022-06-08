import { View, Text,Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from './screens/Chat';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  const name='Anoj';
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen options={{
          title: 'Message',
        }} name="Home" component={Home} />
        <Stack.Screen options={({route})=>({
          title:route.params.name,
          headerRight:()=><IconsLeft/>,
          headerLeft:()=> <InconsRight img={route.params.img} />
        })} name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const IconsLeft=()=>{
  return(
  <View style={{
    flexDirection:'row',
  }} >
    <Icon style={{margin:10}} name="video-camera" size={30} color="black" />
    <Icon style={{margin:10}} name="phone" size={30} color="black" />
    <Icon style={{margin:10}} name='ellipsis-v' size={30} color="black" />
  </View>)
}
const InconsRight=(props)=>{
  return(
    <View>
        <Image
          source={props.img}
          style={{
            width: 40,
            height: 40,
            borderRadius: 40 / 2,
            marginLeft: 15,
            marginRight:10,
          }}
        />
    </View>
  )
}
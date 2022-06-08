import { View, Text, Button,TouchableOpacity } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Chat({route,navigation}) {
  return (
    <View>
      <View style={{
        padding:5,
        justifyContent:'space-around',
        flexDirection:'row',
        top:450,
        left:300,
        borderColor: 'black',
        backgroundColor:'green',
        width:100,
        alignItems:'center',
        borderRadius:50
      }} >
      <Text  style={{color:'black',fontSize:15}}>{route.params.message}</Text>
      <Text  style={{color:'black',fontSize:8}}>{route.params.time}</Text>
      </View>
      <View  style={{flexDirection:'row',justifyContent:'space-around', top:500}}>
        <View style={{
          alignItems:'center',
          flexDirection:'row',
          borderColor:'#000',
          paddingBottom:10,
        }} >
        <TextInput
      style={{ width:250,height:40,borderColor:'black',borderWidth:1,borderRadius:30}}
      multiline
      placeholder={"Type something..."}
      onChangeText={(text)=>setMessage(text)}
      />
        <Icon  name='smile-o' size={20} color='black' style={{position:'absolute',marginLeft:10,bottom:25}}/>

        </View>
      <TouchableOpacity>
      <Icon style={{margin:10}} name="microphone" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={{
        backgroundColor:'green',
        borderRadius:50,
      }} >
      <Icon style={{margin:10}} name="thumbs-up" size={30} color="white" />
      </TouchableOpacity>
      </View>
    </View>
) 
}
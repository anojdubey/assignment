import { View, Text,Button,FlatList,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, List } from 'react-native-paper';

export default function Home({navigation}) {
  return (
    <Card >
      {Messages.map((item,index)=>{
        return(
          <Card key={index}>
          <TouchableOpacity onPress={()=>navigation.navigate('Chat',{name:item.userName,img:item.userImg,message:item.messageText,time:item.messageTime})}>
            <List.Item
              title={item.userName}
              description={props=>
                <View style={{flexDirection:'row'}} >
                  <Icon style={{marginRight:15,top:5}} name="check" size={10} color="black" />
                  <Text>{item.messageText}</Text>
                </View>}
              left={props =><View>
                <Image style={{
                  top:10,
                width: 40,
            height: 40,
            borderRadius: 40 / 2,
            marginLeft: 15,
            marginRight:10,
              }} source={item.userImg} />
              </View> }
              right={props =><View>
                <Text>{item.messageTime}</Text>
              </View>}
              />
         </TouchableOpacity>
         </Card>
        )
      })}
    </Card>
  )
}

const Messages = [
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: require('../assets/img1.webp'),
    messageTime: '4:30 PM',
    messageText:
      'heyy',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../assets/img1.webp'),
    messageTime: '2:30 PM',
    messageText:
      'heyy',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../assets/img1.webp'),
    messageTime: '1:30 PM',
    messageText:
      'heyy',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../assets/img1.webp'),
    messageTime: '12:30 PM',
    messageText:
      'heyy',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../assets/img1.webp'),
    messageTime: '2:30 PM',
    messageText:
      'heyy',
  },
];
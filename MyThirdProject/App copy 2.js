import React from 'react';
import { Text, View, Image } from 'react-native';

export default function CatApp() {

  // let pic = {
  //   uri: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/dog2.png'};
  //neither of these options worked for retrieving the picture from this path
    
   return (
     <View style={{
       flex: 1,
       justifyContent: 'center',
       allignItems: 'center'
     }}>
      <Image source="https//raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/dog2.png"
        style={{width: 200, height: 200}}
      />
      <Text>Hello, I'm Abdunabi's dog!</Text>
    </View>
  );
}


import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, backgroundColor, color, Alert, Image} from "react-native";




const App = () => {

  return (

    <View style={{paddingHorizontal: 10, backgroundColor: "#FFFFFF", top : 35}}>

      

      <TouchableOpacity
        title=' Validé '
        onPress={() => Alert.alert('Retour en arriere')}
      >

        <Image
        style={{height:30, width:20, marginTop:5, marginLeft:10,}}
        source={require('./angle-left-solid.png')}/>

      </TouchableOpacity>

      <Text
      style={{fontSize:30, marginTop:20,}}> Settings </Text>

      <Text 
      style={{fontSize:20, marginTop:25,}}> Account </Text>

      <View style={{marginTop:10, height:90, width:335, flexDirection:'row', alignItems:'center', padding: 5,}}>
        
        <Image style={{height:70, width:70, marginRight:10, marginTop:15,}}
        source={require('./Contact.png')}/>

        <View style={{marginLeft:10,marginTop:15, height:50, width:200, display:'flex', justifyContent:'space-between',}}>
          <Text>Romain Monmarché</Text>
          <Text style={styles.Desc}>Personal Infos</Text>
        </View>

        <View style={{backgroundColor:'#D3D3D3', height:40, width:40, alignItems:'center', marginTop:15, borderRadius:15,}}>
          <Image
          style={{height:30, width:20, textAlign:'right', marginTop:5,}}
          source={require('./angle-right-solid.png')}/>
        </View>

      </View>

      <Text 
      style={{fontSize:20, marginTop:25,}}>Settings</Text>

      <View style={{marginTop:10, height:90, width:335, flexDirection:'row', alignItems:'center', padding: 5,}}>
        
        <Image style={{height:70,  width:70,  marginRight:10,  marginTop:15,}}
        source={require('./Langue.png')}/>

        <View style={{marginLeft:10,  marginTop:15,  height:50,  width:200,  display:'flex',  justifyContent:'space-between',}}>
          <Text>Language</Text>
        </View>

        <View style={{backgroundColor:'#D3D3D3',  height:40,  width:40,  alignItems:'center',  marginTop:15,  borderRadius:15,}}>
          <Image
          style={{height:30,  width:20,  textAlign:'right',  marginTop:5,}}
          source={require('./angle-right-solid.png')}/>
        </View>

      </View>

      <View style={{marginTop:10,  height:90,  width:335,  flexDirection:'row',  alignItems:'center',  padding: 5,}}>
        
        <Image style={{height:70,  width:70,  marginRight:10,  marginTop:15,}}
        source={require('./Notification.png')}/>

        <View style={{marginLeft:10,  marginTop:15,  height:50,  width:200,  display:'flex',  justifyContent:'space-between',}}>
          <Text>notifications</Text>
        </View>

        <View style={{backgroundColor:'#D3D3D3',  height:40,  width:40,  alignItems:'center',  marginTop:15,  borderRadius:15,}}>
          <Image
          style={{height:30,  width:20,  textAlign:'right',  marginTop:5,}}
          source={require('./angle-right-solid.png')}/>
        </View>

      </View>

      <View style={{marginTop:10,  height:90,  width:335,  flexDirection:'row',  alignItems:'center',  padding: 5,}}>
        
        <Image style={{height:70,  width:70,  marginRight:10,  marginTop:15,}}
        source={require('./DarkMode.png')}/>

        <View style={{marginLeft:10,  marginTop:15,  height:50,  width:200,  display:'flex',  justifyContent:'space-between',}}>
          <Text>Dark Mode</Text>
        </View>

        <View style={{backgroundColor:'#D3D3D3',  height:40,  width:40,  alignItems:'center',  marginTop:15,  borderRadius:15,}}>
          <Image
          style={{height:30,  width:20,  textAlign:'right',  marginTop:5,}}
          source={require('./angle-right-solid.png')}/>
        </View>

      </View>

      <View style={{marginTop:10,  height:90,  width:335,  flexDirection:'row',  alignItems:'center',  padding: 5,}}>
        
        <Image style={{height:70,  width:70,  marginRight:10,  marginTop:15,}}
        source={require('./Help.png')}/>

        <View style={{marginLeft:10,  marginTop:15,  height:50,  width:200,  display:'flex',  justifyContent:'space-between',}}>
          <Text>Aide</Text>
        </View>

        <View style={{backgroundColor:'#D3D3D3',  height:40,  width:40,  alignItems:'center',  marginTop:15,  borderRadius:15,}}>
          <Image
          style={{height:30,  width:20,  textAlign:'right',  marginTop:5,}}
          source={require('./angle-right-solid.png')}/>
        </View>

      </View>


    </View>
    
  );
};

const styles = StyleSheet.create({

});

export default App;

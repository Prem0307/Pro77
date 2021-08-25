import React, { Component } from 'react';
import { Text, View,StyleSheet ,Platform,StatusBar,SafeAreaView,TouchableOpacity,ImageBackground,Image} from 'react-native';


export default class HomeScreen extends Component {
    render() {
        return (
            <View
               style={styles.container}
                >

                    <SafeAreaView style={styles.androidSafe}/>
                    <ImageBackground source={require('../assets/stars.gif')} style={styles.bgImage}>
                    <View style={styles.titleBar}>
                <Text style={styles.titletext}>Stellar </Text>
                <Text style={styles.titletext}>App</Text>
                <Image source={require('../assets/main-icon.png')} style={styles.icon}/>
                </View>
<TouchableOpacity style={styles.iss3} 
onPress={()=>{
    this.props.navigation.navigate('spaceCraft')
}}>
    <Text style={styles.root}>Space Crafts</Text>

    <Image source={require('../assets/space_crafts.png')} style={styles.iconImage}/>
</TouchableOpacity>
<TouchableOpacity style={styles.iss1}
onPress={()=>{
    this.props.navigation.navigate('meteor')
}}>
    <Text style={styles.root}>Star Map</Text>
    
    <Image source={require('../assets/star_map.png')} style={styles.iconImage}/>
</TouchableOpacity>
<TouchableOpacity style={styles.iss}
onPress={()=>{
    this.props.navigation.navigate('meteor')
}}>
    <Text style={styles.root}>Daily Pictures</Text>
  
    <Image source={require('../assets/daily_pictures.png')} style={styles.iconImage}/>
</TouchableOpacity>
</ImageBackground>
            </View>
        )
    }
}
const styles =StyleSheet.create({
container:{
    flex:1
},
androidSafe:{
    marginTop : Platform.OS==="android" ? StatusBar.currentHeight:0
},
titleBar:{
    flex:0.15,
    justifyContent:'center',
    alignItems:'center',

    marginTop:200
},
iss:{
    flex:0.20,
    marginLeft:50,
    marginRight:50,
    marginTop:10,
    borderRadius:150,
    backgroundColor:"white",
    borderWidth:2
},
iss3:{
    flex:0.20,
    marginLeft:50,
    marginRight:50,
    marginTop:100,
    borderRadius:150,
    backgroundColor:"white",
    borderWidth:2
},
iss1:{
    flex:0.20,
    marginLeft:50,
    marginRight:50,
    marginTop:20,
    borderRadius:150,
    backgroundColor:"white",
    borderWidth:2
},

root:{
    fontSize:25,
    fontWeight:'bold',
    color:'red',
    marginTop:15,
    paddingLeft:100,
    marginTop:50
},
titletext:{
    fontSize:40,
    fontWeight:'bold',
    color:'white',
    
},
bgImage:{
    flex:1,
    resizeMode: 'cover'
},

iconImage:{
    position:'absolute',
    height:130,
    width:100,
    resizeMode:'contain',
    right:20,
    top:-35
},
icon:{
    marginTop:-300,
    height:180,
    width:180
}
})
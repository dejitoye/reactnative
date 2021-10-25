import React from 'react'
import { StyleSheet, Text, View ,Button} from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({navigation}) {
    // console.log("navigation",props)r
    const pressH = ()=>{
navigation.navigate("reviews")
    }
    return (
        <View style={globalStyles.container}>
           <Text style={globalStyles.titleText}> Home screeen </Text> 
          <Button title="go to review" onPress={pressH}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:24
    },titleText:{
        fontFamily:""
    }
})

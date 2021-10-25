import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';
export default function Review({navigation}) {
    const pressH = ()=>{
        navigation.goBack()
            }
    return (
        <View>
           <Text> review </Text> 
           <Button title="go to home" onPress={pressH}/>
        </View>
    )
}

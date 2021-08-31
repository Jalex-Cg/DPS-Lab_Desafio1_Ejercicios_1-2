import { RefreshControlBase } from "react-native";
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import colors from '../utils/colors';

export default function Footer(props) {
 const {calculate, limpiar,} = props;
 return (
 <View style={styles.viewFooter}>
 <TouchableOpacity style={styles.button} onPress={calculate}>
 <Text style={styles.text}>Agregar</Text>
 </TouchableOpacity>
 </View>
 );
}

const styles = StyleSheet.create({
 viewFooter: {
 position: 'absolute',
    alignSelf: 'center',
    bottom: 30,
    width: '65%',
    height: 50,
    borderRadius:10,
    alignItems: 'center',
    justifyContent: 'center',
 },
 button: {
 backgroundColor: 'blue',
  padding: 6,
  borderRadius: 20,
  width: '25%', 
  marginTop:25,
  position:'relative',
  top:-520,
  left:150
 },
 text: {
 fontWeight: 'bold',
 fontSize: 18,
 color: '#fff',
 textAlign: 'center',
 },
 buttonB: {
   backgroundColor: 'red',
   padding: 6,
   borderRadius: 20,
   width: '25%', 
   marginTop:25,
   
   
 }
});
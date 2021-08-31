import { RefreshControlBase } from "react-native";
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import colors from '../utils/colors';

export default function Footer(props) {
 const {calculate, limpiar, enviar} = props;
 return (
 <View style={styles.viewFooter}>
 <TouchableOpacity style={styles.button} onPress={calculate}>
 <Text style={styles.text}>Agregar</Text>
 </TouchableOpacity>

 <TouchableOpacity style={styles.buttonB} onPress={limpiar}>
 <Text style={styles.text}>Borrar</Text>
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
    backgroundColor: colors.PRIMARY_COLOR,
    height: 50,
    borderRadius:10,
    alignItems: 'center',
    justifyContent: 'center',
 },
 button: {
 backgroundColor: colors.PRIMARY_COLOR_DARK,
  padding: 6,
  borderRadius: 20,
  width: '75%', 
  marginTop:25
 },
 text: {
 fontWeight: 'bold',
 fontSize: 18,
 color: '#fff',
 textAlign: 'center',
 },
 buttonB: {
 backgroundColor: colors.PRIMARY_COLOR_Borrar,
  padding: 6,
  borderRadius: 20,
  width: '75%',
 }
});
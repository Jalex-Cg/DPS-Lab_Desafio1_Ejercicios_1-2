import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default function Result(props) {
 const {cantidad, nombrePro, nombrePronom, total, errorMessage, setCantidad, limpiar} = props;
 
  return (
 <View style={styles.content}>
 {total && (<View style={styles.boxResult}>
 <Text style={styles.title}>Lista de Productos</Text>
 <DataResult title="Producto: " value={`${nombrePronom} `} />
 <DataResult title="Precio del producto " value={`${nombrePro} $`} />
 <TextInput style={styles.cantidad}
        placeholder="Cantidad"
        keyboardType="numeric"
        onChange={(e) => setCantidad(e.nativeEvent.text)}
  />
<TouchableOpacity style={styles.buttonB} onPress={limpiar}>
  <Text style={styles.text}>X</Text>
 </TouchableOpacity>
 <Text style={styles.textDi}>-----------------------------------------------------------------------------------------------------------------</Text>
 <DataResult style={{textAlign:'center', position:'relarive',top:-100}}
 title="Total a pagar: "
 value={`${total.totalPayable} $`}
 />
 </View>
 )}
 <View>
 <Text style={styles.error}>{errorMessage}</Text>
 </View>
 </View>
 );
}

function DataResult(props) {
 const {title, value,} = props;
 return (
 <View style={styles.value}>
 <Text>{title}</Text>
 <Text>{value}</Text>
 </View>
 );
}

const styles = StyleSheet.create({
 content: {
   justifyContent:'center',
   alignContent:'center'
 },
 boxResult: {
 padding: 50,
 alignSelf:'center'
 },
 title: {
 fontSize: 25,
 textAlign: 'center',
 fontWeight: 'bold',
 marginBottom: 20,
 },
 value: {
 flexDirection: 'row',
 
 marginBottom: 20,
 },
 error: {
 textAlign: 'center',
 color: '#f00',
 fontWeight: 'bold',
 fontSize: 20,
 },
 cantidad:{
   marginTop:20,
   width: '10%',
   position:"relative",
   left:500,
   top:-70,
 },
 buttonB: {
  backgroundColor: 'red',
  padding: 6,
  borderRadius: 20,
  width: '5%', 
  marginTop:25,
  position:"relative",
   left:600,
   top:-125,
 },
 text: {
  fontWeight: 'bold',
  fontSize: 18,
  color: '#fff',
  textAlign: 'center',
 },
 textDi:{
   position:"relative",
   top:-100
 }
});
import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import InputSpinner from "react-native-input-spinner";

export default function Result(props) {
 const {cantidad, nombrePro, nombrePronom, total, errorMessage, setCantidad, limpiar} = props;
 
  return (
 <View style={styles.content}>
 {total && (<View style={styles.boxResult}>
 <Text style={styles.title}>Lista de Productos</Text>
 <DataResult title="Producto: " value={`${nombrePronom} `} />
 <DataResult title="Precio del producto " value={`${nombrePro} $`} />
 <InputSpinner style={styles.cantidad}
    skin={"square"}
    max={100}
    min={0}
    step={1}
    colorMax={"#070807"}
    colorMin={"#070807"}
    onChange={(value) => setCantidad(value)}
/>
 {/* <TextInput style={styles.cantidad}
        placeholder="Cantidad"
        keyboardType="numeric"
        onChange={(e) => setCantidad(e.nativeEvent.text)}
  /> */}
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
   alignContent:'center',
   
   
 },
 boxResult: {
 backgroundColor:'lavender',
 alignSelf:'center',
 borderWidth:2

 },
 title: {
 fontSize: 25,
 textAlign: 'center',
 fontWeight: 'bold',
 marginBottom: 20,
 backgroundColor:'lightblue',
 borderWidth:2
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
   width: '25%',
   position:"relative",
   left:400,
   top:-100,
 },
 buttonB: {
  backgroundColor: 'red',
  padding: 6,
  borderRadius: 150,
  width: '5%', 
  marginTop:25,
  position:"relative",
   left:580,
   top:-160,
   borderWidth:1
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
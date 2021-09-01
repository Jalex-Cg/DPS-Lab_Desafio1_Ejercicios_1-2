import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Button,
  Alert,
} from 'react-native';
import Form from './src/components/Forms';
import Footer from './src/components/Footer';
import Result from './src/components/Result';
import producto from './src/components/producto';
import colors from './src/utils/colors';

export default function App() {
  const [cantidad, setCantidad] = useState(null);
  const [nombrePro, setNombrePro] = useState(null);
  const [nombrePronom, setNombrePronom] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const limpiar = () => {
    if(nombrePronom != null){
      setNombrePronom('');
    setNombrePro(null);
    setCantidad(null);
    Alert.alert('Mensaje', 'Producto eliminado', [
      {text: 'Aceptar', onPress:() => console.log('alert closed')} 
    ]);
    }
    
  };

  const calculate = () => {
    reset();
    if (!nombrePro) {
      setErrorMessage('Seleccione un producto');
    } else {
      const can = parseFloat(cantidad);
      const pro = parseFloat(nombrePro);
      const tot = pro * can;
      if (pro == 0.25) {
        setNombrePronom('Manzana');
      } else if (pro == 0.20) {
        setNombrePronom('Pera');
      } else if (pro == 0.95) {
        setNombrePronom('Mango');
      } else if (pro == 1.50) {
        setNombrePronom('Sandia');
      } else if (pro == 1.00) {
        setNombrePronom('Uvas');
      } else if (pro == 1.15) {
        setNombrePronom('Melon');
      } else if (pro == 0.35) {
        setNombrePronom('Banano');
      } else if (pro == 0.55 ) {
        setNombrePronom('Kiwi');
      } else if (pro == 0.40) {
        setNombrePronom('Naranja');
      } else if (pro == 0.15) {
        setNombrePronom('Mandarina');
      }

      setTotal({
        totalPayable: tot.toFixed(2).replace('.', ','),
      });
    }
  };

  useEffect(() => {
    if (cantidad && nombrePro && nombrePronom) enviar();
    else reset();
  }, [cantidad, nombrePro]);

  const enviar = () => {
    reset();
    const can = parseFloat(cantidad);
    const pro = parseFloat(nombrePro);
    const tot = pro * can;
    setTotal({
      totalPayable: tot.toFixed(2).replace('.', ','),
    });
  };

  const reset = () => {
    setErrorMessage('');
    setTotal(null);
  };
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background} />
        <Text style={styles.titleApp}>Lista de compras</Text>
        <Form setNombrePro={setNombrePro} />
      </SafeAreaView>
      <Result
        nombrePronom={nombrePronom}
        nombrePro={nombrePro}
        setCantidad={setCantidad}
        total={total}
        errorMessage={errorMessage}
        limpiar={limpiar}
      />
      <Footer calculate={calculate} limpiar={limpiar} enviar={enviar} />
    </>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    height: 200,
    alignItems: 'center',
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 150,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
    
  },
});

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
import colors from './src/utils/colors';

export default function App() {
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);
  const [monthsnom, setMonthsnom] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const limpiar = () => {
    if(monthsnom != null){
      setMonthsnom('');
    setMonths(null);
    setCapital(null);
    Alert.alert('Mensaje', 'Producto eliminado', [
      {text: 'Aceptar', onPress:() => console.log('alert closed')} 
    ]);
    }
    
  };

  const calculate = () => {
    reset();
    if (!months) {
      setErrorMessage('Seleccione un producto');
    } else {
      const can = parseFloat(capital);
      const pro = parseFloat(months);
      const tot = pro;
      if (pro == 0.25) {
        setMonthsnom('Manzana');
      } else if (pro == 0.20) {
        setMonthsnom('Pera');
      } else if (pro == 0.95) {
        setMonthsnom('Mango');
      } else if (pro == 1.50) {
        setMonthsnom('Sandia');
      } else if (pro == 1.00) {
        setMonthsnom('Uvas');
      } else if (pro == 1.15) {
        setMonthsnom('Melon');
      } else if (pro == 0.35) {
        setMonthsnom('Banano');
      } else if (pro == 0.55 ) {
        setMonthsnom('Kiwi');
      } else if (pro == 0.40) {
        setMonthsnom('Naranja');
      } else if (pro == 0.15) {
        setMonthsnom('Mandarina');
      }

      setTotal({
        totalPayable: tot.toFixed(2).replace('.', ','),
      });
    }
  };

  useEffect(() => {
    if (capital && months && monthsnom) enviar();
    else reset();
  }, [capital, interest, months]);

  const enviar = () => {
    reset();
    const can = parseFloat(capital);
    const pro = parseFloat(months);
    const tot = pro * can;
    if (pro == 1) {
        setMonthsnom('Producto1');
      } else if (pro == 2) {
        setMonthsnom('Producto2');
      } else if (pro == 3) {
        setMonthsnom('Producto3');
      } else if (pro == 4) {
        setMonthsnom('Producto4');
      } else if (pro == 5) {
        setMonthsnom('Producto5');
      } else if (pro == 6) {
        setMonthsnom('Producto6');
      } else if (pro == 7) {
        setMonthsnom('Producto7');
      } else if (pro == 8) {
        setMonthsnom('Producto8');
      } else if (pro == 9) {
        setMonthsnom('Producto9');
      } else if (pro == 10) {
        setMonthsnom('Producto10');
      }

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
        <Form setMonths={setMonths} />
      </SafeAreaView>
      <Result
        monthsnom={monthsnom}
        months={months}
        setCapital={setCapital}
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

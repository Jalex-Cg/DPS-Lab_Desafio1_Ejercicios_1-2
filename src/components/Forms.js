import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import colors from '../utils/colors';

export default function Form(props) {
  const { setCapital, setInterest, setMonths } = props;

  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInputs}></View>
      <RNPickerSelect
        style={picketSelectStyles.pikerWeb} 
        onValueChange={(value) => setMonths(value)}
        placeholder={{
          label: '-Agregar Producto-',
          value: null,
        }}
        items={[
          { label: 'Manzana', value: 0.25 },
          { label: 'Pera ', value: 0.20 },
          { label: 'Mango ', value: 0.95 },
          { label: 'Sandia ', value: 1.50 },
          { label: 'Uvas', value: 1.00 },
          { label: 'Melon', value: 1.15 },
          { label: 'Banano', value: 0.35 },
          { label: 'Kiwi', value: 0.55 },
          { label: 'Naranja', value: 0.40 },
          { label: 'Mandarina', value: 0.15 },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewForm: {
    position: 'relative',
    top:-45,
    left:-200,
    width: '30%',
    paddingHorizontal: 50,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 30,
    height: 180,
    justifyContent: 'center',
  },
  viewInputs: {
    position:'relative',
    top:10,
    left:10,
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    width: '60%',
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 20,
  },
  inputPercentage: {
    width: '40%',
    marginLeft: 5,
  },
});

const picketSelectStyles = StyleSheet.create({
  pikerWeb:{
    position:'relative',
    top:10,
    left:10,
    marginTop:20,
    borderRadius:150,
  }
});
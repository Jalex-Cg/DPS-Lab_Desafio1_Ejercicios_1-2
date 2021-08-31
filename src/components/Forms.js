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
          label: 'Agrgarsss Producto',
          value: null,
        }}
        items={[
          { label: 'Producto1 $1', value: 1 },
          { label: 'Producto2 $2', value: 2 },
          { label: 'Producto3 $3', value: 3 },
          { label: 'Producto4 $4', value: 4 },
          { label: 'Producto5 $5', value: 5 },
          { label: 'Producto6 $6', value: 6 },
          { label: 'Producto7 $7', value: 7 },
          { label: 'Producto8 $8', value: 8 },
          { label: 'Producto9 $9', value: 9 },
          { label: 'Producto10 $10', value: 10 },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewForm: {
    position: 'relative',
    bottom: 40,
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
  }
});
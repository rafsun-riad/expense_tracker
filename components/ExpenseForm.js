import { View, Text, StyleSheet, Alert } from 'react-native';
import Input from './Input';
import { useState } from 'react';
import Button from './Button';

function ExpenseForm({ onCancel, onSubmit, submitButtonLabel }) {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const expenseData = {
    amount: +amount,
    date: new Date(date),
    description,
  };

  function handleSubmit() {
    const amountIsValid = !isNaN(amount) && amount > 0;
    const dateIsValid = date.toString() !== 'Invalid Date';
    const descriptionIsValid = description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || descriptionIsValid) {
      Alert.alert('Invalid input', 'Please check your input values.');
      return;
    }

    onSubmit(expenseData);
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: (enteredAmount) => {
              setAmount(enteredAmount);
            },
            value: amount,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: (enteredDate) => {
              setDate(enteredDate);
            },
            value: date,
          }}
        />
      </View>

      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: (enteredDescription) => {
            setDescription(enteredDescription);
          },
          value: description,
        }}
      />
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={() => handleSubmit()}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    textAlign: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});

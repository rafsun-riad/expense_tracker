import { useLayoutEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import IconButton from '../components/IconButton';
import ExpenseForm from '../components/ExpenseForm';
import { GlobalStyle } from '../constants/styles';

function ManageExpense({ route, navigation }) {
  const eidtedExpenseId = route.params?.expenseId;
  const isEditing = !!eidtedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [isEditing, navigation]);

  function handleDeleteExpense() {
    navigation.goBack();
  }

  function handleCancel() {
    navigation.goBack();
  }

  function handleConfirm(expenseData) {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={handleCancel}
        onSubmit={handleConfirm}
        submitButtonLabel={isEditing ? 'Update' : 'Add'}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            name="trash"
            color={GlobalStyle.color.error500}
            size={36}
            onPress={handleDeleteExpense}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyle.color.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyle.color.primary200,
    alignItems: 'center',
  },
});

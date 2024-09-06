import { View } from 'react-native';
import ExpensesSummury from './ExpensesSummury';
import ExpensesList from './ExpensesList';

function ExpensesOutput({ expenses }) {
  return (
    <View>
      <ExpensesSummury />
      <ExpensesList />
    </View>
  );
}

export default ExpensesOutput;

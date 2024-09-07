import { View } from 'react-native';
import ExpensesSummury from './ExpensesSummury';
import ExpensesList from './ExpensesList';

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummury expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList />
    </View>
  );
}

export default ExpensesOutput;

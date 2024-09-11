import { View, Text } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput';
import { getDateMinusDays } from '../utils/date';

function RecentExpenses() {
  const recentExpenses = '';
  const today = new Date();
  const date7DaysAgo = getDateMinusDays(today, 7);
  // expense.date > date7DaysAgo
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 days"
      fallBackText="No expenses registered for last 7 days"
    />
  );
}

export default RecentExpenses;

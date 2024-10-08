import { View, StyleSheet, Text } from 'react-native';
import ExpensesSummury from './ExpensesSummury';
import ExpensesList from './ExpensesList';
import { GlobalStyle } from '../constants/styles';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2021-12-19'),
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 89.29,
    date: new Date('2022-01-05'),
  },
  {
    id: 'e3',
    description: 'Some bananas',
    amount: 5.99,
    date: new Date('2021-12-01'),
  },
  {
    id: 'e4',
    description: 'A book',
    amount: 14.99,
    date: new Date('2022-02-19'),
  },
  {
    id: 'e5',
    description: 'Another book',
    amount: 18.59,
    date: new Date('2022-02-18'),
  },
];

function ExpensesOutput({ expenses, expensesPeriod, fallBackText }) {
  return (
    <View style={styles.container}>
      <ExpensesSummury expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      {expenses?.length > 0 ? (
        <ExpensesList expenses={DUMMY_EXPENSES} />
      ) : (
        <Text style={styles.infoText}>{fallBackText}</Text>
      )}
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyle.color.primary700,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32,
  },
});

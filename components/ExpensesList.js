import { FlatList } from 'react-native';
import ExpenseItem from './ExpenseItem';

function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={({ item }) => <ExpenseItem item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpensesList;

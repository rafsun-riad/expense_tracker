import ExpensesOutput from '../components/ExpensesOutput';

function AllExpenses() {
  return (
    <ExpensesOutput
      expensesPeriod="Total"
      fallBackText="No registered expenses found!"
    />
  );
}

export default AllExpenses;

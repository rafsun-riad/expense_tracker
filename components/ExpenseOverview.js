import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecentExpenses from '../screens/RecentExpenses';
import AllExpenses from '../screens/AllExpenses';

const BottomTabs = createBottomTabNavigator();

function ExpenseOverview() {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="RecentExpenses" component={RecentExpenses} />
      <BottomTabs.Screen name="AllExpenses" component={AllExpenses} />
    </BottomTabs.Navigator>
  );
}

export default ExpenseOverview;

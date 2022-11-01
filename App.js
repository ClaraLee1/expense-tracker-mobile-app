import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from './styles/helper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconButtons from "./components/IconButtons";
import AllExpenses from "./components/AllExpenses";
import EditExpense from './components/EditExpense';
import ImportantExpenses from './components/ImportantExpenses';
import AddExpense from './components/AddExpense';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: Colors.colors.darkpurple},
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: Colors.colors.darkpurple},
        tabBarActiveTintColor: Colors.colors.active,
        headerRight: () => (
          <IconButtons
            onPress={() => {
              navigation.navigate('AddExpense');
            }}
          />
        )
      })}
    >

      <Tab.Screen 
        name="All Expenses"
        component={AllExpenses}
        options={{
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="currency-usd" size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name="Important Expenses"
        component={ImportantExpenses}
        options={{
          tabBarLabel: 'Important Expenses',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="exclamation-thick" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: Colors.colors.darkpurple},
              headerTintColor: 'white'
            }}
          >
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="EditExpense" component={EditExpense} />
            <Stack.Screen name="AddExpense" component={AddExpense} />
          </Stack.Navigator>
        </NavigationContainer>
    </>
  );
}
import { View, StyleSheet } from 'react-native';
import ExpensesList from '../components/ExpenseList';
import { Colors } from '../styles/helper';
import { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { firestore } from '../firebase/firebase-setup';

function AllExpenses( { navigation } ) {
  async function onItemPress(expense) {
    navigation.navigate('EditExpense', {expense: expense});
  }
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
      const unsubscribe = onSnapshot(
        collection(firestore, 'expenses'),
        (querySnapshot) => {
          if (querySnapshot.empty) {
              setExpenses([]);
            return;
          }
          setExpenses(
            querySnapshot.docs.map((snapDoc) => {
              let data = snapDoc.data();
              data = { ...data, key: snapDoc.id };
              return data;
            })
          );
        }
      );
      return () => {
        unsubscribe();
      };
    }, []);

  return (
      <View style={styles.container}>
          <ExpensesList
              expenses={expenses}
              onItemPress={onItemPress}
          >
          </ExpensesList>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 0,
        backgroundColor: Colors.colors.background,
        flex: 1,
    },
});

export default AllExpenses;
import { View, Alert, StyleSheet, Text } from 'react-native';
import Buttons from './Buttons';
import { deleteFromDB, updateToDB } from '../firebase/firestore';
import { Colors } from '../styles/helper';

function EditExpense( { route, navigation } ) {

    async function onItemMark() {
        Alert.alert(
            'Important',
            'Are you sure you want to mark this as important?',
            [
                {
                    text: 'No',
                    style: 'cancel',
                },
                {
                    text: 'Yes',
                    onPress: async() => {
                        const expense = route.params.expense;
                        expense.important = true;
                        await updateToDB(expense);
                        navigation.navigate('All Expenses');
                    }
                }
            ]
        );
    }

    async function onItemUnmark() {
        Alert.alert(
            'Important',
            'Are you sure you want to remove this as important?',
            [
                {
                    text: 'No',
                    style: 'cancel',
                },
                {
                    text: 'Yes',
                    onPress: async() => {
                        const expense = route.params.expense;
                        expense.important = false;
                        await updateToDB(expense);
                        navigation.navigate('All Expenses');
                    }
                }
            ]
        );
    }

    async function onItemDelete() {
        Alert.alert(
            'Delete',
            'Are you sure you want to delete this?',
            [
                {
                    text: 'No',
                    style: 'cancel',
                },
                {
                    text: 'Yes',
                    onPress: async() => {
                        await deleteFromDB(route.params.expense.key);
                        navigation.navigate('All Expenses');
                    }
                }
            ]
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <Buttons
                    text={route.params.expense.important === false ? 'Mark as important' : 'Mark as unimportant'} 
                    onPress={route.params.expense.important === false ? onItemMark : onItemUnmark} 
                />
                <Text>{"\n"}</Text>
                <Buttons text={'Delete'} onPress={onItemDelete} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: Colors.colors.background,
        flex: 1,
    },
    buttons: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default EditExpense;
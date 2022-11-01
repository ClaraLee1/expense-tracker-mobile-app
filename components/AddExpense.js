import React from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { Colors } from '../styles/helper';
import Buttons from './Buttons';
import { writeToDB } from '../firebase/firestore';
import { useState } from 'react';

function AddExpense( {navigation} ) {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');

    function onCancel() {
        setAmount('');
        setDescription('');
    }

    async function onSubmit() {
        if (!amount || !description || isNaN(amount) || amount < 0) {
            Alert.alert(
                "Invalid input",
                "Please check your input values",
                [
                  {
                    text: "OK",
                  }
                ]
            );
            return;
        }
        const expense = { amount: amount, description: description, important: false };
        await writeToDB(expense);
        navigation.navigate('All Expenses');
    }

    return (
        <View style={styles.container}>
                <View style={styles.form}>
                    <Text style={styles.title}>Your Expense</Text>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>
                            Amount
                        </Text>
                        <TextInput 
                            style={styles.input} 
                            onChangeText={setAmount} 
                            value={amount} 
                            keyboardType="text"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>
                            Description
                        </Text>
                        <TextInput 
                            style={styles.inputDes} 
                            onChangeText={setDescription} 
                            value={description} 
                            multiline={true}
                        />
                    </View>
                    <View style={styles.buttons}>
                        <Buttons text={'Cancel'} onPress={onCancel} />
                        <Buttons text={'Submit'} onPress={onSubmit} />
                    </View>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        backgroundColor: Colors.colors.background,
        flex: 1,
    },
    form: {
        marginTop: 30
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8,
    },
    label: {
        fontSize: 12,
        marginBottom: 4,
    },
    input: {
        backgroundColor: Colors.colors.input,
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
    },
    inputDes: {
        minHeight: 100,
        textAlignVertical: 'top',
        backgroundColor: Colors.colors.input,
        padding: 6,
        borderRadius: 6,
        fontSize: 18
    }
});

export default AddExpense;
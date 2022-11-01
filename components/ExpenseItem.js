import {Text, View, StyleSheet} from 'react-native';
import { Colors } from '../styles/helper';

function ExpenseItem({ amount, description }) {
    return (
        <View style={styles.expenseItem}>
            <View>
                <Text style={styles.description}>
                    {description}
                </Text>
            </View>
            <View style={styles.amountContainer}>
                <Text style={styles.amount}>
                    {amount}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    expenseItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.colors.darkpurple,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 3,
        shadowColor: Colors.colors.slategray,
        shadowRadius: 4,
        textShadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.3
    },
    description: {
        fontSize: 16,
        fontWeight:'bold',
        color: Colors.colors.lavender
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        minWidth:80
    },
    amount: {
        color: Colors.colors.darkpurple,
        fontWeight: 'bold'
    },
    pressed: {
        opacity:0.75
    }
});

export default ExpenseItem;
import {Text, View, StyleSheet} from 'react-native';
import { Colors } from '../styles/helper';

function ExpenseItem({ amount, description }) {
    return (
        <View style={styles.itemBox}>
            <View>
                <Text style={styles.description}>
                    {description}
                </Text>
            </View>
            <View style={styles.amountBox}>
                <Text style={styles.amount}>
                    {amount}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    itemBox: {
        padding: 13,
        marginVertical: 5,
        backgroundColor: Colors.colors.darkpurple,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 3,
    },
    description: {
        fontSize: 18,
        color: 'white',
    },
    amountBox: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 4,
        minWidth:80
    },
    amount: {
        color: Colors.colors.darkpurple,
        fontWeight: 'bold'
    },
    pressed: {
        opacity:0.5
    }
});

export default ExpenseItem;
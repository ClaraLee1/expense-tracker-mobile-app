import { View, Pressable, Text, StyleSheet } from 'react-native';
import { Colors } from '../styles/helper';

function Buttons({ text, onPress}) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => pressed && styles.pressed}
            android_ripple={{ color: "white", foreground: true }}
        >
            <View style={styles.button}>
                <Text style={styles.buttonText}>
                    {text}
                </Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        padding: 10,
        backgroundColor: Colors.colors.darkpurple,
        minWidth: 150,
        marginHorizontal: 10
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity:0.5
    }
});

export default Buttons;
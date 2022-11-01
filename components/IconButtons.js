import { Pressable, View, StyleSheet } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

function IconButtons({onPress}) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => {
                return pressed && styles.pressed;
            }}
            android_ripple={{ color: "white", foreground: true }}
        >
            <View style={styles.buttonContainer}>
                <MaterialIcons name="add" size={25} color={"white"} />
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 24,
        padding: 8,
        marginHorizontal: 8,
        marginVertical: 2
    },
    pressed: {
        opacity: 0.5
    }
});

export default IconButtons;
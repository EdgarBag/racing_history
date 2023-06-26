import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        borderColor: 'yellow', borderWidth: 7,

    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 24,
        margin: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 2,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    label: {
        flex: 1,
        fontSize: Dimensions.get('screen').width * 0.041,
        fontWeight: 'bold',
        marginRight: 8,
    },
    text: {
        flex: 2,
        fontSize: 18,
    },
});

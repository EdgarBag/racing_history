import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff', width: '100%' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    wrapper: { flexDirection: 'row' },
    title: { backgroundColor: '#f6f8fa' },
    row: { height: 28, },
    text: { textAlign: 'center', color: 'black' },
    btn: { marginRight: 2, marginLeft: 4, backgroundColor: '#c8e1ff', borderRadius: 2 },
    btnText: { textAlign: 'center', color: 'black' },
    btnsBox: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 30 },
});
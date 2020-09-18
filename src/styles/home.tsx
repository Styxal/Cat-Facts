import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2b2b2b',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 40,
    },
    rowContainer: {
        flexDirection: 'row'
    },
    title: {
        paddingTop: 60,
        color: '#fff',
        fontSize: 50
    },
    button: {
        backgroundColor: "#c75aa3",
        padding: 20,
        margin: 10,
        borderRadius: 5,
    },
    buttonText: {
        color:'#fff',
        fontSize: 30
    },
    factBox: {
        color: '#666',
        backgroundColor: '#eaeaea',
        fontSize: 30,
        margin: 10,
        padding: 20,
        minHeight: 40,
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 5,
    },
    loader: {
        backgroundColor: '#666'
    }
});

import { StyleSheet } from 'react-native';

const colorBackgound = '#8257E5';
const colorBackgoundButtonPrimary = '#9871f5';
const colorBackgoundButtonSecondary = '#04d361';
const colorText = '#fff';
const colorTextSecondary = '#d4c2ff';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorBackgound,
        justifyContent: "center",
        padding: 40,
    },

    banner: {
        width: '100%',
        resizeMode: "contain",
    },

    title: {
        fontFamily: 'Poppins_400Regular',
        color: colorText,
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80,
    },

    titleBold: {
        fontFamily: 'Poppins_600SemiBold',
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between',
    },

    button: {
        height: 150,
        width: '48%',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between',
    },

    buttonPrimary: {
        backgroundColor: colorBackgoundButtonPrimary,
    },

    buttonSecondary: {
        backgroundColor: colorBackgoundButtonSecondary,
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: colorText,
        fontSize: 20,
    },

    totoalConnections: {
        fontFamily: 'Poppins_400Regular',
        color: colorTextSecondary,
        fontSize: 12,
        lineHeight: 20,
        maxHeight: 140,
        marginTop: 40,
    },
});

export default styles;
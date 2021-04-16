import React from 'react';
import { StyleSheet, View,Text, TouchableOpacity } from 'react-native';
import colors from "../utils/colors";

export default function Footer(props) {
    const {calculate} =props
    return (
        <View style={styles.footer}>
            <TouchableOpacity style={styles.button} onPress={calculate}>
                <Text style={styles.text}>CALCULAR</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        bottom:0,
        width: '90%',
        height:100,
        paddingHorizontal: 10,
        backgroundColor: colors.COLOR_PRIMARY,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems:'center',
    },
    text:{
        fontWeight:'bold',
        fontSize:18,
        color: '#ccc',
        textAlign: 'center',
    },
    button:{
        backgroundColor: colors.COLOR_OSCURO,
        padding: 16,
        borderRadius:20,
        width: '75%',
    }
});

import React, {Fragment} from 'react';
import { StyleSheet, Text,TextInput, View, Image } from 'react-native';
import colors from "../utils/colors";
const Separator = () => (
    <View style={styles.separator} />
);

export default function Result(props) {
    const {setResult} = props
    return (

        <View style={styles.resumen}>
            <View style={styles.rowInput}>
                <Text style={styles.title}>Metabolismo Basal: </Text>
                <Text style={styles.result}>{setResult.basalMetabolism ? setResult.basalMetabolism + ' Kcal': ' '}</Text>
                <Separator/>
            </View>
            <View style={styles.rowInput}>
                <Text style={styles.title}> Calorías necesarias para mantener el peso: </Text>
                <Text style={styles.result}> {setResult.caloriesNeededMaintainWeight ? setResult.caloriesNeededMaintainWeight + ' KCal': ' '}</Text>
                <Separator/>
            </View>
            <View style={styles.rowInput}>
                <Text style={styles.title}>Calorías para adelgazar: </Text>
                <Text style={styles.result}> {setResult.CaloriesLoseWeight ? setResult.CaloriesLoseWeight + ' Kcal': ' '}</Text>
                <Separator/>
            </View>
            <View style={styles.rowInput}>
                <Text style={styles.title}> Calorías para subir de peso:  </Text>
                <Text style={styles.result}> {setResult.CaloriesGainWeight ? setResult.CaloriesGainWeight + ' Kcal': ' '}</Text>
                <Separator/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    resumen: {
        bottom:0,
        width: '90%',
        paddingHorizontal: 10,
        backgroundColor: colors.COLOR_PRIMARY,
        borderRadius: 20,
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#ccc',
        fontSize: 18,
        marginTop:10,
        marginBottom:10,
        width:'70%',
    },
    result: {
        color:colors.COLOR_OSCURO,
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 18,
        marginTop:10,
        width:'70%',
        marginBottom:10,
    },
    separator: {
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
        width:'30%',
        marginLeft:200,
    },
    rowInput: {
        flexDirection: "row",
    },
});

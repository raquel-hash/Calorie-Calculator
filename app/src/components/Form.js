import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import colors from "../utils/colors";
import RNPickerSelect from "react-native-picker-select";
import RadioButtonRN from "radio-buttons-react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Form(props) {
    console.log("Props", props);
    const {setgender,setWeight, setHeight,setAge, setActivityLevel}=props
    const data = [
        {
            label: 'Masculino'
        },
        {
            label: 'Femenino'
        }
    ];
    return (
        <View style={styles.form}>
            <View style={styles.rowInput}>
                <Text style={styles.text}>Genero: </Text>
                <RadioButtonRN
                    data={data}
                    initial={1}
                    textColor={'#ccc'}
                    box={false}
                    selectedBtn={(e)=>  setgender(e)}
                    circleSize={10}
                    style={styles.inputPersonalizado}
                    icon={
                        <Icon
                            name="user"
                            size={20}
                            color="#ccc"
                        />
                    }
                />
            </View >

            <View style={styles.rowInput}>
                <Text style={styles.text}>Peso: </Text>
                <Text style={styles.text}>Altura: </Text>
                <Text style={styles.text}>Edad: </Text>
            </View >
            <View style={styles.rowInput}>
                <TextInput
                    style={styles.input}
                    keyboardType={'numeric'}
                    maxLength={3}
                    placeholder={'Kg'}
                    onChange={(e) => setWeight(e.nativeEvent.text)}
                />
                <TextInput
                    style={styles.input}
                    keyboardType={'numeric'}
                    maxLength={3}
                    placeholder={'Cm'}
                    onChange={(e) => setHeight(e.nativeEvent.text)}
                />
                <TextInput
                    style={[styles.input, styles.inputPersonalizado]}
                    keyboardType={'numeric'}
                    maxLength={2}
                    placeholder={'años '}
                    onChange={(e) => setAge(e.nativeEvent.text)}
                />
            </View >

             <RNPickerSelect
                onValueChange={(value) => setActivityLevel(value)}
                items={[
                    { label: 'Sedentario', value: '1.2' },
                    { label: 'Actividad Ligera', value: '1.375' },
                    { label: 'Actividad Moderada', value: '1.55' },
                    { label: 'Actividad Intensa', value: '1.725' },
                    { label: 'Actividad Muy Intensa', value: '1.9' },
                ]}
                placeholder={{label:'seleccionar item', color:'#ccc' }}
                style={pickerStyle}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        bottom:0,
        width: '90%',
        paddingHorizontal: 10,
        backgroundColor: colors.COLOR_PRIMARY,
        borderRadius: 20,
        justifyContent: 'center',
    },
    input:{
        height: 50,
        backgroundColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        width:'30%',
        marginRight: 5,
        marginLeft: 5,
        marginBottom: 10,
        marginTop:2,
        color: '#000',
        paddingHorizontal: 20,
    },
    inputPersonalizado: {
        width: '30%',
        marginLeft: 5,
    },
    rowInput: {
        flexDirection: "row",
    },
    text:{
        width:'30%',
        marginRight: 5,
        marginTop:10,
        color: '#ccc',
        paddingHorizontal: 20,
        fontSize: 16,
    }
})
const pickerStyle = {
    inputAndroid: {
        color: '#ccc',
    },
    underline: { borderTopWidth: 0 },
    icon: {
        position: 'absolute',
        backgroundColor: 'transparent',
        borderTopWidth: 5,
        borderTopColor: '#00000099',
        borderRightWidth: 5,
        borderRightColor: 'transparent',
        borderLeftWidth: 5,
        borderLeftColor: 'transparent',
        borderWidth: 1,
        color:'#000',
        width: 0,
        height: 0,
        top: 20,
        right: 15,
    },
};

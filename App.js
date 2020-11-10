import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Form from './app/src/components/Form'
import Result from './app/src/components/Result';
import colors from "./app/src/utils/colors";
import Calculate from "./app/src/components/footer";

export default function App() {
  const [gender,setGender] =useState(null);
  const [weight, setWeight]=useState(null);
  const [height, setHeight]=useState(null);
  const [age,setAge]=useState(null);
  const [activityLevel, setActivityLevel]=useState(null)
  const [result,setResult]=useState({
    basalMetabolism:null,
    caloriesNeededMaintainWeight:null,
    CaloriesLoseWeight:null,
    CaloriesGainWeight:null,
  })
  const calculate =()=>{
    let resultTBM;
    if(gender.label=='Femenino'){
      resultTBM =  655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
    }else{
      resultTBM=  66 + (13.7 * weight) + (5 * height) - (6.8 * age)
    }
    const resultMaintainWeight= resultTBM*activityLevel;
    const resultLoseWeight=resultMaintainWeight*0.85;
    const resultGainWeight=resultMaintainWeight*1.15;
    setResult({
      basalMetabolism:resultTBM.toFixed(0).replace('.',','),
      caloriesNeededMaintainWeight:resultMaintainWeight.toFixed(0).replace('.',','),
      CaloriesLoseWeight:resultLoseWeight.toFixed(0).replace('.',','),
      CaloriesGainWeight:resultGainWeight.toFixed(0).replace('.',','),
    })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CALCULADORA DE CALORIAS</Text>
      <Form setgender={setGender} setWeight={setWeight} setHeight={setHeight} setAge={setAge} setActivityLevel={setActivityLevel}/>
      <Result setResult={result}/>
      <Calculate calculate={calculate}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.COLOR_OSCURO ,
    alignItems: 'center',
    justifyContent: 'space-around',

  },
    text:{
      color:'#ccc',
      marginTop:20,
      fontSize:35,
      fontWeight:'bold',
      textAlign:'center'
    }
});

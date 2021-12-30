import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () =>{

  const [numero, setNumero] = useState(0);

function handleNumero(){
const novo_numero =  Math.floor(Math.random() * 100);

setNumero(novo_numero)
}

  return (
    <View style={style.container}>
      <Text style={style.Text}>{numero}</Text>
      <TouchableOpacity onPress={handleNumero} style={style.Button}>
        <Text  style={style.Text2}>Gerar número</Text>
      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    backgroundColor: '#BB1C2A',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Button:{
    backgroundColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    width: '70%', //Largura
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  Text:{
    color: '#FFFFFF',
    fontSize: 50
  },
  Text2:{
    fontWeight: 'bold',
    fontSize: 15
  }
})


export default App
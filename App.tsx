import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {Platform, View } from 'react-native';
import { Home } from './src/screems/Home';
import { Welcome } from './src/Welcome';

export default function App() {
  const [name, setName] = useState('') //Guarda a informação necesária

  const handleClearName = () => {
    setName('')
  }

  return (

    <View
      style={{
        paddingTop: `${Platform.OS === 'android' ? '30%' : '15%'}`,
        paddingHorizontal: `${Platform.OS === 'android' ? '5%' : '4%'}`
      }}
    >
      <StatusBar backgroundColor='#CCC' style='auto' />

      {name === '' && <Home onSend={setName} />}
      
      {name !== '' && <Welcome 
      Username={name} 
      onClear={handleClearName}
      
      />}
    </View>
  );
}

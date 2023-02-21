import React, { useState } from 'react'
import { View, TextInput, Text, TouchableOpacity, Platform } from 'react-native'

type Props = {
  onSend: (str: string) => void
}

export const Home = ({ onSend }: Props) => {
  const [textName, setTextName] = useState<string>('') //Serve apenas para ativar o input


  const handleSendName = () => {
    onSend(textName)
    setTextName('')
  }
  return (
    <View>
      <View>
        <Text
          style={{
            textTransform: 'capitalize',
            fontSize: 23,
            marginBottom: `${Platform.OS === 'android' ? '5%' : '3%'}`,
          }}
        >
          Welcome, What's your name?
        </Text>
      </View>

      <TextInput
        value={textName}
        onChangeText={(e) => setTextName(e)}
        style={{
          height: 42,
          backgroundColor: '#CCC',
          borderRadius: 4,
          marginTop: 5,
          padding: 8
        }}
        placeholder='enter your name'
      />

      <TouchableOpacity
        onPress={handleSendName}
        style={{
          borderRadius: 4,
          backgroundColor: "#7159C1",
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: `${Platform.OS === 'android' ? '8%' : '4%'}`,
          height: 42
        }}
      >
        <Text
          style={{
            color: '#FFF'
          }}
        >
          Send Name
        </Text>
      </TouchableOpacity>
    </View>
  )
}

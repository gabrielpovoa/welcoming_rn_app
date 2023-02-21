import { Image, Platform,Text,TouchableOpacity, View } from 'react-native';

type Props = {
    Username:string,
    onClear: () => void,
}

export const Welcome = ({Username, onClear}:Props) => {
    return (
        <View>
            <Text
                style={{
                    textAlign: 'center',
                    fontWeight: `${Platform.OS === 'android' ? '700' : 'bold'}`,
                    fontSize: 25,
                }}
            >
                Welcome, {Username}
            </Text>

            <View
                style={{
                    alignSelf: 'center',
                    width: '100%',
                    height: '60%',
                    alignItems: 'center',
                    marginVertical: `${Platform.OS === 'android' ? '5%' : '8%'}`,
                }}
            >
                <Image
                    style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        borderRadius: 15,
                    }}
                    source={require('../../assets/atronaut.jpg')}
                />
            </View>

            <TouchableOpacity
                style={{
                    borderRadius: 4,
                    backgroundColor: "#7159C1",
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginVertical: `${Platform.OS === 'android' ? '8%' : '4%'}`,
                    height: 42
                }}
                onPress={onClear}
            >
                <Text style={{ color: '#FFF' }}> I'm Not {Username}</Text>
            </TouchableOpacity>
        </View>
    )
}

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Input } from './src/components/Input';

export default function App() {
  return (
    <View style={styles.container}>
      <Input
        placeholder="Escribe algo..."
        value=""
        onChangeText={() => {}}
      />
    </View>
  );
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
    

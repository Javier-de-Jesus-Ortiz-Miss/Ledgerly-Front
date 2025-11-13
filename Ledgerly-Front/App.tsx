import { StyleSheet, Text, View } from 'react-native';
import { AuthInput } from './src/components/AuthInput';
import { useState } from 'react';
import MailIcon from './assets/icons/mail.svg';
import { Button } from './src/components/Button';

export default function App() {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <AuthInput
        placeholder="Correo"
        value={email}
        onChangeText={setEmail}
        Icon={MailIcon}
        iconPosition="left"
      />
      <Button
        title="Iniciar sesión"
        onPress={() => {}}
      />
      <Button
        title="Registrarse"
        onPress={() => {}}
        style={{ backgroundColor: '#fff', borderWidth: 2, borderColor: '#661AE6' }}
        textStyle={{ color: '#661AE6' }}
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

/*
import { StyleSheet, Text, View } from 'react-native';
import { AuthInput } from './src/components/AuthInput';

export default function App() {
  return (
    <View style={styles.container}>
      <AuthInput
        placeholder="correo electrónico"
        value=''
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
*/

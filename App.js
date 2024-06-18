import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { InsereSenha } from './banco/insere_senha';
import { TodasSenhas } from './banco/mostrar_senhas';

export default function App() {
  return (
    <View style={styles.container}>
      <InsereSenha/>
      <TodasSenhas/>
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

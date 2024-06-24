import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { InsereSenha } from './banco/insere_senha';
import { TodasSenhas } from './banco/mostrar_senhas';
import { DeleteSenha } from './banco/delete_senha';
import { AtualizarSenha } from './banco/atualizar_senha';

export default function App() {
  return (
    <View style={styles.container}>
      <InsereSenha/>
      <DeleteSenha/>
      <AtualizarSenha/>
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

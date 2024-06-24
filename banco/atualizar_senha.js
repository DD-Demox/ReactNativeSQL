import { useState } from "react";
import { Modal, Text, View ,TextInput,Button, StyleSheet, Alert} from "react-native";
import { create } from "./create_db";

export function AtualizarSenha(){
    const [modal,setModal]= useState(false)
    const [id,setId]=useState(0)
    const [senha,setSenha]=useState('')

    const abrirModal = async()=>{
        try {
            db = await create();
            let result = await db.getFirstAsync('SELECT senha FROM senhas where id = $value',{ $value: id })
            if(result){
                setSenha(result.senha)
                setModal(true)
            }else{
                Alert.alert(
                    'Error',
                    'Id invalido',
                    [
                        {
                            text: 'Ok'
                        },
                    ],
                    { cancelable: false }
                )
            }
            
            
        } catch (error) {
            console.log(error)
        }
    }
    const atualizaSenha = async()=>{
        try {
            db = await create();
            let result = await await db.runAsync('UPDATE senhas SET senha = ? WHERE id = ?', [senha, id])
            console.log(result)
            if (result.changes > 0) {
                Alert.alert(
                    'Sucesso',
                    'Senha Atualizada',
                    [
                        {
                            text: 'Ok'
                        },
                    ],
                    { cancelable: false }
                );
                setModal(false)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return(

    <View style={{ flex: 0.3, width: "80%" }}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text>{id}</Text>
                    <Text>Senha</Text>
                    <TextInput
                        value={senha}
                        onChangeText={
                            senhaT => setSenha(senhaT)
                        }
                        style={{ padding: 2 , borderColor:"black", borderWidth:2}}
                    />
                    <Button title="Atualiza" onPress={() => atualizaSenha()} />
                    <Button title="Sair" onPress={() => setModal(false)} />
                </View>
                
            </View>
        </Modal>
        <TextInput
            placeholder="Entre com o ID da senha para atualiza-la"
            onChangeText={
                idT => setId(idT)
            }
            style={{ padding: 2 }}
        />
        <Button title="Atualizar" onPress={() => abrirModal(true)} />
    </View>
    )
    
}
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    }
  });
import { Alert, Button, TextInput, View } from "react-native";
import { create } from "./create_db"
import { useState } from "react";

export function DeleteSenha(){
    const [id, setId] = useState(0);
    const deletarSenha = async() =>{
        try {
            db = await create();
            let result = await db.runAsync('DELETE FROM senhas WHERE id = $value', { $value: id });
            console.log(result)
            if (result.changes > 0) {
                Alert.alert(
                    'Sucesso',
                    'Senha Deletada',
                    [
                        {
                            text: 'Ok'
                        },
                    ],
                    { cancelable: false }
                );
            } else alert('Id não válido');
        } catch (error) {
            console.log(error)
        }
    }

    return(
    <View style={{ flex: 0.3, width: "80%" }}>
        <TextInput
            placeholder="Entre com o ID da senha para deleta-la"
            onChangeText={
                idT => setId(idT)
            }
            style={{ padding: 2 }}
        />
        <Button title="Delete" onPress={() => deletarSenha()} />
    </View>
    );
}
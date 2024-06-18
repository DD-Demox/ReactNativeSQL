import { View, Button, Alert } from "react-native";
import { create } from "./create_db";

export function InsereSenha(){

    const insert = async()=>{
        
        try{
            db = await create();
            let senha = btoa(Math.random().toString()).slice(3,11)
            let result = await db.runAsync(`INSERT INTO senhas (senha) VALUES (?);`, senha);
            
            if (result.changes > 0) {
                Alert.alert(
                    'Sucesso',
                    'Senha inserida: '+senha,
                    [
                        {
                            text: 'Ok'
                        },
                    ],
                    { cancelable: false }
                );
            } else alert('Error criando senha');
        } catch (error) {
            console.log(error);
        }
        
    }
    return(
        <View style={{ backgroundColor: 'white', marginTop: 70, width: "80%" }}>
            <Button title="Criar senha" onPress={() => insert()} />
        </View>
    )
}
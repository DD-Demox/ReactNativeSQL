import React, { useState } from 'react';
import { Alert, Button, FlatList, Text, View, StyleSheet } from 'react-native';
import { create } from './create_db';


export function TodasSenhas(){
    let [listaSenha, setListaSenha] = useState([]);

    const getAllSenhas = async () => {
       try{
            db = await create();
            let allRows = await db.getAllAsync('SELECT * FROM senhas');
            setListaSenha(allRows);
            console.log("[LOG] Data retrieved from tables senhas");
            if(allRows.length==0){
                Alert.alert(
                    'Aviso',
                    'Nenhuma senha cadastrada',
                    [
                        {
                            text: 'Ok'
                        },
                    ],
                    { cancelable: false }
                );
            }
        } catch (error) {
            console.log(error);
        }
    }

    let listItemView = (item) => {
        return (
            <View
                key={item.id}
                style={{ backgroundColor: '#EEE', marginTop: 20, padding: 30, borderRadius: 10 }}>
                <Text style={styles.textheader}>Código</Text>
                <Text style={styles.textbottom}>{item.id}</Text>

                <Text style={styles.textheader}>Senha</Text>
                <Text style={styles.textbottom}>{item.senha}</Text>

            </View>
        );
    };

    return (
        <View style={{ flex: 1, width: "80%", marginTop: 10 }}>
            <Button title="Lista de Senha" onPress={() => getAllSenhas()} />
            <View style={{ flex: 1, backgroundColor: 'white'}}>
                <View style={{ flex: 1 }}>
                    <FlatList
                        style={{ marginTop: 30 }}
                        contentContainerStyle={{ paddingHorizontal: 20 }}
                        data={listaSenha}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => listItemView(item)}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    textheader: {
        color: '#111',
        fontSize: 12,
        fontWeight: '700',

    },
    textbottom: {
        color: '#111',
        fontSize: 18,
    },
});
import React, { useState } from "react";
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDvRMB7XZOornuvB6d2mHAQlUkLExk1EZ0",
    authDomain: "secprocess2.firebaseapp.com",
    projectId: "secprocess2",
    storageBucket: "secprocess2.appspot.com",
    messagingSenderId: "599775011618",
    appId: "1:599775011618:web:2b989dcb1ef1c431b0fb7b"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default props => {
    const [nome, setNome] = useState('');
    const [dtNascimento, setdtNascimneto] = useState('');
    const [Filiacao, setFiliacao] = useState('');
    const [AnoConclusao, setAnoConclusao] = useState('');
    const [Turno, setTurno] = useState('');
    const [Informacao, setInformacao] = useState('');
const cadastroFirebase = async () => {
try {
    const docRef = await addDoc(collection(db, "Pedidos"), {
        Nome: nome,
        dtNascimento: dtNascimento,
        Filiacao: Filiacao,
        AnoConclusao: AnoConclusao,
        Turno: Turno,
        Informacao:Informacao,

      });
    
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}    

    


    return (
        <View style={styles.container}>
           
            <View style={styles.form}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={styles.input}
                    value={nome}
                    onChangeText={setNome}
                    placeholder="Nome"
                    
                />
                <Text style={styles.label}>Data de nascimento</Text>
                <TextInput
                    style={styles.input}
                    value={dtNascimento}
                    onChangeText={setdtNascimneto}
                    placeholder="Data de nascimento"
                    
                />
                <Text style={styles.label}>Nome da mãe</Text>
                <TextInput
                    style={styles.input}
                    value={Filiacao}
                    onChangeText={setFiliacao}
                    placeholder="Nome da mãe"
                    
                />
                <Text style={styles.label}>Ano de Conclusão</Text>
                <TextInput
                    style={styles.input}
                    value={AnoConclusao}
                    onChangeText={setAnoConclusao}
                    placeholder="Ano de Conclusão"
                    
                />
                <Text style={styles.label}>Turno</Text>
                <TextInput
                    style={styles.input}
                    value={Turno}
                    onChangeText={setTurno}
                    placeholder="Turno"
                    
                />
                 <Text style={styles.label}>Observações</Text>
                <TextInput
                    style={styles.input}
                    value={Informacao}
                    onChangeText={setInformacao}
                    placeholder="Observações"
                    
                />
                <View style={styles.containerFom}>
                    <TouchableOpacity style={styles.button} onPress={cadastroFirebase}>
                        <Text style={styles.buttonText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
               

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        flex:1,
        width: '90%',
    },
    label: {
        marginTop: 20,
    },
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        fontSize: 18,
    },
    
    containerFom: {
        flex:1,
        paddingStart: '5%',
        paddingEnd: '5%',

    },

    button:{
        position: 'absolute',
        backgroundColor: '#2960da',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    buttonText:{
        fontSize: 18,
        color: '#ffff',
        fontWeight: 'bold',
    },
});
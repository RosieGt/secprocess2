import React, { useState } from "react";
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';


export default props => {

    


    return (
        <View style={styles.container}>
           
            <View style={styles.form}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    
                />
                <Text style={styles.label}>Data de nascimento</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Data de nascimento"
                    
                />
                <Text style={styles.label}>Nome da mãe</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nome da mãe"
                    
                />
                <Text style={styles.label}>Ano de Conclusão</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ano de Conclusão"
                    
                />
                <Text style={styles.label}>Turno</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Turno"
                    
                />
                 <Text style={styles.label}>Observações</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Observações"
                    
                />

                
            </View>
            <View style={styles.containerFom}>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('login')}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
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
        backgroundColor: '#228B22',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText:{
        fontSize: 18,
        color: '#ffff',
        fontWeight: 'bold',
    },
});
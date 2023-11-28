import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default props => {
    const [podologo, setPodogo] = useState({})
    const { id } = props.route.params

    fetch(`https://rosiecruz13.pythonanywhere.com/api/podoguia/${id}`)
        .then(data => data.json())
        .then(json => setPodogo(json))
        .catch(error => console.warn(error))

    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Image
                    source={{ uri: podologo.avatar }}
                    style={styles.avatar} />
                <Text style={styles.name}>{podologo.nome}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoLabel}>Resumo:</Text>
                <Text style={styles.infoValue}>{podologo.info}</Text>
            </View>
            
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('login')}>
                    <Text style={styles.buttonText}>Editar</Text>
                </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    infoContainer: {
        marginTop: 20,
    },
    infoLabel: {
        fontWeight: 'bold',
    },
    infoValue: {
        marginTop: 5,
    },
    containerFom: {
        flex:1,
        backgroundColor: '#ffff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },    
    button:{
        position: 'absolute',
        backgroundColor: '#0000ff',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '30%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 18,
        color: '#ffff',
        fontWeight: 'bold'
    },

});
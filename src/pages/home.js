import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default props => {
    return(
        <View style={styles.container }>
            <View style={styles.containerLogo}>
                <Image
                    source={require('../assets/logo_secprocess.png')}
                    style={{ width: '70%'}}
                    resizeMode="contain" />
            </View>
            <View style={styles.containerFom}>
            <Text style={styles.title}>Bem-vindos</Text>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('login')}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#ffff',
    },
    containerLogo:{
        flex: 2,
        backgroundColor: '#ffff',
        justifyContent: 'center',
        alignItems:'center',
    },
    containerFom: {
        flex:1,
        backgroundColor: '#0000ff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
        alignItems:'center',
    },
    title:{
        fontSize: 20,
        color: '#ffff',
        fontWeight: 'bold',
        marginTop: 35,
        marginBottom: 12,
    },
    button:{
        position: 'absolute',
        backgroundColor: '#ffff',
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
        color: '#0000ff',
        fontWeight: 'bold',
    },

})
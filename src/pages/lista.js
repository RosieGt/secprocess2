import React, { useState } from "react";
import { Text, StyleSheet, View, FlatList, Image, TextInput, TouchableOpacity } from "react-native";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

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
    const [pedido, setPedido] = useState([]);
    const listaFirebase = async () => {
    const querySnapshot = await getDocs(collection(db, "Pedidos"));
    querySnapshot.forEach((doc) => {
    list.push({...doc.data(), id: doc.id}), setPedido(list);
    console.log(`${doc.id} => ${doc.data()}`);

}, [])  

    const ProductCard = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => { props.navigation.navigate('detalhes', { id: item.id }) }}>
                <View style={styles.productCard}>
                    
                    <View style={styles.productInfo}>
                        <Text style={styles.productName}>{item.nome}</Text>
                        <Text style={styles.productDescription}>{item.nome}</Text>
                    </View>
                </View >
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <TextInput style={styles.search} placeholder="Pesquise aqui..." />
            <FlatList
                data={pedido}
                style={styles.productList}
                renderItem={ProductCard}
                keyExtractor={(item) => item.id.data()}
                contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}
            />
        </View>
    )
}}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        paddingTop: 40,
    },
    productList: {
        flex: 2,
        paddingTop: 5,
    },
    productCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        padding: 16,
        marginBottom: 16,
    },
    productImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 16,
    },
    productInfo: {
        flex: 1,
        marginRight: 16,
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    productDescription: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
    },
    productPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4caf50',
    },
    productPriceText: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#666',
    },
    productAmount: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    amountButton: {
        width: 30,
        height: 30,
        backgroundColor: '#ffa726',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    amountButtonText: {
        color: '#fff',
        fontSize: 18,
    },
    amountText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 16,
    },
    continueButton: {
        position: 'absolute',
        bottom: 16,
        left: 16,
        right: 16,
        backgroundColor: '#4caf50',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
    },
    continueButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    search: {
        marginTop: 5,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor:'#0000ff',
        borderRadius: 10,
      },
});
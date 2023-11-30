import React from "react";
import { StatusBar } from "react-native";


import { NavigationContainer } from '@react-navigation/native'



import { createNativeStackNavigator } from "@react-navigation/native-stack";

import home from './src/pages/home'
import lista from './src/pages/lista'
import detalhes from './src/pages/detalhes'
import login from './src/pages/login'
import hall from './src/pages/hall'
import cadastro from "./src/pages/cadastro";


const Stack = createNativeStackNavigator();

export default App => (

    <NavigationContainer>
        <StatusBar backgroundColor={"#0000ff"} barStyle='light-content' />
        
        <Stack.Navigator initialRouteName='home'>
            <Stack.Screen name='home' component={home} options={{ headerShown: false }} />
            <Stack.Screen name='lista' component={lista} 
            options={()=> {
                return { title: "Pedidos"}
            }}/>
            <Stack.Screen name='detalhes' component={detalhes} 
             options={()=> {
                return { title: "Informações"}
            }} />
            <Stack.Screen name='login' component={login} 
            options={()=> {
                return { title: "Login"}
            }} />
            
             <Stack.Screen name='cadastro' component={cadastro} 
            options={()=> {
                return { title: "Cadastro"}
            }} />
            
            <Stack.Screen name='hall' component={hall} 
            options={()=> {
                return { title: "Acesse"}
            }} />
          
            
        </Stack.Navigator>
    </NavigationContainer>
)

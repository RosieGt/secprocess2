import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

export default props => {

  return (
    <View style={styles.container}>
      <View style={styles.fisthbox}>
      <Text style={styles.title}>Secprocess</Text>

      </View>

      <View style={styles.imgbox}>
        <TouchableOpacity style={styles.menuBox} onPress={() => { props.navigation.navigate('lista')}}>
          <Image
            style={styles.icon}
            source={require( '../assets/logo_secprocess.png' )}
          />
          <Text style={styles.info}>Pedidos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuBox} onPress={() => { props.navigation.navigate('cadastro')}}>
          <Image
            style={styles.icon}
            source={require('../assets/logo_secprocess.png' )}
          />
          <Text style={styles.info}>Cadastro</Text>
        </TouchableOpacity>

        </View>

        <View style={styles.containerLogo}>
                <Image
                    source={require('../assets/logo_secprocess.png')}
                    style={{ width: '50%'}}
                    resizeMode="contain" />
            </View>
    </View>  
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ffff',
    
  },
  fisthbox:{
    flex:1,
    backgroundColor: '#0000ff',
    alignItems:'center',
  },

  imgbox:{
    flex: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingStart: '5%',
    paddingEnd: '5%',
    marginTop: 50,
    justifyContent: 'center',
  },
  menuBox: {
    backgroundColor: '#DCDCDC',
    width: 130,
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12,
    paddingTop: 40,
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignContent: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  info: {
    fontSize: 22,
    color: '#696969',
  },
  title:{
    fontSize: 20,
    color: '#ffff',
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 12,
    alignContent:'center',
  },
  containerLogo:{
    flex: 2,
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems:'center',
},
})
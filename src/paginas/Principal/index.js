import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';
import estilos from './estilos';
import { buscaUsuario } from '../../servicos/requisicoes/usuarios';


export default function Principal({ navigation }) {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [usuario, setUsuario] = useState({});

  const busca = async () => {
    const resultado = await buscaUsuario();
    console.log(resultado); 
  };

  return (
    <ScrollView>
      <View style={estilos.container}>
        <>
          <View style={estilos.fundo} />
          <View style={estilos.imagemArea}>
            <Image
              source={{
                uri: 'https://avatars.githubusercontent.com/u/37425086?s=96&v=4',
              }}
              style={estilos.imagem}
            />
          </View>
          <Text style={estilos.textoNome}>Nome do usuario</Text>
          <Text style={estilos.textoEmail}>Email do usuario</Text>
          <View style={estilos.seguidoresArea}>
            <View style={estilos.seguidores}>
              <Text style={estilos.seguidoresNumero}>30</Text>
              <Text style={estilos.seguidoresTexto}>Seguidores</Text>
            </View>
            <View style={estilos.seguidores}>
              <Text style={estilos.seguidoresNumero}>40</Text>
              <Text style={estilos.seguidoresTexto}>Seguindo</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Repositorios')}>
            <Text style={estilos.repositorios}>Ver os repositórios</Text>
          </TouchableOpacity>
        </>

        <TextInput
          placeholder="Busque por um usuário"
          autoCapitalize="none"
          style={estilos.entrada}
        />

        <TouchableOpacity style={estilos.botao}>
          <Text style={estilos.textoBotao} onPress={busca}>Buscar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import estilos from './estilos';
import { salvarRepositorio, deletarRepositorioDoUsuario } from '../../servicos/requisicoes/repositorios';

export default function InfoRepositorio({ route, navigation }) {
  const [nome, setNome] = useState(route.params.item.name);
  const [data, setData] = useState(route.params.item.data);

  const salvar = async () => {
    const resultado = await salvarRepositorio(
      route.params.item.postId,
      nome,
      data,
      route.params.item.id,
    );

    if (resultado === 'success') {
      Alert.alert('Repositório atualizado!');
      navigation.goBack();
    } else {
      Alert.alert(`Ocorreu um erro!`);
    }
  };

  const deletar = async () => {
    const resultado = await deletarRepositorioDoUsuario(
      route.params.item.id,
    );

    if (resultado === 'success') {
      Alert.alert('Repositório deletado!');
      navigation.goBack();
    } else {
      Alert.alert(`Ocorreu um erro!`);
    }
  };

  return (
    <View style={estilos.container}>
      <TextInput
        placeholder="Nome do repositório"
        autoCapitalize="none"
        style={estilos.entrada}
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        placeholder="Data de criação"
        autoCapitalize="none"
        style={estilos.entrada}
        value={data}
        onChangeText={setData}
      />
      <TouchableOpacity style={estilos.botao}>
        <Text style={estilos.textoBotao} onPress={salvar}>
          Salvar
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[estilos.botao, { backgroundColor: '#DD2B2B', marginTop: 10 }]} onPress={deletar}>
        <Text style={estilos.textoBotao}>Deletar</Text>
      </TouchableOpacity>
    </View>
  );
}

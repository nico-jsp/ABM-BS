import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput, ScrollView, Image } from 'react-native';
import Constants from 'expo-constants';
import {customStyle} from './style';

//Nico mascatuerca
export default function App() {
  return (
    <View style={customStyle.container}>
      <View style={customStyle.subContainer}>
        <Text style={customStyle.Title}>ABM-BS</Text>
      </View>
      <Text style={customStyle.GeneralText}>Nombre {'\n'}</Text>
      <TextInput
        style={customStyle.InputText}
        defaultValue="Nombre"
      />
      <Text style={customStyle.GeneralText}>Apellido {'\n'}</Text>
      <TextInput
        style={customStyle.InputText}
        defaultValue="Apellido"
      />
      <Text style={customStyle.GeneralText}>Documento {'\n'}</Text>
      <TextInput
        style={customStyle.InputText}
        defaultValue="Documento"
      />
      <Text style={customStyle.GeneralText}>Email {'\n'}</Text>
      <TextInput
        style={customStyle.InputText}
        defaultValue="correo@electronico.com"
      />
      <Button
          style={customStyle.StyleButton}
          icon="camera"
          title="touch me"
          onPress={() => Alert.alert('Oh yeah')}
        />
    </View>
  );
}

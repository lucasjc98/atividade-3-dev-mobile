import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagem: require('./img/biscoito.png'),
      frase: '',
    };

    this.quebrar = this.quebrar.bind(this);
  }

  quebrar() {
    let frases = [
      '"Nem todas as tempestades vêm para atrapalhar a sua vida. Algumas vêm para limpar seu caminho."',
      '"A persistência realiza o impossível."',
      '"A persistência é o caminho do êxito."',
      '"Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre."',
      '"A verdadeira motivação vem de realização, desenvolvimento pessoal, satisfação no trabalho e reconhecimento."',
    ];

    this.setState({
      imagem: require('./img/biscoitoQuebrado.png'),
      frase: frases[Math.floor(Math.random() * 5)],
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.imagem} source={this.state.imagem} />
        <Text style={styles.texto}> {this.state.frase} </Text>
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.quebrar}>
            <Text style={styles.btnTexto}> Quebrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imagem: {
    width: 500,
    height: 500,
    resizeMode: 'center',
    marginBottom: 50,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginBottom: 200,
  },
  texto: {
    marginTop: -160,
    marginLeft: 50,
    marginRight: 50,
    color: '#F7411A',
    fontSize: 20,
    fontWeight: '700',
    fontStyle: 'italic',
    textAlign: 'justify',
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F7411A',
    height: 50,
    margin: 17,
    borderRadius: 10,
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 80,
    height: 40,
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default App;

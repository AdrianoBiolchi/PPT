//import liraries
import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import Topo from './src/components/topo';
import Icone from './src/components/icone';

// create a component

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      escolhaUsuario: '',
      escolhaComputador: '',
      resultado: '',
      vitorias: 0,
      empates: 0,
      derrotas: 0
    }

  }

  jokenpo(escolhaUsuario) {
    let geraNumeroAleatorio = Math.floor(Math.random() * 3);

    let escolhaComputador = '';
    let vitorias = this.state.vitorias;
    let empates = this.state.empates;
    let derrotas = this.state.derrotas;
    let resultado = '';





    switch (geraNumeroAleatorio) {
      case 0: escolhaComputador = 'Pedra'; break;
      case 1: escolhaComputador = 'Papel'; break;
      case 2: escolhaComputador = 'Tesoura'; break;
    }



    //Caso o computador escolha Pedra
    if (escolhaComputador == 'Pedra') {
      if (escolhaUsuario == 'Pedra') {
        resultado = 'Empate';
        empates += 1;
      }
      if (escolhaUsuario == 'Papel') {
        resultado = 'Você Ganhou!';
        vitorias += 1;
      }
      if (escolhaUsuario == 'Tesoura') {
        resultado = 'Você perdeu!';
        derrotas += 1;
      }
    }

    //Caso o computador escolha Papel
    if (escolhaComputador == 'Papel') {
      if (escolhaUsuario == 'Papel') {
        resultado = 'Empate';
        empates += 1;
      }
      if (escolhaUsuario == 'Tesoura') {
        resultado = 'Você Ganhou!';
        vitorias += 1;
      }
      if (escolhaUsuario == 'Pedra') {
        resultado = 'Você perdeu!';
        derrotas += 1;
      }
    }

    //Caso o computador escolha Tesoura
    if (escolhaComputador == 'Tesoura') {
      if (escolhaUsuario == 'Tesoura') {
        resultado = 'Empate';
        empates += 1;
      }
      if (escolhaUsuario == 'Pedra') {
        resultado = 'Você Ganhou!';
        vitorias += 1;
      }
      if (escolhaUsuario == 'Papel') {
        resultado = 'Você perdeu!';
        derrotas += 1;
      }
    }


    this.setState({ escolhaUsuario, escolhaComputador, resultado, vitorias, derrotas, empates });//na esquerda fica a chave e na direita o valor

  }
  resetar() {
    this.setState({
      empates: 0,
      vitorias: 0,
      derrotas: 0,
      resultado: '',
      escolhaComputador: '',
      escolhaUsuario: '',
    });
  }

  render() {
    return (
      <View styles={styles.total}>
        <Topo></Topo>

        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
            <Button title="Pedra" onPress={() => { this.jokenpo('Pedra') }} />
          </View>
          <View style={styles.btnEscolha}>
            <Button title="Papel" onPress={() => { this.jokenpo('Papel') }} />
          </View>
          <View style={styles.btnEscolha}>
            <Button title="Tesoura" onPress={() => { this.jokenpo('Tesoura') }} />
          </View>
        </View>

        <View style={styles.palco} >

          <Icone escolha={this.state.escolhaUsuario} jogador={'Você'}></Icone>
          <Icone escolha={this.state.escolhaComputador} jogador={'Computador'}></Icone>
          <Text style={styles.txtResultado}> {this.state.resultado} </Text>

        </View>
        <View style={styles.contadores}>
          <Text style={styles.contadoresV}>{this.state.vitorias}</Text>
          <Text style={styles.contadoresE}>{this.state.empates}</Text>
          <Text style={styles.contadoresD}>{this.state.derrotas}</Text>
        </View>
        <View style={styles.btnReset}>
          <Button title='RESET' onPress={() => this.resetar()} color="#2f3542" />
        </View>

      </View>
    );
  }
}

//Criando um novo componente para o topo.


const styles = StyleSheet.create({
  total: {
    backgroundColor: '#FFF',
  },
  painelAcoes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,

  },
  btnEscolha: {
    width: 110,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  contadores: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  contadoresV: {
    backgroundColor: 'green',
    marginRight: 5,
    fontWeight: 'bold',
    fontSize: 15,
    padding: 8,
    color: '#FFF'
  },
  contadoresE: {
    backgroundColor: 'gray',
    marginRight: 5,
    fontWeight: 'bold',
    fontSize: 15,
    padding: 8,
    color: '#FFF'
  },
  contadoresD: {
    backgroundColor: 'red',
    fontWeight: 'bold',
    fontSize: 15,
    padding: 8,
    color: '#FFF'
  },
  btnReset: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  palco: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
});

//make this component available to the app
export default App;

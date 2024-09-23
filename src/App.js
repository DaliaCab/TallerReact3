import React, { Component } from "react";
import Ejercicios, { ContadorClase } from "./Ejercicios";
import { render } from "@testing-library/react";

class App extends React.Component {
  constructor(props) {
    super(props); //Llama al costructor de la clase base React.Component
    this.state = { mostrarContador: true }; //Propiedad de estado que se usa para saber si se muestra o no el msj, está en true
  }

  toggleContador =()=>{ //Invertimos el valor de mostrar contador
    this.setState((prevState) => ({
      mostrarContador: !prevState.mostrarContador,  //Alternamos entre true y false
    }));
  }

  render() {
    return(
      <div>
        <button onClick={this.toggleContador}>
          {this.state.mostrarContador ? "Desmonatar contador" : "Montar contador"}
        </button>
        {this.state.mostrarContador && <ContadorClase/>}
      </div>
    )
  }
}

export default App;

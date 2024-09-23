import React from "react";

export class ContadorClase extends React.Component{
        constructor(props){
            super(props)
            this.state = {num: 0};  //Icializamos en 0 
        }

        incrementar = ()=>{  //Actualizamos el contador en el state
            this.setState({num: this.state.num +1});
        }

        componentDidMount(){
            console.log("El componente se ha montado")
        }

        componentDidUpdate(prevState, prevProps){
            if (prevState.num !== this.state.num){
                console.log("El componente se ha actualizado")
            }
        }

        componentWillUnmount(){
            console.log("El componenente se elimina")
        }
    
        render() {
            return ( //Botón para aumentar el contador y mostrar estado-valor actual
              <div>
                <button onClick={this.incrementar}>Incrementar</button>
                <p>Contador: {this.state.num}</p>
              </div>
            );
          }
    }
import React from 'react';
import { FormGroup, Input, } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

  export default class Formulario extends React.Component{
    onSubmit = (salida)=>{
      salida.preventDefault()
      var contenido = document.getElementById("texto").value;
      // console.log(contenido.toUpperCase());
      document.getElementById("result").innerHTML = contenido.toUpperCase();
    }

    render(){
      return (
        <div className="container my-5 py-5">
        <div className="col-4"></div>
        <div className="col-4 m-auto">
        <p className="text-justify">Funcionalidad: El usuario deberá escribir una frase en minúsculas en el input de texto, cuando el usuario presiones enter o de click sobre el botón ‘MAYUS’ el valor del input de texto debe de mandarse a la API la cual deberá tomar ese texto transformar esos valores a mayúsculas y devolverlos al front-end. Cuando el texto en mayúsculas llegue a front-end deberá ser desplegado en la posición donde en la ilustración se ve ‘HOLA’. </p>
        <form onSubmit={this.onSubmit}>
          <FormGroup>
            <Input type="text" name="text" id="texto" placeholder="Escribe un texto" style={{ textTransform: 'lowercase'}}/>
          </FormGroup>
          <button>MAYUS</button>
        </form>
        <div className="text-center my-4" id="">
          <p id="result"></p>
        </div>
        </div>
        <div className="col-4"></div>
        </div>
      );
    }
  }

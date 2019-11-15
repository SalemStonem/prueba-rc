import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

var cadena = document.getElementById("texto");

const Formulario = (props) => {
  return (
    <div className="container my-5 py-5">
    <div className="col-4"></div>
    <div className="col-4 m-auto">
    <p className="text-justify">Funcionalidad: El usuario deberá escribir una frase en minúsculas en el input de texto, cuando el usuario presiones enter o de click sobre el botón ‘MAYUS’ el valor del input de texto debe de mandarse a la API la cual deberá tomar ese texto transformar esos valores a mayúsculas y devolverlos al front-end. Cuando el texto en mayúsculas llegue a front-end deberá ser desplegado en la posición donde en la ilustración se ve ‘HOLA’. </p>
    <Form>
      <FormGroup>
        <Input type="text" name="text" id="texto" placeholder="Escribe un texto" style={{ textTransform: 'lowercase'}}/>
      </FormGroup>
      <Button>MAYUS</Button>
    </Form>
    <div className="text-center" id="result"></div>
    </div>
    <div className="col-4"></div>
    </div>
  );
}

export default Formulario;

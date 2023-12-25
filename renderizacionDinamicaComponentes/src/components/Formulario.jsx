// Formulario.jsx
import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Alert from './Alert'; // Asegúrate de importar el componente Alert

const Formulario = ({ agregarColaborador, limpiarAlerta }) => {
  const [nuevoColaborador, setNuevoColaborador] = useState({
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoColaborador({ ...nuevoColaborador, [name]: value });
    limpiarAlerta(); // Limpiar la alerta al cambiar cualquier campo del formulario
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarColaborador(nuevoColaborador);
    setNuevoColaborador({
      nombre: '',
      correo: '',
      edad: '',
      cargo: '',
      telefono: '',
    });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingrese el nombre" name="nombre" value={nuevoColaborador.nombre} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formCorreo">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="email" placeholder="Ingrese el correo" name="correo" value={nuevoColaborador.correo} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formEdad">
          <Form.Label>Edad</Form.Label>
          <Form.Control type="number" placeholder="Ingrese la edad" name="edad" value={nuevoColaborador.edad} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formCargo">
          <Form.Label>Cargo</Form.Label>
          <Form.Control type="text" placeholder="Ingrese el cargo" name="cargo" value={nuevoColaborador.cargo} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formTelefono">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control type="tel" placeholder="Ingrese el teléfono" name="telefono" value={nuevoColaborador.telefono} onChange={handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Agregar Colaborador
        </Button>
      </Form>
      
      {/* Alerta debajo del botón */}
      <Row className="mt-3">
        <Col>
          <Alert mensaje={Alert.mensaje} tipo={Alert.tipo} limpiarAlerta={limpiarAlerta} />
        </Col>
      </Row>
    </div>
  );
};

export default Formulario;

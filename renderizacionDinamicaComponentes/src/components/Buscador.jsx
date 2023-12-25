// Buscador.jsx
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Buscador = ({ buscarColaboradores }) => {
  const [filtro, setFiltro] = useState('');

  const handleChange = (e) => {
    setFiltro(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    buscarColaboradores(filtro);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBuscador">
        <Form.Label>Buscar Colaborador</Form.Label>
        <Form.Control type="text" placeholder="Ingrese el filtro de búsqueda" value={filtro} onChange={handleChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Buscar
      </Button>
    </Form>
  );
};

export default Buscador;

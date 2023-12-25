// App.jsx
import React, { useState } from 'react';
import { BaseColaboradores } from './BaseColaboradores';
import Listado from './components/Listado';
import Formulario from './components/Formulario';
import Buscador from './components/Buscador';
import Alert from './components/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alerta, setAlerta] = useState({ mensaje: '', tipo: '' });

  const agregarColaborador = (nuevoColaborador) => {
    if (nuevoColaborador.nombre && nuevoColaborador.correo && nuevoColaborador.edad && nuevoColaborador.cargo && nuevoColaborador.telefono) {
      setColaboradores([...colaboradores, { ...nuevoColaborador, id: (colaboradores.length + 1).toString() }]);
      setAlerta({ mensaje: 'Colaborador agregado exitosamente', tipo: 'success' });
    } else {
      setAlerta({ mensaje: 'Todos los campos son obligatorios', tipo: 'danger' });
    }
  };

  const limpiarAlerta = () => {
    setAlerta({ mensaje: '', tipo: '' });
  };

  const buscarColaboradores = (filtro) => {
    const resultado = BaseColaboradores.filter((colaborador) =>
      Object.values(colaborador).some((value) => value.toString().toLowerCase().includes(filtro.toLowerCase()))
    );
    setColaboradores(resultado);
  };

  const eliminarColaborador = (id) => {
    const nuevoListado = colaboradores.filter((colaborador) => colaborador.id !== id);
    setColaboradores(nuevoListado);
  };

  return (
    <div className="container mt-4">
      <h1>Gestor de Colaboradores</h1>
      <Formulario agregarColaborador={agregarColaborador} limpiarAlerta={limpiarAlerta} />
      <Alert mensaje={alerta.mensaje} tipo={alerta.tipo} limpiarAlerta={limpiarAlerta} />
      <Buscador buscarColaboradores={buscarColaboradores} />
      <Listado colaboradores={colaboradores} eliminarColaborador={eliminarColaborador} />
    </div>
  );
};

export default App;
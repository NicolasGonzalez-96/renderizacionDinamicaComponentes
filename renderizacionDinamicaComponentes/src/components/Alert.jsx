// Alert.jsx
import React, { useEffect } from 'react';
import { Alert as BootstrapAlert } from 'react-bootstrap';

const Alert = ({ mensaje, tipo, limpiarAlerta }) => {
  useEffect(() => {
    if (mensaje) {
      const timer = setTimeout(() => {
        limpiarAlerta();
      }, 3000); // Limpiar la alerta después de 3 segundos
      return () => clearTimeout(timer);
    }
  }, [mensaje, limpiarAlerta]);

  return mensaje ? <BootstrapAlert variant={tipo}>{mensaje}</BootstrapAlert> : null;
};

export default Alert;

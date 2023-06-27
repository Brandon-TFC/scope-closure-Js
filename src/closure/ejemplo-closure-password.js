function crearValidadorContraseña() {
    let contraseña = '';
  
    function setContraseña(nuevaContraseña) {
      contraseña = nuevaContraseña;
      console.log('Contraseña actualizada');
    }
  
    function validarContraseña(input) {
      if (input === contraseña) {
        console.log('Contraseña válida');
      } else {
        console.log('Contraseña inválida');
      }
    }
  
    return {
      setContraseña,
      validarContraseña
    };
  }
  
  const validador = crearValidadorContraseña();
  validador.setContraseña('secreto');
  validador.validarContraseña('secreto');   // Imprime 'Contraseña válida'
  validador.validarContraseña('contrasena');  // Imprime 'Contraseña inválida'
  validador.validarContraseña('abc123');    // Imprime 'Contraseña inválida'
  
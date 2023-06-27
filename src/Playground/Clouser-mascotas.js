function createPetList() {
    // Variable para almacenar la lista de mascotas
    const petList = [];
  
    // Función de flecha que actúa como el closure
    return (info) => {
      // Si se proporciona un valor para 'info', se agrega a la lista de mascotas
      if (info) {
        petList.push(info);
      }
      // Se devuelve la lista de mascotas, ya sea vacía o con los elementos agregados
      return petList;
    };
  }
  const petList = createPetList();
  console.log(petList('michi'));
  console.log(petList('firulais'));
  console.log(petList());
  
  
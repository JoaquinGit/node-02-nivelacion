/*
Callback:

- Funcion que se pasa como parametro de otra funcion.
- Primero se tiene que ejecutar la funcion y luego el callback ( no se sabe cuando)
*/


/*setTimeout(() => {
    console.log('Hola Mundo');
},2000);*/

/*const saludar = () => {
    console.log('Hola Mundo');
}

setTimeout(saludar, 2000);*/

const getUsuarioById = (id, callback) => {

    const user = {
        id,
        nombre: 'Fernando'
    }

    //setTimeout(() => user, 1000); // error: undefined

    // getUsuarioById ejecuta la función que le pasan
    setTimeout(() => callback(user), 1000);

}

// le paso a getUsuarioById la función que quiero que me ejecute cuando tenga el usuario listo para devolverlo
getUsuarioById(10, ({nombre, id}) => console.log(`Nombre: ${nombre.toUpperCase()} - Id: ${id}`));

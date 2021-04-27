const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Marta'
    },
    {
        id: 3,
        nombre: 'Manuel'
    }
]

const sueldos = [
    {
        id: 1,
        sueldo: 1500
    },
    {
        id: 2,
        sueldo: 2000
    },
]

const getEmpleadoById = async (id) => {
    
    try{
        const empleado = empleados.find( (e) => e.id === id );    
        if(empleado){
            return empleado;
        }

        // simulo error cuando no encuentra el id ( en el ejemplo no da error como sí lo haría con una base de datos)
        // este error pasa al catch 
        throw new Error(`El empleado con id ${id} no existe`);
    } catch (error) {
        throw error;
    }
}
const getSueldoById = async (id) => {
    
    try{
        const sueldo = sueldos.find( (e) => e.id === id );    
        if(sueldo){
            return sueldo;
        }
        throw new Error(`El sueldo con id ${id} no existe`);
    } catch (error) {
        throw error;
    }
}

const id = 3;

// reúne las dos promesas
const getDatosCompletosEmpleado = async (id) => {

    try{
        // await: espera a tener la repuesta de la promesa getEmpleado
        // await bloquea el código. .then no bloquea.
        const empleado = await getEmpleadoById(id);
        const sueldo = await getSueldoById(id);
        return {
            id,
            nombre: empleado.nombre,
            sueldo: sueldo.sueldo
        }

       /*  console.log(empleado.nombre);
        return; */

    } catch (err) {
        throw err;
    }

}

// sin .then devuelve promesa pendiente, sin .catch muestra error de promesa rechazada no manejada.
getDatosCompletosEmpleado(id)
    .then(data => console.log(`El empleado con id ${data.id} es ${data.nombre} y tiene un sueldo de ${data.sueldo}`))
    .catch(err => console.log(err.message));
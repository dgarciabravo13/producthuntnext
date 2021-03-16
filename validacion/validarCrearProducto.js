export default function validarCrearProducto(valores){

    let errores = {};


    //Validar el nombre del usuario
    if(!valores.nombre){
        errores.nombre = "El Nombre es Obligatorio"
    }

    //Validar empresa 
    if(!valores.empresa){
        errores.empresa = "El nombre de Empresa es Obligatorio"
    }

    //Validar URL
    if(!valores.url){
        errores.url = "La url es Obligatoria"
    } else if(!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)) {
        errores.url = "URL mal formateada o no válida"
    }

    //Validar Descripcion
    if(!valores.descripcion){
        errores.descripcion = "Agrega una descripcion de tu producto"
    }

    

    return errores;
}
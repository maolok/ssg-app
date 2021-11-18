import axios from 'axios';
export const requests = (data = {}, action ) => {

    switch ( action ) {
        case "Login":
            
            console.log("entre aqui");
            axios.post(`http://192.34.58.242:8080/sg-sst/login`, {
                password:data.clave,
                usuario:data.usuario
            }).then((response) => {
                return response;
            })
            

        case "crearEmpleado":
            return {
                logged: false
            }
    
        default:
            return data;
    }
}
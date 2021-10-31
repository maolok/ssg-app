import axios from 'axios';
export const requests = (data = {}, action ) => {

    switch ( action ) {
        case "Login":
            /*
            console.log("entre aqui");
            axios.post(`https://localhost:5000/users`, {
                usuario:data.usuario,
                clave:data.clave
            }).then((response) => {
                return response;
            })
            */

        case "crearusuario":
            return {
                logged: false
            }
    
        default:
            return data;
    }
}
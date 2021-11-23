import axios from 'axios';
export const requests = (data = {}, action ) => {

    switch ( action ) {
        case "Login":
            
            let bodyFormData = new FormData()
            bodyFormData.append('usuario', data.usuario);
            bodyFormData.append('password', data.clave);
            //console.log("entre aqui");
            axios({
                method: "post",
                url: "http://192.34.58.242:8080/sg-sst/login",
                data: bodyFormData,
                headers: { "Content-Type": "multipart/form-data" },
              })
                .then(function (response) {
                  //handle success
                  console.log(response.data);
                  return response;
                })
                .catch(function (response) {
                  //handle error
                  console.log("fail");
                  
                });
            

        case "crearEmpleado":
            return {
                logged: false
            }
    
        default:
            return data;
    }
}
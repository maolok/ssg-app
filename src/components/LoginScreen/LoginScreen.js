import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import { requests } from '../../requests/request';
import { useForm } from "react-hook-form";
import { Bienvenida } from '../Bienvenida/Bienvenida';
import logo from "../../estaticos/logo2.png"
import axios from 'axios';


export const LoginScreen = ({ history }) => {
  
  let bodyFormData = new FormData();

  const logo_estilo = {
        
    height : 100,
    width : 100,
    borderRadius: 5
    
     

  };

  const linea_estilo = {
    borderLeft:    '1px solid hsla(200, 10%, 50%,100)',
    height:         '30vh',
    width:          1   
  };

  const { register, handleSubmit } = useForm();

    const { dispatch } = useContext( AuthContext );

    const handleLogin = (data) => {

      bodyFormData.append('usuario', data.usuario);
      bodyFormData.append('password', data.clave);


      
      axios({
        method: "post",
        url: "http://192.34.58.242:8080/sg-sst/login",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          //handle success
          console.log(response);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
    


      //console.log(data);
      //let response = requests(data,"Login");
      //console.log(response);

        const lastPath = '/bienvenida';


        dispatch({
            type: types.login,
            payload: {
                name: 'Esteban'
            }
        });

        history.replace( lastPath );
       
    }

    return (

      <div className="container">
        <br/>
        <br/>
        <br/>
        <div className="row">
            <div className="col-md-4 offset-md-4">
            <div className="card text-center card  bg-default mb-3">
              <div className="card-header">
                INGRESO SSG-APP
              </div>
              <div className="card-body">
                   <input type="text" id="userName" className="form-control input-sm chat-input" placeholder="Usuario" {...register("usuario", { required: true })} />
                <br/>
                <input type="password" id="userPassword" className="form-control input-sm chat-input" placeholder="Contraseña" {...register("clave", { required: true})} />
              </div>
              <div className="card-footer text-muted">
                <a href="#" className="btn btn-secondary" onClick={ handleSubmit(handleLogin) }>ENTRAR</a>
              </div>
            </div>
            <hr style={linea_estilo}/>
            
          </div>
          <div className="row mb-3">
              <img src={logo} alt={"logo"} className="img-responsive " style={logo_estilo}/>
           </div>
        </div>
        
    </div>
       
    
    )
}

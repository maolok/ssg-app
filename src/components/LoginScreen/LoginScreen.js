import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import { requests } from '../../requests/request';
import { useForm } from "react-hook-form";


export const LoginScreen = ({ history }) => {

  const { register, handleSubmit } = useForm();

    const { dispatch } = useContext( AuthContext );

    const handleLogin = (data) => {

      console.log(data);
      let response = requests(data,"Login");
      console.log(response);

        const lastPath = localStorage.getItem('lastPath') || '/';


        dispatch({
            type: types.login,
            payload: {
                name: 'Esteban'
            }
        });

        history.replace( lastPath );
       
    }

    return (

        <div class="container">
        <br/>
        <br/>
        <br/>
        <div class="row">
            <div class="col-md-4 offset-md-4">
            <div class="card text-center card  bg-default mb-3">
              <div class="card-header">
                INGRESO SSG-APP
              </div>
              <div class="card-body">
                   <input type="text" id="userName" class="form-control input-sm chat-input" placeholder="Usuario" {...register("usuario", { required: true })} />
                <br/>
                <input type="password" id="userPassword" class="form-control input-sm chat-input" placeholder="Contraseña" {...register("clave", { required: true})} />
              </div>
              <div class="card-footer text-muted">
                <a href="#" class="btn btn-secondary" onClick={ handleSubmit(handleLogin) }>ENTRAR</a>
              </div>
            </div>
        </div>
        </div>
    </div>
       
    
    )
}

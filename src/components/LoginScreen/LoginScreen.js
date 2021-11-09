import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import { requests } from '../../requests/request';
import { useForm } from "react-hook-form";
import { Bienvenida } from '../Bienvenida/Bienvenida';


export const LoginScreen = ({ history }) => {

  const { register, handleSubmit } = useForm();

    const { dispatch } = useContext( AuthContext );

    const handleLogin = (data) => {

      console.log(data);
      let response = requests(data,"Login");
      console.log(response);

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
        </div>
        </div>
    </div>
       
    
    )
}

import React, { useContext,useState,useEffect } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import { requests } from '../../requests/request';
import { set, useForm } from "react-hook-form";
import { Bienvenida } from '../Bienvenida/Bienvenida';
import logo from "../../estaticos/logo2.png"
import axios from 'axios';
import { stringify } from 'query-string';


export const LoginScreen = ({ history }) => {
  
  const [usuario,setuser] = useState("");
  const [clave,setpass] = useState("");


  

  const logo_estilo = {
        
    height : 300,
    width : 300,
    marginTop : 50
    
    
     

  };

  const linea_estilo = {
    borderLeft:    '1px solid hsla(200, 10%, 50%,100)',
    height:         '50vh',
    width:          1   
  };

  const { register, handleSubmit } = useForm();

    const { dispatch } = useContext( AuthContext );


    const handleLogin = (e) => {


      e.preventDefault();
      //console.log(e);
     

      let bodyFormData = new FormData()
      bodyFormData.append('usuario', usuario);
      bodyFormData.append('password', clave);
      
      axios({
        method: "post",
        url: "http://192.34.58.242:8080/sg-sst/login",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
         //console.log((response.data.Datos.permisos));

          if (response.data.Codigo == 1){
                  const lastPath = '/bienvenida';

                   let nombre = response.data.Datos.usuario[0].primer_nombre +" "+response.data.Datos.usuario[0].primer_apellido;
                    dispatch({
                        type: types.login,
                        payload: {
                            name: nombre,
                            permisos : response.data.Datos.permisos
                        }
                    });

                 localStorage.setItem('token', response.data.Datos.token);

                  history.replace( lastPath );

  
          }else{
            alert("Usuario o Contraseña Incorrecta");
          }
            



        })
        .catch(function (response) {
          //handle error
          console.log("fail");
          alert("Error conectando al Servidor");
          
        });
       
        

       
    }
  
    const updateInputValue= (evt) => {
      
       setuser(evt.target.value);
    }

    const updateInputValue2= (evt) => {
      
      setpass(evt.target.value);
  }

    return (

      <div className="container">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="row">
            <div className="col-md-4 offset-md-2 mt-5">
            <div className="card text-center card  bg-default mb-3">
              <div className="card-header">
                INGRESO SSG-APP
              </div>
              <form onSubmit={handleLogin}>
              <div className="card-body">
                  <div className="inner-addon left-addon">
                    <i className="fa fa-user"></i>
                    <input type="text" id="userName" className="form-control input-sm chat-input" placeholder="Usuario" onChange={evt => updateInputValue(evt)} required />
                  </div>
                <br/>
                <input type="password" id="userPassword" className="form-control input-sm chat-input" placeholder="Contraseña" onChange={evt => updateInputValue2(evt)} required />
              </div>
              <div className="card-footer text-muted">
                <input type="submit" value="ENTRAR" className="btn btn-info"/>
              </div>
              </form>
            </div>
            
            
            
          </div>
          <div className="col-1">
              <hr style={linea_estilo}/>
            </div>
          <div className="col-1">
              <img src={logo} alt={"logo"} className="img-responsive " style={logo_estilo}/>
           </div>
        </div>
        
    </div>
       
    
    )
}

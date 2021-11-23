import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';


export const PrivateRoute = ({
    isAuthenticated,
    permisos,
    component: Component,
    ...rest
}) => {
    
    //localStorage.setItem('lastPath', rest.location.pathname);
    //console.log(rest.location.pathname.substring(1).split("/"));
    //console.log(permisos.length);
    let isauthorized = false;

    //permisos.push({"id_modulo":9,"nombre":"Bienvenida"}); 
    //console.log(permisos);
    if (rest.location.pathname.substring(1).includes("bienvenida") || permisos === undefined){
        isauthorized = true;
    }else{
    permisos.map((permiso)=>{
        //console.log(permiso.nombre.toLowerCase());
        //console.log(rest.location.pathname.substring(1));
        if (permiso.nombre.toLowerCase().includes(rest.location.pathname.substring(1).split("/")[0])){
            isauthorized = true;
        }
        //console.log(isauthorized);

     });
    }
        
    

    return (
        <Route { ...rest }
            component={ (props) => (
                ( isAuthenticated )
                    ? (isauthorized)?( <Component { ...props } /> ): 
                    //alert("no tiene permisos a este modulo") &&
                    ( <Redirect to="/bienvenida" /> )

                    : ( <Redirect to="/login" /> )
            )}
        
        />
    )
}



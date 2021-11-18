import React from 'react'
import logo from '../../estaticos/data-storage.png'; 
import { Link, NavLink, useHistory } from 'react-router-dom';

export const Documentacion = () => {

    const carpetas_principales = {
        
        height : 100,
        width : 100

      };

    return (
        <div className="container">
            <h1>Documentacion</h1>
            <hr />


            <div className="row">

            <Link 
                className="navbar-brand" 
                to="/documentacion/empresa"
            >
                <div >
                        <img style={carpetas_principales} src={logo}Empleados id="empleados"/><br/>
                        <label htmlFor="empleados" className="form-label">Empresa</label>

                </div>
            </Link>

            <Link 
                className="navbar-brand" 
                to="/documentacion/empleados"
            >
                <div>
                        <img style={carpetas_principales} src={logo}Empleados id="empleados"/><br/>
                        <label htmlFor="empleados" className="form-label">Empleados</label>
                        

                </div>
            </Link>

            <Link 
                className="navbar-brand" 
                to="/documentacion/proveedores"
            >
                <div >
                        <img style={carpetas_principales} src={logo}Empleados id="empleados"/><br/>
                        <label htmlFor="empleados" className="form-label">Proveedores</label>

                </div>
            </Link>
                    
            </div>
            
            

            
            

            

          

        </div>

            
    )
}

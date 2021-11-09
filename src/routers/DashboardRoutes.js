import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Documentacion} from '../components/Documentacion/Documentacion';
import { CrearEmpleado } from '../components/Empleados/CrearEmpleado';
import { Empleados } from '../components/Empleados/Empleados';
import { Bienvenida } from '../components/Bienvenida/Bienvenida';
import { Comites } from '../components/comites/Comites';
import { Reportes } from '../components/reportes/Reportes';

export const DashboardRoutes = () => {
    
    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/empleados" component={ Empleados  } />
                    <Route exact path="/documentacion" component={ Documentacion } />
                    <Route exact path="/empleados/crear" component={ CrearEmpleado } />
                    <Route exact path="/asignarusuario" component={ CrearEmpleado } />
                    <Route exact path="/bienvenida" component={ Bienvenida } />
                    <Route exact path="/comites" component={ Comites } />
                    <Route exact path="/reportes" component={ Reportes } />
                    <Route exact path="/proveedores" component={ Bienvenida } />
                    <Route exact path="/parametros" component={ Bienvenida } />
                    <Route exact path="/quejas" component={ Bienvenida } />
                    <Route exact path="/matrices" component={ Bienvenida } />

                    <Redirect to="/bienvenida" />
                </Switch>
            </div>


        </>
    )
}

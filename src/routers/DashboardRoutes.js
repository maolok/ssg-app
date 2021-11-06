import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Documentacion} from '../components/Documentacion/Documentacion';
import { CrearEmpleado } from '../components/Empleados/CrearEmpleado';
import { Empleados } from '../components/Empleados/Empleados';
import { Bienvenida } from '../components/Bienvenida/Bienvenida';

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

                    <Redirect to="/bienvenida" />
                </Switch>
            </div>


        </>
    )
}

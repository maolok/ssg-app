import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Documentacion} from '../components/Documentacion/Documentacion';
import { CrearEmpleado } from '../components/Empleados/CrearEmpleado';
import { Empleados } from '../components/Empleados/Empleados';
import { Bienvenida } from '../components/Bienvenida/Bienvenida';
import { Comites } from '../components/comites/Comites';
import { Reportes } from '../components/reportes/Reportes';
import { DocumentacionEmpleados } from '../components/Documentacion/DocumentacionEmpleados';
import { DocumentacionEmpresa } from '../components/Documentacion/DocumentacionEmpresa';
import { DocumentacionProveedores } from '../components/Documentacion/DocumentacionProveedores';
import { DocumentacionPorEmpleado } from '../components/Documentacion/DocumentacionPorEmpleado';
import { DocumentacionPorProveedor } from '../components/Documentacion/DocumentacionPorProveedor';
import { Proveedores } from '../components/proveedores/Proveedores';
import { Parametros } from '../components/parametros/Parametros';
import { Quejas } from '../components/quejas/Quejas';
import { Matrices } from '../components/matrices/Matrices';
import { EditarEmpleado } from '../components/Empleados/EditarEmpleado';

export const DashboardRoutes = () => {
    
    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/empleados" component={ Empleados  } />
                    <Route exact path="/documentacion" component={ Documentacion } />
                    <Route exact path="/documentacion/empleados" component={ DocumentacionEmpleados } />
                    <Route exact path="/documentacion/empresa" component={ DocumentacionEmpresa } />
                    <Route exact path="/documentacion/proveedores" component={ DocumentacionProveedores} />
                    <Route exact path="/documentacion/empleado/:nombre/:id" component={ DocumentacionPorEmpleado} />
                    <Route exact path="/documentacion/empresa/:nombre/:nit" component={ DocumentacionPorProveedor} />
                    <Route exact path="/empleados/crear" component={ CrearEmpleado } />
                    <Route exact path="/empleados/editar/:cc/:id" component={ EditarEmpleado } />
                    <Route exact path="/asignarusuario" component={ CrearEmpleado } />
                    <Route exact path="/bienvenida" component={ Bienvenida } />
                    <Route exact path="/comites" component={ Comites } />
                    <Route exact path="/reportes" component={ Reportes } />
                    <Route exact path="/proveedores" component={ Proveedores } />
                    <Route exact path="/parametros" component={ Parametros } />
                    <Route exact path="/quejas" component={ Quejas } />
                    <Route exact path="/matrices" component={ Matrices } />

                    <Redirect to="/bienvenida" />
                </Switch>
            </div>


        </>
    )
}

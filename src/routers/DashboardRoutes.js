import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Documentacion, MarvelScreen } from '../components/Documentacion/Documentacion';
import { Usuarios } from '../components/Usuarios/Usuarios';

export const DashboardRoutes = () => {


    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/usuarios" component={ Usuarios } />
                    <Route exact path="/documentacion" component={ Documentacion } />

                    <Redirect to="/usuarios" />
                </Switch>
            </div>


        </>
    )
}

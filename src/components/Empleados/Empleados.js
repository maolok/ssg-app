import React,{useEffect,useState} from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AsignarUsuario } from './AsignarUsuario';
import { Modalview } from './Modal';


export const Empleados = () => {

    const [modal, setmodal] = useState(false);
    const [user, setuser] = useState({});

    const handleUser = (userdata)=>{
        setmodal(!modal);
        //setuser(userdata.cc);
    }

    const data = [
        {
            id : 1,
            nombre: "esteban",
            apellido : "muñoz",
            cc : "123456789",
            usuariocreado : false
        },
        {
            id: 2,
            nombre:"pepito",
            apellido:"perez",
            cc:"987654321",
            usuariocreado: true

        }]

        


    return (
        <div>
            <h1>Empleados</h1>
            <Link 
                        activeClassName="active"
                        className="d-flex justify-content-end" 
                        exact
                        to="/empleados/crear"
                    >
                        <button className="btn btn-info">Nuevo Empleado</button>
            </Link>
            
            <hr/>
<table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Cedula</th>
      <th scope="col">Accion</th>
    </tr>
  </thead>
  <tbody>
      {
          data.map((usuario) => {
            
            return(
                <tr>
                <th scope="row" key={usuario.id}>{usuario.id}</th>
                <td >{usuario.nombre}</td>
                <td>{usuario.apellido}</td>
                <td>{usuario.cc}</td>
                <td>
                    {usuario.usuariocreado ? 
                    
                    <b>Tiene Usuario</b> 
    
                     : 
                     
                    <button className="btn btn-info" onClick={handleUser}>Asignar Usuario</button>}
                    
                    
                    </td>
                </tr>)

          })
      }
    
  </tbody>
</table>


{
    modal ? <Modalview
    
    props={data[0]}

    
    /> : console.log("aaa")
}




        </div>
    )
}

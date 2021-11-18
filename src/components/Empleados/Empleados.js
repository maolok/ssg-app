import React,{useEffect,useState} from 'react'
import { Link, NavLink, useHistory,useParams } from 'react-router-dom';
import { AsignarUsuario } from './AsignarUsuario';
import { Modalview } from './Modal';



export const Empleados = () => {

    const [modal, setmodal] = useState(false);
    const [user, setuser] = useState({});


    useEffect(() => {

        //setmodal(true);
        
      },[user]);

    
    const EditarUser= (userdata)=>{
        setmodal(true);
        //setuser(userdata.cc);
    }
    const handleDelete = (userdata)=>{
        //peticion para borrar empleado
        alert(userdata.id);
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
      <th scope="col">Usuario</th>
      <th scope="col">Editar</th>
      <th scope="col">Eliminar</th>
      <th scope="col">Carpeta</th>
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
                    
                    <button className="btn btn-warning" onClick={() => {setuser(usuario); setmodal(true)}}>Editar Usuario</button>
    
                     : 
                     
                    <button className="btn btn-success" onClick={() => {setuser(usuario); setmodal(true)}}>Asignar Usuario</button>}
                    
                    
                    </td>
                    <td>
                    
                        <Link 
                        className="navbar-brand" 
                        to={{
                            pathname: "/empleados/editar/"+usuario.cc+"/"+usuario.id
                        }}
                        >
                        <button className="btn" ><i class="fa fa-pencil"></i><b>Editar</b></button>

                            
                            
                        </Link>
                    
                    
                    </td>
                    
                    <td>
                    
                     
                    <button className="btn" onClick={handleDelete}><i class="fa fa-trash"></i><b>Eliminar</b></button>
                    
                    
                    </td>
                    <td>
                    
    
                    <Link 
                    className="navbar-brand" 
                    to={{
                        pathname: "/documentacion/empleado/"+usuario.nombre+" "+usuario.apellido+"/"+usuario.cc,
                    }}
                    >
                        <button class="btn"><i class="fa fa-folder"></i><b>Carpeta</b></button>

                        
                        
                    </Link>
                    
                    
                    </td>
                </tr>)

          })
      }
    
  </tbody>
</table>


{
    modal ? <Modalview
    
    cc={user.cc}

    
    /> : console.log()
}




        </div>
    )
}

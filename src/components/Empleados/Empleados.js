import React,{useEffect,useState} from 'react'
import { Link, NavLink, useHistory,useParams } from 'react-router-dom';
import { AsignarUsuario } from './AsignarUsuario';
import { Modalview } from './Modal';
import { ModalEditar } from './ModalEditar';
import axios from 'axios';
import { Spinner } from '../utils/Spinner';
import { Route, Redirect } from 'react-router-dom';



export const Empleados = () => {

    const [modal, setmodal] = useState(false);
    const [modaleditar, setmodaleditar] = useState(false);
    const [user, setuser] = useState({});
    const [empleadosdata,setempleadosdata] = useState([]);
    const [spiner,setspiner] = useState(true);



    const handleDelete = (idempleado)=>{
        
        axios({
        
            method: "delete",
            url: "http://192.34.58.242:8080/sg-sst/empleado/"+idempleado,
            headers : {Authorization:token}
          })
            .then(function (response) {
             //console.log(response.data.Datos);
      
              if (response.data.Codigo == 1){
                 alert("Empleado borrado!");
                 window.location.reload(false);
               }
                
            })
            .catch(function (response) {
              //handle error
              console.log("fail");
              alert("Error conectando al Servidor");
              
            });
    }
    const handleModal = (modalstate) => {
        setmodal(modalstate);
    }
    const handleModalEditar = (modalstate) => {
        setmodaleditar(modalstate);
    }


        let token = localStorage.getItem("token");
        useEffect(() => {
            axios({

                method: "get",
                url: "http://192.34.58.242:8080/sg-sst/empleado",
                headers : {Authorization:token}
              })
                .then(function (response) {
                 console.log(response.data.Datos);
        
                  if (response.data.Codigo == 1){
                         setempleadosdata(response.data.Datos);  
                         setspiner(false);
                  }else if(response.data.Codigo == 2){
                    setspiner(false);
                    alert("no hay datos en la consulta");
                  }
                    
                })
                .catch(function (response) {
                  //handle error
                  console.log("fail");
                  alert("Error conectando al Servidor");
                  
                });
          },[]);

        


    return (
        <div>
            <h1>Empleados</h1>
            
            {spiner ? <Spinner/>:""}

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
          empleadosdata.map((usuario) => {
            
            return(
                <tr>
                <th scope="row" key={usuario.id}>{usuario.id}</th>
                <td >{usuario.primer_nombre}</td>
                <td>{usuario.primer_apellido}</td>
                <td>{usuario.identificacion}</td>
                <td>
                    {usuario.es_instructor ? 
                    
                    <button className="btn btn-warning" onClick={() => {setuser(usuario); setmodaleditar(true)}}>Editar Usuario</button>
    
                     : 
                     
                    <button className="btn btn-success" onClick={() => {setuser(usuario); setmodal(true)}}>Asignar Usuario</button>}
                    
                    
                    </td>
                    <td>
                    
                        <Link 
                        className="navbar-brand" 
                        to={{
                            pathname: "/empleados/editar/"+usuario.identificacion+"/"+usuario.id
                        }}
                        >
                        <button className="btn" ><i class="fa fa-pencil"></i><b>Editar</b></button>

                            
                            
                        </Link>
                    
                    
                    </td>
                    
                    <td>
                    
                     
                    <button className="btn" onClick={() => handleDelete(usuario.id)}><i class="fa fa-trash"></i><b>Eliminar</b></button>
                    
                    
                    </td>
                    <td>
                    
    
                    <Link 
                    className="navbar-brand" 
                    to={{
                        pathname: "/documentacion/empleado/"+usuario.primer_nombre+" "+usuario.primer_apellido+"/"+usuario.id,
                    }}
                    >
                        <button class="btn"><i class="fa fa-folder"></i><b>Documentos</b></button>

                        
                        
                    </Link>
                    
                    
                    </td>
                </tr>)

          })
      }
    
  </tbody>
</table>


{
    modal ? <Modalview
    
    cc={user.identificacion}
    id={user.id}
    nombre={user.primer_nombre}
    isuser={user.es_instructor}
    modalstate={handleModal}

    
    /> : ""
}

{
    modaleditar ? <ModalEditar
    
    cc={user.identificacion}
    id={user.id}
    nombre={user.primer_nombre}
    isuser={user.es_instructor}
    modalstate={handleModalEditar}

    
    /> : ""
}




        </div>
    )
}

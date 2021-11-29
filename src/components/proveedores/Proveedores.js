import React,{useEffect,useState} from 'react'
import { Link, NavLink, useHistory,useParams } from 'react-router-dom';
import axios from 'axios';
import { Spinner } from '../utils/Spinner';


export const Proveedores = () => {
    const [proveedores,setproveedores] = useState([]);
    const [spiner,setspiner] = useState(true);

    let token = localStorage.getItem("token");
        useEffect(() => {
            axios({

                method: "get",
                url: "http://192.34.58.242:8080/sg-sst/proveedor",
                headers : {Authorization:token}
              })
                .then(function (response) {
                 console.log(response.data.Datos);
        
                  if (response.data.Codigo == 1){
                         setproveedores(response.data.Datos);  
                         setspiner(false);
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
            <h1>Proveedores</h1>
            {spiner ? <Spinner/>:""}
            <Link 
                        activeClassName="active"
                        className="d-flex justify-content-end" 
                        exact
                        to="/proveedores/crear"
                    >
                        <button className="btn btn-info">Nuevo Proveedor</button>
            </Link>
            
            <hr/>
<table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Razon Social</th>
      <th scope="col">NIT</th>
      <th scope="col">Es Autorizado</th>
      <th scope="col">Editar</th>
      <th scope="col">Eliminar</th>
      <th scope="col">Carpeta</th>
   </tr>
  </thead>
  <tbody>
      {
          proveedores.map((proveedor) => {
            
            return(
                <tr>
                <th scope="row" key={proveedor.id}>{proveedor.id}</th>
                <td >{proveedor.razon_social}</td>
                <td>{proveedor.nit}</td>
                <td>{proveedor.es_autorizado?<i class="fa fa-check"></i>:<i class="fa fa-times"></i>}</td>
                
                    <td>
                    
                        <Link 
                        className="navbar-brand" 
                        to={{
                            pathname: "/empleados/editar/"+proveedor.identificacion+"/"+proveedor.id
                        }}
                        >
                        <button className="btn" ><i class="fa fa-pencil"></i><b>Editar</b></button>

                            
                            
                        </Link>
                    
                    
                    </td>
                    
                    <td>
                    
                     
                    <button className="btn" ><i class="fa fa-trash"></i><b>Eliminar</b></button>
                    
                    
                    </td>
                    <td>
                    
    
                    <Link 
                    className="navbar-brand" 
                    to={{
                        pathname: "/documentacion/empleado/"+proveedor.primer_nombre+" "+proveedor.primer_apellido+"/"+proveedor.id,
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

        </div>
    )
}

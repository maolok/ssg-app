import React,{useEffect,useState} from 'react'
import { Link, NavLink, useHistory,useParams } from 'react-router-dom';
import axios from 'axios';
import { Spinner } from '../utils/Spinner';



export const DocumentacionProveedores = () => {

  const [proveedores,setproveedores] = useState([]);
  const [spiner,setspiner] = useState(true);

    //peticion a proveedores
    
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
            <h1>Documentacion-Proveedores</h1>
            {spiner ? <Spinner/>:""}

            <hr/>

            <table className="table">
  <thead className="thead-dark">
    <tr>
      
      <th scope="col">Carpetas</th>
      
    </tr>
  </thead>
  <tbody>
      {
          proveedores.map((proveedor) => {
    
            return(
                <tr>
                
                <td >
                <Link 
                className="navbar-brand" 
                to={{
                    pathname: "/documentacion/proveedor/"+proveedor.razon_social+"/"+proveedor.id
                }}
                >
                    <button class="btn"><i class="fa fa-folder"></i><b>{" "+proveedor.razon_social}</b></button>

                    
                    
                </Link>
                </td>
                </tr>
                )



          })


      }

    
  </tbody>
</table>  


        </div>
    )
}

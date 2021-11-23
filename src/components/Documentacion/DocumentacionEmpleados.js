import { Link, NavLink, useHistory } from 'react-router-dom';
import React,{useEffect,useState} from 'react'
import axios from 'axios';



export const DocumentacionEmpleados = () => {

  const [empleadosdata,setempleadosdata] = useState([]);


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
                  }
                    
                })
                .catch(function (response) {
                  //handle error
                  console.log("fail");
                  alert("Error conectando al Servidor");
                  
                });
          },[]);

    //peticion a empleados
    

   

    return (
        <div>
            <h1>Documentacion-Empleados</h1>
            <hr/>

            <table className="table">
  <thead className="thead-dark">
    <tr>
      
      <th scope="col">Carpetas</th>
      
    </tr>
  </thead>
  <tbody>
      {
          empleadosdata.map((usuario) => {
    
            return(
                <tr>
                
                <td >
                <Link 
                className="navbar-brand" 
                to={{
                    pathname: "/documentacion/empleado/"+usuario.primer_nombre+" "+usuario.primer_apellido+"/"+usuario.id,
                }}
                >
                    <button class="btn"><i class="fa fa-folder"></i><b>{" "+usuario.primer_nombre+" "+usuario.primer_apellido+"-"+usuario.identificacion}</b></button>

                    
                    
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
